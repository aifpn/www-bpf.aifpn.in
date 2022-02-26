<script lang="ts">
    import { derived } from "svelte/store";

    import { page } from "$app/stores";

    import { cfg } from "$lib/config";

    import type { IMeta } from "$lib/types";

    import Meta from "$ui/Meta.svelte";

    const t = derived(page, ($page) => {
        // locale: english (en)
        let data: {
            title: string;
            keywords: string[];
        } = {
            title: "Gallery",
            keywords: ["bpf gallery", "bharat protection force gallery", "photos of bharat protection force"],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "गैलरी";
                data.keywords = ["बीपीएफ गैलरी", "भारत सुरक्षा बल गैलरी", "भारत सुरक्षा बल की तस्वीरें"];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `/${$page.params.locale}/gallery`,
        title: $t.title,
        keywords: $t.keywords,
    };

    const images = [17, 18, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
</script>

<Meta metaData="{metaData}" />

<div class="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each images as img_id}
        <img
            class="w-full h-60 rounded-xl"
            src="{`${cfg.base_url}/assets/images/img-${img_id}.jpeg`}"
            alt="{`img-${img_id}`}"
        />
    {/each}
</div>
