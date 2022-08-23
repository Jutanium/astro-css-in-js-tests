import { defineConfig } from 'astro/config';
import linaria from '@linaria/rollup';

import solidJs from "@astrojs/solid-js";

import solidStyled from 'babel-plugin-solid-styled';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [solidStyled]
  },
  integrations: [solidJs()]
});