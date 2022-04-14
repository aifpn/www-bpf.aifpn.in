<script lang="ts">
    import { derived } from "svelte/store";

    import { page } from "$app/stores";

    import type { IMeta } from "$lib/types";

    import Meta from "$ui/Meta.svelte";

    const t = derived(page, ($page) => {
        // locale: english (en)
        let data: {
            title: string;
            content: { q: string; a: string }[];
            keywords: string[];
        } = {
            title: "FAQs Related to Joining",
            content: [
                {
                    q: "Educational Qualification Required for BPF Constable",
                    a: "If a candidate has not acquired the educational qualification at the time of filling the application form. So the CRC will cancel the candidature of such candidate. To apply for BPF constable exam, you must be at least graduated from any accepted university. Only then you will be eligible for the BPF constable's exam.",
                },
                {
                    q: "BPF Constable Exam Languages",
                    a: `<span>If you want to give the BPF constable's examination through computer in all these languages, then you can give it. You have to choose one of these languages:</span>
                        <ol>
                            <li>1. Hindi</li>
                            <li>2. English</li>
                            <li>3. Urdu</li>
                            <li>4. Tamil</li>
                            <li>5. Telugu</li>
                            <li>6. Konkani</li>
                            <li>7. Malayalam</li>
                            <li>8. Kannada</li>
                            <li>9. Marathi</li>
                            <li>10. Gujarati</li>
                            <li>11. Bengali</li>
                            <li>12. Oriya</li>
                            <li>13. Assamese</li>
                            <li>14. Manipuri</li>
                            <li>15. Punjabi</li>
                        </ol>`,
                },
                {
                    q: "Required nationality of BPF Constable",
                    a: "It is very important for the applicant to have an ID of citizenship of India.",
                },
            ],
            keywords: ["join bpf", "faqs related to joining bpf", "faqs related to joining bharat protection force"],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "शामिल होने से संबंधित अक्सर पूछे जाने वाले प्रश्न";
                data.content = [
                    {
                        q: "बीपीएफ उप निरीक्षक के लिये जरूरी शैक्षणिक योग्यता",
                        a: "यदि किसी उम्मीदवार ने आवेदन पत्र भरने के समय में शैक्षिक योग्यता हासिल नहीं की है। तो CRC ऐसे उम्मीदवार की उम्मीदवारी को रद्द कर देगी। बीपीएफ उप निरीक्षक परीक्षा में आवेदन करने के लिए आपका किसी भी मान्यता प्राप्त विश्व विद्यालय से कम से कम स्नातक उत्तीर्ण किया होना आवश्यक है। तभी आप बीपीएफ उप निरीक्षक की परीक्षा के लिए योग्य होंगे।",
                    },
                    {
                        q: "बीपीएफ उप निरीक्षक परीक्षा भाषाएं",
                        a: `<span>आप इन सभी भाषाओं में बीपीएफ उप निरीक्षक का कम्प्यूटर के माध्यम से परीक्षा देना चाहें तो दे सकते है। आपको इन में से किसी एक भाषा को चुनना होगा:</span>
                            <ol>
                                <li>1. हिन्दी</li>
                                <li>2. अंग्रेजी</li>
                                <li>3. उर्दू</li>
                                <li>4. तमिल</li>
                                <li>5. तेलुगू</li>
                                <li>6. कोंकणी</li>
                                <li>7. मलयालम</li>
                                <li>8. कन्नड़</li>
                                <li>9. मराठी</li>
                                <li>10. गुजराती</li>
                                <li>11. बंगाली</li>
                                <li>12. उड़िया</li>
                                <li>13. असमिया</li>
                                <li>14. मणिपुरी</li>
                                <li>15. पंजाबी</li>
                            </ol>`,
                    },
                    {
                        q: "बीपीएफ उप निरीक्षक की आवश्यक राष्ट्रीयता",
                        a: "आवेदक के पास भारत की नागरिकता की आईडी होना बहुत जरूरी है।",
                    },
                ];
                data.keywords = [
                    "बीपीएफ में शामिल हों",
                    "बीपीएफ में शामिल होने से संबंधित अक्सर पूछे जाने वाले प्रश्न",
                    "भारत सुरक्षा बल में शामिल होने से संबंधित अक्सर पूछे जाने वाले प्रश्न",
                ];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `/${$page.params.locale}/join/faq`,
        title: $t.title,
        keywords: $t.keywords,
    };

    let open = 0;
</script>

<Meta metaData="{metaData}" />

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title}:</span>
<div class="bg-white mx-auto py-6 w-full">
    {#each $t.content as faq, idx (idx)}
        <div class="mb-4 w-full">
            <div
                on:click="{() => (open = open === idx ? -1 : idx)}"
                class="p-4 w-full flex-ri justify-between rounded-xl bg-gray-200 text-gray-600 font-bold cursor-pointer hover:bg-gray-300"
            >
                {faq.q}
                <span class="h-6 w-6 flex-rij text-teal-500">
                    {#if open === idx}
                        <svg
                            class="w-3 h-3 fill-current"
                            viewBox="0 -192 469.33333 469"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0"
                            ></path></svg
                        >
                    {:else}
                        <svg
                            class="w-3 h-3 fill-current"
                            viewBox="0 0 469.33333 469.33333"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"
                            ></path></svg
                        >
                    {/if}
                </span>
            </div>

            {#if open === idx}
                <p class="p-3 text-justify flex-cj">{@html faq.a}</p>
            {/if}
        </div>
    {/each}
</div>
