/* eslint-disable @typescript-eslint/no-empty-interface */

/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

declare namespace App {
    interface Locals {}

    interface Platform {}

    interface Session {}

    interface Stuff {}
}

interface ImportMetaEnv {
    XQUA_PROD_BASE_URL: string;
    XQUA_DEV_BASE_URL: string;
}

/**
 * With these declarations images can be imported in the components.
 *
 * @example
 * ```svelte
 * 	<script lang=ts>
 * 		import logo from 'static/images/logo.svg';
 * 	</script>
 *
 * 	<img src="{logo}" />
 * ```
 */
declare module "*.gif" {
    const value: string;
    export = value;
}

declare module "*.jpg" {
    const value: string;
    export = value;
}

declare module "*.jpeg" {
    const value: string;
    export = value;
}

declare module "*.png" {
    const value: string;
    export = value;
}

declare module "*.JPG" {
    const value: string;
    export = value;
}

declare module "*.JPEG" {
    const value: string;
    export = value;
}

declare module "*.PNG" {
    const value: string;
    export = value;
}

declare module "*.svg" {
    const value: string;
    export = value;
}

declare module "*.wbep" {
    const value: string;
    export = value;
}
