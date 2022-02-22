<script lang="ts">
    import { derived } from "svelte/store";

    import { page } from "$app/stores";

    import type { IMeta } from "$lib/types";

    import Meta from "$ui/Meta.svelte";

    const t = derived(page, ($page) => {
        // locale: english (en)
        let data: {
            title: string;
            content: {
                desc: string;
                table: {
                    name: string;
                    headers: string[];
                    data: {
                        sub: string;
                        n_q: number;
                        marks: number;
                        time_limit?: string;
                        topics: string[];
                    }[];
                    footer: {
                        total: string;
                        n_q: number;
                        marks: number;
                        time_limit: string;
                    };
                };
            };
            keywords: string[];
        } = {
            title: "Exam Syllabus",
            content: {
                desc: "Bharat Protection Force Syllabus has been told by the department in 4 parts. In this, General Hindi, Law Constitution / Constitution General Knowledge, Numerical / Mental Ability Test, Mental Ability Test / Intelligence Test / Reasoning Test will be asked related to general knowledge of ability.",
                table: {
                    name: "Paper Pattern",
                    headers: ["Subject", "No. of Questions", "Marks", "Time Limit"],
                    data: [
                        {
                            sub: "General Awareness",
                            n_q: 50,
                            marks: 50,
                            time_limit: "1 hr 30 min",
                            topics: [
                                "Art and Culture",
                                "Indian Constitution",
                                "Common Sense",
                                "Economics",
                                "Indian History",
                                "Geography",
                                "General Politics",
                                "Sports etc.",
                            ],
                        },
                        {
                            sub: "General Intelligence and Reasoning",
                            n_q: 35,
                            marks: 35,
                            topics: [
                                "Spatial View",
                                "Visual Memory",
                                "Concept of Relationships",
                                "Comments",
                                "Number Series",
                                "Non-Verbal Series",
                                "Problem Solving and Analysis",
                                "Similarities and Differences",
                                "Analogy",
                                "Holocaust",
                                "Decision Making",
                                "Arithmetic Reasoning",
                                "Spatial Orientation",
                                "Verbal Classification",
                                "Coding and Decoding",
                                "Syllogistic Reasoning etc.",
                            ],
                        },
                        {
                            sub: "Arithmetic",
                            n_q: 35,
                            marks: 35,
                            topics: [
                                "Number System",
                                "Decimals and Fractions",
                                "Whole Numbers",
                                "Fundamental Arithmetic Operations",
                                "Ratio and Proportion",
                                "Interest",
                                "Discount",
                                "Mensuration",
                                "Relationship between numbers",
                                "Percent",
                                "Average",
                                "Profit and Loss",
                                "Table and use of accounting",
                                "Time and Distance etc.",
                            ],
                        },
                    ],
                    footer: {
                        total: "Total",
                        n_q: 120,
                        marks: 120,
                        time_limit: "1 hr 30 min",
                    },
                },
            },
            keywords: [
                "join bpf",
                "bpf exam syllabus",
                "bharat protection force exam syllabus",
                "bharat protection force exam details",
            ],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "परीक्षा का सिलेबस";
                data.content = {
                    desc: "भारत सुरक्षा बल सिलेबस को विभाग ने 4 भागों में बताया है। इनमें सामान्य हिन्दी, कानून संविधान/संविधान सामान्य ज्ञान,  संख्यात्मक/मानसिक क्षमता परीक्षण, मानसिक योग्यता परीक्षा / बुद्धि परीक्षा / तर्क का परीक्षण योग्यता की सामान्य जानकारी सम्बंधित पूछा जायेगा।",
                    table: {
                        name: "पेपर पैटर्न",
                        headers: ["विषय", "प्रश्नों की संख्या", "अंक", "समय सीमा"],
                        data: [
                            {
                                ...data.content.table.data[0],
                                sub: "सामान्य जागरूकता",
                                time_limit: "1 घंटा 30 मिनट",
                                topics: [
                                    "कला और संस्कृति",
                                    "भारतीय संविधान",
                                    "सामान्य ज्ञान",
                                    "अर्थशास्त्र",
                                    "भारतीय इतिहास",
                                    "भूगोल",
                                    "सामान्य राजनीति",
                                    "खेलकूद, आदि",
                                ],
                            },
                            {
                                ...data.content.table.data[1],
                                sub: "जनरल इंटेलिजेंस एंड रीजनिंग",
                                topics: [
                                    "स्थानिक दृश्य",
                                    "विजुअल मेमोरी",
                                    "संबंधों की अवधारणा",
                                    "टिप्पणियों",
                                    "संख्या श्रंखला",
                                    "गैर मौखिक श्रंखला",
                                    "समस्या का समाधान और विश्लेषण",
                                    "समानताएं और अंतर",
                                    "उपमा",
                                    "प्रलय",
                                    "निर्णय लेना",
                                    "अंकगणितीय तर्क",
                                    "स्थानिक उन्मुखीकरण",
                                    "मौखिक वर्गीकरण",
                                    "कोडिंग और डीकोडिंग",
                                    "सिलोजिस्टिक रीजनिंग, आदि",
                                ],
                            },
                            {
                                ...data.content.table.data[2],
                                sub: "अंकगणितीय",
                                topics: [
                                    "संख्या प्रणाली",
                                    "दशमलव और अंश",
                                    "पूर्ण संख्यायें",
                                    "मौलिक अंकगणितीय संचालन",
                                    "अनुपात और समानुपात",
                                    "ब्याज",
                                    "छूट",
                                    "क्षेत्रमिति",
                                    "संख्याओं के बीच संबंध",
                                    "प्रतिशत",
                                    "औसत",
                                    "लाभ और हानि",
                                    "तालिका और लेखांकन का उपयोग",
                                    "समय और दूरी, आदि",
                                ],
                            },
                        ],
                        footer: {
                            ...data.content.table.footer,
                            total: "टोटल",
                            time_limit: "1 घंटा 30 मिनट",
                        },
                    },
                };
                data.keywords = [
                    "बीपीएफ में शामिल हों",
                    "बीपीएफ परीक्षा पाठ्यक्रम",
                    "भारत सुरक्षा बल परीक्षा पाठ्यक्रम",
                    "भारत सुरक्षा बल परीक्षा विवरण",
                ];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `/${$page.params.locale}/join/syllabus`,
        title: $t.title,
        keywords: $t.keywords,
    };

    let open = 0;
</script>

<Meta metaData="{metaData}" />

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title}:</span>
<p class="my-2">{$t.content.desc}</p>

<!-- table -->
<div name="paper-pattern" class="w-full max-w-4xl mx-auto my-4 bg-white shadow-xl rounded-xl border border-gray-200">
    <header class="px-5 py-4 border-b border-gray-100">
        <h2 class="font-semibold text-gray-800">{$t.content.table.name}</h2>
    </header>
    <div class="p-3">
        <div class="overflow-x-auto">
            <table class="table-auto w-full">
                <thead class="text-sm font-semibold uppercase text-gray-500 bg-slate-200">
                    <tr>
                        {#each $t.content.table.headers as header (header)}
                            <th class="p-4">
                                {header}
                            </th>
                        {/each}
                    </tr>
                </thead>
                <tbody class="text-sm divide-y divide-gray-100">
                    {#each $t.content.table.data as tdata, idx (idx)}
                        <tr
                            on:click="{() => (open = open === idx ? -1 : idx)}"
                            class="cursor-pointer hover:bg-gray-300"
                        >
                            <td class="p-4 flex flex-row">
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
                                <span class="ml-2">{tdata.sub}</span>
                            </td>
                            <td class="p-4 text-center">
                                {tdata.n_q}
                            </td>
                            <td class="p-4 text-center">
                                {tdata.marks}
                            </td>
                            {#if tdata.time_limit}
                                <td rowspan="{$t.content.table.data.length}" class="p-4 text-center">
                                    {tdata.time_limit}
                                </td>
                            {/if}
                        </tr>
                        {#if open === idx}
                            <tr>
                                <td colspan="3" class="p-4">
                                    <ol class="m-2">
                                        {#each tdata.topics as topic, idx}
                                            <li>{idx + 1}: {topic}</li>
                                        {/each}
                                    </ol>
                                </td>
                            </tr>
                        {/if}
                    {/each}
                </tbody>
                <tfoot class="text-sm font-semibold uppercase text-gray-600 bg-slate-200">
                    <tr>
                        <th class="p-2 whitespace-nowrap">{$t.content.table.footer.total}:</th>
                        <th class="p-2 whitespace-nowrap">{$t.content.table.footer.n_q}</th>
                        <th class="p-2 whitespace-nowrap">{$t.content.table.footer.marks}</th>
                        <th class="p-2 whitespace-nowrap">{$t.content.table.footer.time_limit}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</div>
