<script lang="ts">
    // import <TW_CSS>: For Dev

    import { onDestroy, onMount } from "svelte";

    import { goto } from "$app/navigation";
    import { page } from "$app/stores";

    import { cfg } from "$lib/config";
    import { locale, localizedPath } from "$lib/i18n";

    let lastLocale = $locale;

    let unsubscribe = () => {};

    onMount(() => {
        unsubscribe = locale.subscribe((newLocale) => {
            goto(localizedPath($page.url.pathname, lastLocale, newLocale), { replaceState: true });
            lastLocale = newLocale;
        });

        if (!["en", "hi"].some((x) => $page.url.pathname.startsWith(`/${x}`))) {
            goto(localizedPath($page.url.pathname, "", `${lastLocale}/`), { replaceState: true });
        }
    });
    onDestroy(unsubscribe);
</script>

<svelte:head>
    {#if !cfg.is_dev}
        <link rel="stylesheet" href="/tailwind.css" />
    {/if}
</svelte:head>

<slot />
