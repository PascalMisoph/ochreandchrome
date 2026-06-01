import { defineConfig } from "astro/config";
import { affiliateLinks } from "./src/data/affiliate-links.mjs";

// Turn the affiliate cloak map into /recommends/{slug} redirects.
// Static build emits one redirect page per slug; Vercel serves them as redirects.
// To add/swap a link, edit src/data/affiliate-links.ts only.
const recommendsRedirects = Object.fromEntries(
  Object.entries(affiliateLinks).map(([slug, url]) => [`/recommends/${slug}`, url])
);

export default defineConfig({
  redirects: {
    ...recommendsRedirects
  }
});
