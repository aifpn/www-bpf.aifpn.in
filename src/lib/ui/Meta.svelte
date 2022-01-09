<script lang="ts">
    import { derived } from "svelte/store";
    import { locale } from "$lib/stores/locale";

    import type { IMeta } from "$lib/types";

    import { cfg } from "$lib/config";

    export let metaData: Partial<IMeta> = {};

    const i18n = derived(locale, ($locale) => {
        // locale: english (en)
        let strings: {
            page_title: string;
            page_description: string;
        } = {
            page_title: "Bharat Protection Force",
            page_description: "Official Website for Bharat Protection Force",
        };

        switch ($locale) {
            case "hi":
                strings.page_title = "भारत सुरक्षा बल";
                strings.page_description = "भारत सुरक्षा बल की आधिकारिक वेबसाइट";
        }

        return strings;
    });

    metaData = {
        description: metaData.description || $i18n.page_description,
        keywords: [
            "aifpn",
            "bpf",
            "food processing",
            "nigam",
            "indian food processing nigam",
            "bharat protection",
            "protection force",
            "bharat protection force",
        ],
        ...metaData,
        title: `${metaData.title || ""}${metaData.title && " - "}${$i18n.page_title}`,
    };

    metaData = {
        ...metaData,
        robots: "index,follow",
        openGraph: {
            ...metaData.openGraph,
            url: `${cfg.base_url}${metaData.url}/`,
            title: metaData.title,
            description: metaData.description,
            locale: `${$locale}_IN`,
        },
        twitter: {
            ...metaData.twitter,
            title: metaData.title,
            description: metaData.description,
        },
    };

    const jsonLd = (content) => `<${"script"} type="application/ld+json">${JSON.stringify(content)}</${"script"}>`;

    $: {
        if (!!metaData.image && typeof metaData.image === "string") {
            metaData.openGraph = {
                ...metaData.openGraph,
                image: `${cfg.base_url}${metaData.image}`,
            };
            metaData.twitter = {
                ...metaData.twitter,
                image: `${cfg.base_url}${metaData.image}`,
            };
        }
        if (typeof metaData.image === "object") {
            metaData.openGraph = {
                ...metaData.openGraph,
                image: `${cfg.base_url}${metaData.image}`,
                "image:width": metaData.image.width,
                "image:height": metaData.image.height,
                "image:alt": metaData.image.alt || metaData.title,
            };
            metaData.twitter = {
                ...metaData.twitter,
                image: `${cfg.base_url}${metaData.image}`,
                "image:alt": metaData.image.alt || metaData.title,
            };
        }
    }
</script>

<svelte:head>
    <meta name="robots" content="{metaData.robots}" />
    <meta name="googlebot" content="{metaData.robots}" />

    {#if metaData && metaData.title}
        <title>{metaData.title}</title>
        <meta name="title" content="{metaData.title}" />
    {/if}

    {#if metaData && metaData.description}
        <meta name="description" content="{metaData.description}" />
    {/if}

    {#if metaData && metaData.keywords}
        <meta name="keywords" content="{metaData.keywords.join(', ')}" />
    {/if}

    {#if metaData && metaData.url && cfg.base_url}
        <link rel="canonical" href="{`${cfg.base_url}${metaData.url}/`}" />
    {/if}

    {#if metaData && metaData.twitter}
        <meta name="twitter:card" content="summary_large_image" />

        {#each Object.keys(metaData.twitter) as tag}
            <meta name="twitter:{tag}" content="{metaData.twitter[tag]}" />
        {/each}
    {/if}

    {#if metaData && metaData.openGraph}
        {#each Object.keys(metaData.openGraph) as tag}
            <meta name="og:{tag}" content="{metaData.openGraph[tag]}" />
        {/each}
    {/if}

    {#if metaData && metaData.url}
        {@html jsonLd({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: metaData.url,
            logo: `${cfg.base_url}/favicon.ico`,
        })}
    {/if}

    {#if metaData && metaData.url && metaData.searchUrl}
        {@html jsonLd({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: metaData.url,
            potentialAction: {
                "@type": "SearchAction",
                target: metaData.searchUrl,
                "query-input": "required name=search_term_string",
            },
        })}
    {/if}
</svelte:head>
