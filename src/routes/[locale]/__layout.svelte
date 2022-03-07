<script lang="ts">
    import { derived } from "svelte/store";

    import { page } from "$app/stores";

    import { cfg } from "$lib/config";

    import Header from "$ui/Header.svelte";
    import NavBar from "$ui/NavBar.svelte";
    import Content from "$ui/Content.svelte";
    import Footer from "$ui/Footer.svelte";

    const t = derived(page, ($page) => {
        // locale: english (en)
        let data: {
            title: string;
            sub_title: string;
            page_path: string;
            localize: (path: string) => string;
        } = {
            title: "Bharat Protection Force",
            sub_title: "संपत्ति सुरक्षा, स्वामी रक्षा",
            page_path: $page.url.pathname,
            localize: (path) => {
                return `/${$page.params.locale}${path}`;
            },
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "भारत सुरक्षा बल";
        }

        return data;
    });

    $: links = [
        {
            name: "AIFPN",
            href: "https://aifpn.in",
        },
        {
            name: "About Us",
            href: $t.localize("/about"),
            childs: [
                {
                    name: "BPF",
                    href: $t.localize("/about/bpf"),
                },
                {
                    name: "Key Persons",
                    href: $t.localize("/about/key-persons"),
                },
            ],
        },
        {
            name: "Join Us",
            href: $t.localize("/join"),
            childs: [
                {
                    name: "Posts",
                    href: $t.localize("/join/posts"),
                },
                {
                    name: "BPF SI",
                    href: $t.localize("/join/si"),
                },
                {
                    name: "Eligibility",
                    href: $t.localize("/join/eligibility"),
                },
                {
                    name: "Syllabus",
                    href: $t.localize("/join/syllabus"),
                },
                {
                    name: "FAQs",
                    href: $t.localize("/join/faq"),
                },
            ],
        },
        {
            name: "Gallery",
            href: $t.localize("/gallery"),
        },
    ];
</script>

{#key $t.page_path}
    <Header styles="p-4 w-full h-full flex-cij sm:flex-row">
        <!-- logo -->
        <img slot="logo" src="{`${cfg.base_url}/assets/logo-full.png`}" alt="bpf-logo" />

        <!-- title -->
        <span slot="title" class="text-lg sm:text-2xl sm:my-1 md:text-3xl md:my-2 text-center font-extrabold">
            {$t.title}
        </span>

        <!-- sub-title -->
        <span slot="sub_title" class="my-2 md:text-2xl text-red-500 font-extrabold">{$t.sub_title}</span>
    </Header>

    <NavBar links="{links}" path="{$t.page_path}" />

    <Content styles="py-8 px-12 w-full min-h-screen flex flex-col">
        <slot />
    </Content>

    <Footer styles="p-4 w-full h-full flex-cij" />
{/key}
