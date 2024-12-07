import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
import mdx from '@astrojs/mdx';

// import storyblok from '@storyblok/astro';
// import { loadEnv } from 'vite';

// const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    mdx({
      optimize: true,
      extendMarkdownConfig: false
    }),
  ],
  site: 'https://40ftslinky.github.io',
  base: '',
//    buildOptions: ({
//     site: 'https://40ftslinky.github.io',
//     base: '/learning-astro',
//     trailingSlash: always,
//  }),
});

