import svelte from 'rollup-plugin-svelte-hot';
import Hmr from 'rollup-plugin-hot'

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';

import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import { copySync, removeSync } from 'fs-extra'
import { spassr } from 'spassr'
import getConfig from '@roxi/routify/lib/utils/config'
import sveltePreprocess from "svelte-preprocess";
import { injectManifest } from 'rollup-plugin-workbox'

const production = !process.env.ROLLUP_WATCH || process.env.NODE_ENV === 'production';
const qa = process.env.QA;
const api = 'http://localhost:7071/api';
const API = (process.env.API || (production && !qa) ? '/api' : api);

const { distDir } = getConfig(); // use Routify's distDir for SSOT
const assetsDir = 'assets';
const buildDir = `${distDir}/build`;
const isNollup = !!process.env.NOLLUP;
// clear previous builds
removeSync(distDir)
removeSync(buildDir)


const serve = () => ({
    writeBundle: async () => {
        const options = {
            assetsDir: [assetsDir, distDir],
            entrypoint: `${assetsDir}/__app.html`,
            script: `${buildDir}/main.js`
        }
        spassr({ ...options, port: 5000 })
        spassr({ ...options, ssr: true, port: 5005, ssrOptions: { inlineDynamicImports: true, dev: true } })
    }
})
const copyToDist = () => ({ writeBundle() { copySync(assetsDir, distDir) } })


export default {
    preserveEntrySignatures: false,
    input: [`src/main.js`],
    output: {
        sourcemap: true,
        format: 'esm',
        dir: buildDir,
        // for performance, disabling filename hashing in development
        chunkFileNames:`[name]${production && '-[hash]' || ''}.js`
    },
    plugins: [replace({
        // 2 level deep object should be stringify
        process: JSON.stringify({
          env: {
            IS_PROD: production,
            SVELTE_APP_API: API,
          },
        }),
        preventAssignment: true,
      }),
        svelte({
            dev: !production, // run-time checks      
            // Extract component CSS — better performance
            css: css => css.write(`bundle.css`),
            hot: isNollup,      
            preprocess: sveltePreprocess({
                postcss: true,
            })
        }),

        // resolve matching modules from current working directory
        resolve({
            browser: true,
            dedupe: importee => !!importee.match(/svelte(\/|$)/)
        }),
        commonjs(),
        json(),
        production && terser(),
        !production && !isNollup && serve(),
        !production && !isNollup && livereload(distDir), // refresh entire window when code is updated
        !production && isNollup && Hmr({ inMemory: true, public: assetsDir, }), // refresh only updated code
        {
            // provide node environment on the client
            transform: code => ({
                code: code.replace(/process\.env\.NODE_ENV/g, `"${process.env.NODE_ENV}"`),
                map: { mappings: '' }
            })
        },
        injectManifest({
            globDirectory: assetsDir,
            globPatterns: ['**/*.{js,css,svg}', '__app.html'],
            swSrc: `src/sw.js`,
            swDest: `${distDir}/serviceworker.js`,
            maximumFileSizeToCacheInBytes: 10000000, // 10 MB,
            mode: 'production'
        }),
        production && copyToDist(),
    ],
    watch: {
        clearScreen: false,
        buildDelay: 100,
    }
}
