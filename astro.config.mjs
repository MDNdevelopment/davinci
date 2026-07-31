// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://davinciristorante.com.ve',
  // Keep the exact legacy URLs (/ and /cafe.html) that are already indexed
  // and referenced by canonical/hreflang tags, instead of Astro's default
  // /cafe/ directory output.
  build: {
    format: 'file',
  },
});
