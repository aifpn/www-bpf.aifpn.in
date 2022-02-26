<script lang="ts">
    import { derived } from "svelte/store";

    import { page } from "$app/stores";

    import type { IMeta } from "$lib/types";

    import Meta from "$ui/Meta.svelte";

    const t = derived(page, ($page) => {
        // locale: english (en)
        let data: {
            title: string;
            content: { t: string; d?: string }[];
            keywords: string[];
        } = {
            title: "Posts / Ranks",
            content: [
                { t: "Director General" },
                { t: "Additional Director General" },
                { t: "Inspector General" },
                { t: "Deputy Inspector General" },
                { t: "Senior Superintendent" },
                { t: "Superintendent" },
                { t: "Additional Superintendent" },
                { t: "Deputy Superintendent" },
                { t: "Inspector" },
                { t: "Sub Inspector" },
                { t: "Assistant Sub Inspector" },
                { t: "Writer Constable" },
                { t: "Constable" },
                { t: "Follower" },
            ],
            keywords: [
                "join bpf",
                "ranks in bpf",
                "posts in bpf",
                "ranks in bharat protection force",
                "posts in bharat protection force",
            ],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "पद / रैंक";
                data.content = [
                    { t: "महानिदेशक" },
                    { t: "अतिरिक्त महानिदेशक" },
                    { t: "इंस्पेक्टर जनरल" },
                    { t: "डिप्टी इंस्पेक्टर जनरल" },
                    { t: "वरिष्ठ अधीक्षक" },
                    { t: "अधीक्षक" },
                    { t: "अतिरिक्त अधीक्षक" },
                    { t: "उप अधीक्षक" },
                    { t: "इंस्पेक्टर" },
                    { t: "सब इंस्पेक्टर" },
                    { t: "सहायक उप निरीक्षक" },
                    { t: "राइटर कांस्टेबल" },
                    { t: "कांस्टेबल" },
                    { t: "अनुयायी" },
                ];
                data.keywords = [
                    "बीपीएफ में शामिल हों",
                    "बीपीएफ में रैंक",
                    "बीपीएफ में पद",
                    "भारत सुरक्षा बल में रैंक",
                    "भारत सुरक्षा बल में पद",
                ];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `/${$page.params.locale}/join/posts`,
        title: $t.title,
        keywords: $t.keywords,
    };
</script>

<Meta metaData="{metaData}" />

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title}:</span>

<ol class="flex flex-col p-4">
    {#each $t.content as post, idx (idx)}
        <li
            class="my-2 flex items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-blue-400"
        >
            <span class="mx-1 text-xl text-blue-500">
                <svg x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"
                    ><polygon class="fill-current" points="0,255 127.5,0 255,255"></polygon></svg
                >{$t.content.length - idx}
            </span>
            <span class="mx-2 text-justify text-xl">{post.t}</span>
        </li>
    {/each}
</ol>
