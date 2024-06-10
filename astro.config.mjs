import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import preact from "@astrojs/preact";

// import storyblok from '@storyblok/astro';
// import { loadEnv } from 'vite';

// const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    mdx({
      optimize: true,
    }),
  ],
});