/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { imagetools } from "vite-imagetools";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            postcss: true,
            scss: {
                prependData: "@import 'src/styles/vars/index.scss';",
                outputStyle: "compressed",
            },
            preserve: ["ld+json"],
        }),
    ],
    kit: {
        adapter: adapter({ precompress: true }),
        prerender: {
            crawl: true,
            enabled: true,
            entries: ["*"],
            onError: "fail",
        },
        vite: () => ({
            resolve: {
                alias: {
                    $ui: resolve(__dirname, "./src/lib/ui"),
                },
            },
            envPrefix: "XQUA_",
            plugins: [imagetools({ force: true })],
            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: "@import 'src/styles/vars/index.scss';",
                    },
                },
            },
        }),
    },
};

export default config;
