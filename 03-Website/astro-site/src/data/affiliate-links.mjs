// Affiliate link cloak map — single source of truth for /recommends/{slug} redirects.
//
// Why this exists: article CTAs link to `ochreandchrome.com/recommends/{slug}`, never to the
// raw merchant or Mavely URL. To swap a destination later (e.g. Mavely deactivates a merchant),
// edit ONE entry here — no article, pin, or component needs to change.
//
// Plain .mjs (no TypeScript) so astro.config.mjs can import it with zero transpilation on any
// platform — avoids the "works locally, errors on Vercel" .ts-config-import trap.
// Wired into astro.config.mjs `redirects` (static build emits one redirect page per slug).
// Canonical mapping documented in 05-Affiliates/Affiliate-Content-Opportunities.md §4.

export const affiliateLinks = {
  // --- Article 1: Woven Rattan Pendants (Lampsmodern, 21%) ---
  "lampsmodern-wicker-rattan-pendant": "https://mavely.app.link/p8dyuxc9A3b", // A29
  "lampsmodern-scalloped-rattan-pendant": "https://mavely.app.link/wWVhBCvRA3b", // A21
  "lampsmodern-rattan-island-pendant": "https://mavely.app.link/zbNyaVd9A3b", // A30
  "lampsmodern-rattan-cone-pendant": "https://mavely.app.link/A2VF5swRA3b", // A22
  "lampsmodern-black-rattan-pendant": "https://mavely.app.link/mF0tXtf9A3b", // A31
  "lampsmodern-simple-rattan-pendant": "https://mavely.app.link/T3s0aSg9A3b", // A32
  "lampsmodern-bamboo-basket-pendant": "https://mavely.app.link/cVIRMTh9A3b", // A33

  // --- Article 2: Neo Deco Statement Lighting ---
  "gubi-multi-lite-pendant": "https://mavely.app.link/fQZIiLpRA3b", // N28
  "flos-2097-chandelier": "https://mavely.app.link/ROWbW1qRA3b", // N29
  "cb2-waltz-chandelier": "https://mavely.app.link/goayqieMA3b", // N02
  "lampsmodern-three-head-pendant": "https://mavely.app.link/yC8OuXiRA3b", // N23
  "mitzi-stella-semi-flush": "https://mavely.app.link/4eI7X8rRA3b", // N30
  "lampsmodern-amber-glass-flush": "https://mavely.app.link/oE0lB1jRA3b", // N24

  // --- Article 3: Natural Fiber / Jute Rugs ---
  "rugsusa-handwoven-jute-blend": "https://mavely.app.link/rDYYKKxRA3b", // A23
  "rugsusa-jute-braided-rug": "https://mavely.app.link/qQuZNAARA3b", // A24
  "safavieh-natural-black-diamond-rug": "https://mavely.app.link/ZJZWMDw9A3b", // A45
  "anthropologie-ferm-gesso-jute-rug": "https://mavely.app.link/VoJS9CTQA3b", // A02
  "rugsusa-chunky-jute-tasseled": "https://mavely.app.link/HvIxHBBRA3b", // A25

  // --- Article 4: Burl Wood & Brass Furniture (CB2) ---
  "cb2-laurent-burl-dining-table": "https://mavely.app.link/3S5rHbtMA3b", // N05
  "cb2-arlo-burl-bar-cabinet": "https://mavely.app.link/7Zt9YSmMA3b", // N04
  "cb2-laurent-burl-dining-chair": "https://mavely.app.link/okmlsbHMA3b", // N07
  "cb2-vesper-brass-console": "https://mavely.app.link/urjJ5DUKA3b", // N03
  "cb2-evening-muse-floor-lamp": "https://mavely.app.link/zKVZsa9LA3b", // N01
  "cb2-portal-mirror": "https://mavely.app.link/O89INhkNA3b", // N11

  // --- Article 5: Afrohemian Vessels & Baskets ---
  "anthropologie-terracotta-vase": "https://mavely.app.link/petxJ6i9A3b", // A34
  "homedepot-torven-black-amphora": "https://mavely.app.link/Bb82qZr9A3b", // A42
  "homedepot-seagrass-ribbed-vase": "https://mavely.app.link/5TmFilt9A3b", // A43
  "athome-wicker-woven-vase": "https://mavely.app.link/WvfTqqB9A3b", // A48
  "homedepot-woven-basket-set": "https://mavely.app.link/K0O0nGu9A3b", // A44
  "athome-woven-wall-basket": "https://mavely.app.link/69APeXz9A3b", // A47
};

/** Build the public cloaked path for a product slug (e.g. for use in components). */
export function recommends(slug) {
  return `/recommends/${slug}`;
}
