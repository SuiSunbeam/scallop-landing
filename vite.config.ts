import { defineConfig, loadEnv, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import viteEslint from 'vite-plugin-eslint';
import compressPlugin from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import { VitePWA } from 'vite-plugin-pwa';
import { nodePolyfills as nodePolyfillsPlugin } from 'vite-plugin-node-polyfills';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import process from 'process';
import path from 'path';

export const parseEnv = (env: Record<string, string>) => {
  const parsedEnv: Record<string, unknown> = { ...env };

  Object.entries(env).forEach(([key, value]) => {
    if (value == 'true' || value == 'false') parsedEnv[key] = value == 'true' ? true : false;
    else if (/^\d+$/.test(value)) parsedEnv[key] = Number(value);
    else if (value == 'null') parsedEnv[key] = null;
    else if (value == 'undefined') parsedEnv[key] = undefined;
  });
  return parsedEnv;
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = parseEnv(loadEnv(mode, process.cwd(), ''));
  const plugins: PluginOption = [
    // https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react
    react(),
    // https://github.com/gxmari007/vite-plugin-eslint
    viteEslint({
      failOnError: false,
    }),
    // https://github.com/sanyuan0704/vite-plugin-chunk-split
    chunkSplitPlugin({
      strategy: 'default',
    }),
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico'],
      devOptions: {
        enabled: mode === 'production' ? true : false,
      },
    }),
    // https://github.com/davidmyersdev/vite-plugin-node-polyfills
    nodePolyfillsPlugin({
      protocolImports: true,
    }),
  ];

  if (command == 'build') {
    if (env.VITE_PLUGIN_LEGACY === true) {
      plugins.push(
        // https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
        legacy({
          targets: ['> 1%', 'last 2 versions', 'not dead', 'not IE 11'],
        })
      );
    }
    if (env.VITE_PLUGIN_COMPRESS === true) {
      plugins.push(
        // https://github.com/vbenjs/vite-plugin-compression
        compressPlugin({
          verbose: false,
          disable: false,
          threshold: 10240,
          algorithm: 'gzip',
          ext: '.gz',
        })
      );
    }
    if (env.VITE_PLUGIN_IMAGEMIN === true) {
      plugins.push(
        // https://github.com/vbenjs/vite-plugin-imagemin
        viteImagemin({
          gifsicle: {
            optimizationLevel: 7,
            interlaced: false,
          },
          optipng: {
            optimizationLevel: 7,
          },
          mozjpeg: {
            quality: 20,
          },
          pngquant: {
            quality: [0.8, 0.9],
            speed: 4,
          },
          svgo: {
            plugins: [
              {
                name: 'removeViewBox',
              },
              {
                name: 'removeEmptyAttrs',
                active: false,
              },
            ],
          },
        })
      );
    }
  }

  return {
    base: env.VITE_PUBLIC_PATH as string,
    server: {
      host: '0.0.0.0',
      port: env.VITE_SERVER_PORT as number,
      https: false,
      open: false,
      cors: true,
    },
    preview: {
      port: env.VITE_PREVIEW_PORT as number,
    },
    plugins: plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        crypto: 'rollup-plugin-node-polyfills/polyfills/crypto-browserify.js',
      },
    },
    build: {
      base: env.VITE_PUBLIC_PATH,
      target: 'esnext',
      outDir: 'build',
      sourcemap: mode === 'production' ? false : true,
      minify: mode === 'production' ? 'terser' : false,
      terserOptions:
        mode === 'production'
          ? {
              compress: {
                drop_console: true,
                drop_debugger: true,
              },
            }
          : undefined,
      chunkSizeWarningLimit: 3000,
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'esnext',
      },
      rollupOptions: {
        plugins: [nodePolyfills({ crypto: true })],
      },
    },
    define: {
      'process.env': Object.assign(process.env ?? {}, env),
      'import.meta.env.APP_VERSION': JSON.stringify(process.env.npm_package_version),
    },
    // https://github.com/vitest-dev/vitest
    test: {
      globals: true,
      environment: 'happy-dom',
      exclude: ['**/node_modules/**', '**/dist/**'],
      testTimeout: 20000,
    },
  };
});
