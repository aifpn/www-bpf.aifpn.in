import { writable } from "svelte/store";

import { browser } from "$app/env";
import { base } from "$app/paths";

export function localizedPath(path: string, toRemove: string, newLocale: string): string {
    return (base ? "/" + base : "") + "/" + newLocale + path.substring(toRemove.length + 1);
}

export const locale = writable<string>(browser ? window.localStorage.getItem("locale") ?? "en" : "en");

locale.subscribe((newLocale) => {
    if (browser) {
        window.localStorage.setItem("locale", newLocale);
    }
});

export { locale as default };
