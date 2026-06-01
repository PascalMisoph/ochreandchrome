// 09-Automation/scripts/lib/bundle.mjs
// Parses bundle.md, manages status.json. The single source of truth for the
// pin-folder shape: 04-Content/pinterest/PENDING/{date}/{PIN_ID}/{bundle.md, status.json, pin-final.png}
// (Moved from 99-Inbox/pins/ on 2026-06-01 — Pinterest content now lives under 04-Content/pinterest/.)

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import yaml from 'js-yaml';
import { VAULT_ROOT } from './env.mjs';

const PINTEREST_ROOT = join(VAULT_ROOT, '04-Content', 'pinterest');
export const PENDING_ROOT  = join(PINTEREST_ROOT, 'PENDING');
export const APPROVED_ROOT = join(PINTEREST_ROOT, 'APPROVED');

export function todayDateString() {
  return new Date().toISOString().slice(0, 10);
}

export function pinDir(date, pinId, root = PENDING_ROOT) {
  return join(root, date, pinId);
}

export function findPinDir(pinId, date = null) {
  if (date) {
    const d = pinDir(date, pinId);
    if (existsSync(d)) return { dir: d, date, root: 'PENDING' };
    const a = pinDir(date, pinId, APPROVED_ROOT);
    if (existsSync(a)) return { dir: a, date, root: 'APPROVED' };
  }
  // try today first
  const today = todayDateString();
  for (const root of [PENDING_ROOT, APPROVED_ROOT]) {
    const d = pinDir(today, pinId, root);
    if (existsSync(d)) return { dir: d, date: today, root: root === PENDING_ROOT ? 'PENDING' : 'APPROVED' };
  }
  // scan all dates in both PENDING and APPROVED
  for (const root of [PENDING_ROOT, APPROVED_ROOT]) {
    if (!existsSync(root)) continue;
    for (const d of readdirSync(root)) {
      const full = join(root, d);
      if (!statSync(full).isDirectory()) continue;
      const candidate = join(full, pinId);
      if (existsSync(candidate)) return { dir: candidate, date: d, root: root === PENDING_ROOT ? 'PENDING' : 'APPROVED' };
    }
  }
  return null;
}

export function loadBundle(pinDirPath) {
  const bundlePath = join(pinDirPath, 'bundle.md');
  if (!existsSync(bundlePath)) throw new Error(`No bundle.md in ${pinDirPath}`);
  const raw = readFileSync(bundlePath, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) throw new Error(`No YAML frontmatter in ${bundlePath}`);
  const frontmatter = yaml.load(m[1]);
  const body = m[2];
  return { frontmatter, body, raw, path: bundlePath };
}

export function extractImagePrompt(body) {
  // Section "## 5." up to next "## "
  const start = body.search(/^## 5\./m);
  if (start === -1) throw new Error('No "## 5." section in bundle body');
  const rest = body.slice(start);
  const end = rest.slice(3).search(/^## /m);
  const section = end === -1 ? rest : rest.slice(0, end + 3);
  // first fenced code block
  const fence = section.match(/```[a-zA-Z0-9_-]*\r?\n([\s\S]*?)```/);
  if (!fence) throw new Error('No fenced code block in §5');
  return fence[1].trim();
}

function extractBlockquote(body, sectionNum) {
  const re = new RegExp(`^## ${sectionNum}\\.[^\\n]*\\r?\\n(?:[^\\n]*\\r?\\n)*?>\\s*([^\\n]+)`, 'm');
  const m = body.match(re);
  return m ? m[1].trim() : null;
}

export function extractPinterestMetadata(bundle) {
  const { frontmatter, body } = bundle;
  return {
    pinId: frontmatter.pin_id,
    pillar: frontmatter.pillar,
    aestheticWorld: frontmatter.aesthetic_world,
    title: extractBlockquote(body, 1),
    description: extractBlockquote(body, 3),
    altText: extractBlockquote(body, 4),
    primaryBoard: frontmatter.primary_board,
    secondaryBoard: frontmatter.secondary_board,
    destinationUrl: frontmatter.destination_url,
    destinationStatus: frontmatter.destination_status,
    scheduledTime: frontmatter.scheduled_time,
    scheduledDate: frontmatter.scheduled_date,
    culturalCareRequired: frontmatter.cultural_care?.required,
    culturalCareStatus: frontmatter.cultural_care?.status,
  };
}

export function loadStatus(pinDirPath) {
  const statusPath = join(pinDirPath, 'status.json');
  if (!existsSync(statusPath)) {
    return { pinId: null, status: 'queued', lastUpdated: null, outputFile: null, history: [] };
  }
  return JSON.parse(readFileSync(statusPath, 'utf8'));
}

export function saveStatus(pinDirPath, status) {
  const statusPath = join(pinDirPath, 'status.json');
  writeFileSync(statusPath, JSON.stringify(status, null, 2));
}

export function transitionStatus(pinDirPath, newStatus, extras = {}) {
  const current = loadStatus(pinDirPath);
  const now = new Date().toISOString();
  const history = current.history || [];
  history.push({ status: newStatus, at: now });
  const updated = {
    ...current,
    ...extras,
    status: newStatus,
    lastUpdated: now,
    history,
  };
  saveStatus(pinDirPath, updated);
  return updated;
}
