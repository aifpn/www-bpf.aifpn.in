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
            content: string;
            keywords: string[];
        } = {
            title: "About BPF",
            content:
                "Bharat Protection Force which has been entrusted with the property security and security of officers and employees of All India Food Processing Nigam.",
            keywords: ["about bpf", "about bharat protection force"],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "बी.पी.एफ. के बारे में";
                data.content =
                    "भारत सुरक्षा बल जिसे अखिल भारतीय खाद्य प्रसंस्करण निगम की संपत्ति सुरक्षा तथा अधिकारियों व कर्मचारियों की सुरक्षा का जिम्मा सौंपा गया है।";
                data.keywords = ["बीपीएफ के बारे में", "भारत सुरक्षा बल के बारे में"];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `/${$page.params.locale}/about/bpf`,
        title: $t.title,
        keywords: $t.keywords,
    };

    const images = [5, 6, 15];
</script>

<Meta metaData="{metaData}" />

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title}:</span>
<p>{$t.content}</p>

<div class="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each images as img_id}
        <img
            class="w-full h-60 rounded-xl"
            src="{`${cfg.base_url}/assets/images/img-${img_id}.jpeg`}"
            alt="{`img-${img_id}`}"
        />
    {/each}
</div>
