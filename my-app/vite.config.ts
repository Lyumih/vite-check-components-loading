/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import mkcert from'vite-plugin-mkcert'

export default defineConfig(({command, mode}) => {
  console.log(command, mode)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    cacheDir: '../node_modules/.vite/my-app',

    define: {
      'process.env': env
    },


    optimizeDeps: {
      // include: ['../my-lib-2']
    },

    server: {
      https: true,
      port: 4200,
      host: 'localhost',
    },

    preview: {
      port: 4300,
      host: 'localhost',
    },

    plugins: [
      react(),
      viteTsConfigPaths({
        root: '../',
      }),
      mkcert(),
    ],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [
    //    viteTsConfigPaths({
    //      root: '../',
    //    }),
    //  ],
    // },

    test: {
      globals: true,
      cache: {
        dir: '../node_modules/.vitest',
      },
      environment: 'jsdom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
  };
});
