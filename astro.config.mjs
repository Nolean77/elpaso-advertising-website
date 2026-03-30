// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// TODO: Update site URL to production domain before launch
// https://astro.build/config
export default defineConfig({
  site: 'https://elpasoadvertisingsolutions.com',
  integrations: [sitemap()],
  adapter: cloudflare(),
});