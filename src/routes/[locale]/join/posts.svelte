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
            title: "Posts",
            content: [
                { t: "Director General" },
                { t: "Additional Director" },
                { t: "General Inspector" },
                { t: "Deputy General Inspector" },
                { t: "Senior Superintendent" },
                //{ t: "Superintendent" },
                { t: "Additional Superintendent" },
                { t: "Assistant Deputy Superintendent" },
                { t: "Inspector" },
                { t: "Deputy Inspector" },
                { t: "Assistant Inspector" },
                /*{ t: "Director General" },
                { t: "Additional Director General" },
                { t: "Chief Security Commissioner" },
                { t: "Director /J.R BPF Academy" },
                { t: "Deputy Chief Security Commissioner" },
                { t: "Senior Security Commissioner" },
                { t: "Security Commissioner" },
                { t: "Commanding Officer" },
                { t: "Assistant Security Commissioner" },
                { t: "Assistant Commandant" },
                { t: "Post Commander" },
                { t: "Inspector" },
                { t: "Quarter Master" },
                { t: "Special Inspector" },
                { t: "Assistant Special Inspector" },*/
                { t: "Driver" },
                //{ t: "Constable" },
                { t: "Cook" },
                { t: "Tailor" },
                { t: "Barber" },
                { t: "Cobbler" },
                //{ t: "Motor Cleaner" },
                { t: "Dhobi" },
                { t: "Mali" },
            ],
            keywords: ["join bpf", "posts in bpf", "posts in bharat protection force"],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "पद / रैंक";
                data.content = [
                    { t: "महानिदेशक" },
                    { t: "अतिरिक्त निदेशक" },
                    { t: "सामान्य निरीक्षक" },
                    { t: "उप महानिरीक्षक" },
                    { t: "वरिष्ठ अधीक्षक" },
                    //{ t: "अधीक्षक" },
                    { t: "अतिरिक्त अधीक्षक" },
                    { t: "सहायक उप अधीक्षक" },
                    { t: "निरीक्षक" },
                    { t: "उप निरीक्षक" },
                    { t: "सहायक निरीक्षक" },
                    /*{ t: "महानिदेशक" },
                    { t: "अतिरिक्त महानिदेशक" },
                    { t: "मुख्य सुरक्षा आयुक्त" },
                    { t: "निदेशक / जे.आर बीपीएफ अकादमी" },
                    { t: "उप मुख्य सुरक्षा आयुक्त" },
                    { t: "वरिष्ठ सुरक्षा आयुक्त" },
                    { t: "सुरक्षा आयुक्त" },
                    { t: "कमांडिंग ऑफिसर" },
                    { t: "सहायक सुरक्षा आयुक्त" },
                    { t: "सहायक कमांडेंट" },
                    { t: "पोस्ट कमांडर" },
                    { t: "इंस्पेक्टर" },
                    { t: "क्वार्टर मास्टर" },
                    { t: "विशेष निरीक्षक" },*/
                    { t: "चालक" },
                    //{ t: "कांस्टेबल" },
                    { t: "कुक" },
                    { t: "दर्जी" },
                    { t: "नाई" },
                    { t: "मोची" },
                    //{ t: "मोटर क्लीनर" },
                    { t: "धोबी" },
                    { t: "माली" },
                ];
                data.keywords = ["बीपीएफ में शामिल हों", "बीपीएफ में पद", "भारत सुरक्षा बल में पद"];
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
                >{idx + 1}
            </span>
            <span class="mx-2 text-justify text-xl">{post.t}</span>
        </li>
    {/each}
</ol>
