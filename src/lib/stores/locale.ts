import { browser } from "$app/env";
import { writable } from "svelte/store";

export const locale = writable<string>(browser ? window.localStorage.getItem("locale") ?? "en" : "en");

locale.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem("locale", value);
    }
});

export { locale as default };
