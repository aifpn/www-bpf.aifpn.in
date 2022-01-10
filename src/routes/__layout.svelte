<script lang="ts" context="module">
    export async function load({ url }) {
        return {
            props: {
                path: url.pathname,
            },
        };
    }
</script>

<script lang="ts">
    // import <TW_CSS>: For Dev

    import { derived } from "svelte/store";
    import { blur } from "svelte/transition";
    import { locale } from "$lib/stores/locale";
    import { cfg } from "$lib/config";

    import Header from "$ui/Header.svelte";
    import Nav from "$ui/Nav.svelte";
    import Footer from "$ui/Footer.svelte";

    export let path = "/";

    const i18n = derived(locale, ($locale) => {
        // locale: english (en)
        let strings: {
            title: string;
            sub_title: string;
        } = {
            title: "Bharat Protection Force",
            sub_title: "संपत्ति सुरक्षा, स्वामी रक्षा",
        };

        switch ($locale) {
            case "hi":
                strings.title = "भारत सुरक्षा बल";
        }

        return strings;
    });
</script>

<svelte:head>
    {#if !cfg.is_dev}
        <link rel="stylesheet" href="/tailwind.css" />
    {/if}
</svelte:head>

{#key path}
    <Header styles="p-4 w-full h-full flex-cij sm:flex-row">
        <img slot="logo" src="/assets/logo-full.png" alt="bpf-logo" />
        <span slot="title" class="text-lg sm:text-2xl sm:my-1 md:text-3xl md:my-2 text-center font-extrabold"
            >{$i18n.title}</span
        >
        <span slot="sub-title" class="my-2 md:text-2xl text-red-500 font-extrabold">{$i18n.sub_title}</span>
        <span
            slot="menu-btn"
            class="sm:hidden px-4 py-2 m-1 text-center font-medium rounded-lg cursor-pointer bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 text-sm"
            ><i class="fas fa-bars"></i></span
        >
    </Header>
    <Nav
        path="{path}"
        styles="text-white flex-rij rounded-xl font-bold bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br"
    />
    <section
        id="content"
        class="p-8 w-full min-h-screen flex-ci"
        in:blur="{{ duration: 300, delay: 300, amount: 5 }}"
        out:blur="{{ duration: 300 }}"
    >
        <slot />
    </section>
    <Footer styles="p-4 w-full h-full flex-cij" />
{/key}
