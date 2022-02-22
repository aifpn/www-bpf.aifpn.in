<script lang="ts">
    import { derived } from "svelte/store";

    import { page } from "$app/stores";

    import type { IMeta } from "$lib/types";

    import { cfg } from "$lib/config";

    export let metaData: Partial<IMeta> = {};

    const t = derived(page, ($page) => {
        // locale: english (en)
        let data: {
            title: string;
            description: string;
            keywords: string[];
        } = {
            title: "Bharat Protection Force",
            description: "Official Website for Bharat Protection Force",
            keywords: [
                "aifpn",
                "bpf",
                "food processing",
                "indian food processing nigam",
                "bharat protection",
                "protection force",
                "bharat protection force",
            ],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "भारत सुरक्षा बल";
                data.description = "भारत सुरक्षा बल की आधिकारिक वेबसाइट";
                data.keywords = [
                    "एआईएफपीएन",
                    "बीपीएफ",
                    "खाद्य प्रसंस्करण",
                    "भारतीय खाद्य प्रसंस्करण निगम",
                    "भारत संरक्षण",
                    "रक्षा बल",
                    "भारत सुरक्षा बल",
                ];
        }

        return data;
    });

    metaData = {
        url: `/${$page.params.locale}`,
        robots: "index,follow",
        keywords: [],
        sitemapUrl: `/${$page.params.locale}/sitemap.xml`,
        ...metaData,
        title: `${metaData.title || ""}${metaData.title && " - "}${$t.title}`,
        description: metaData.description || $t.description,
    };

    metaData = {
        ...metaData,
        keywords: [...metaData.keywords, ...$t.keywords],
        openGraph: {
            ...metaData.openGraph,
            url: `${cfg.base_url}${metaData.url}`,
            title: metaData.title,
            description: metaData.description,
            locale: `${$page.params.locale}_IN`,
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

    {#if metaData && metaData.title && metaData.sitemapUrl}
        <link rel="sitemap" type="application/xml" title="{`${$t.title} - Sitemap`}" href="{metaData.sitemapUrl}" />
    {/if}

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
        <link rel="canonical" href="{`${cfg.base_url}${metaData.url}`}" />
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
