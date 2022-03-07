<script lang="ts">
    import { derived } from "svelte/store";

    import { page } from "$app/stores";

    import type { IMeta } from "$lib/types";

    import Meta from "$ui/Meta.svelte";
    import { text } from "stream/consumers";

    const t = derived(page, ($page) => {
        // locale: english (en)
        let data: {
            title: string;
            desc?: string;
            eligibility: {
                title: string;
                desc: string;
                list: {
                    key: string;
                    desc: string;
                    list?: { key: string; desc: string }[];
                    table?: {
                        name?: string;
                        headers?: string[];
                        data: string[][];
                    };
                }[];
            };
            medical: {
                title: string;
                desc: string;
                list: {
                    key: string;
                    desc: string;
                    list?: { key: string; desc: string }[];
                    table?: {
                        name?: string;
                        headers?: string[];
                        data: string[][];
                    };
                }[];
                note: string;
            };
            exam_pattern: {
                title: string;
                desc: string;
                list: {
                    key: string;
                    desc?: string;
                    list?: { key: string; desc: string }[];
                    table?: {
                        name?: string;
                        headers?: string[];
                        data: string[][];
                    };
                    table2?: {
                        open: number;
                        name?: string;
                        headers?: string[];
                        data: {
                            sub: string;
                            n_q: string;
                            marks: string;
                            time_limit?: string;
                            topics: string[];
                        }[];
                        footer?: {
                            total: string;
                            n_q: string;
                            marks: string;
                            time_limit: string;
                        };
                    };
                }[];
            };
            keywords: string[];
        } = {
            title: "BPF SI: Special Inspector",
            eligibility: {
                title: "Eligibility",
                desc: "BPF SI Eligibility Criteria has been defined along the following parameters:",
                list: [
                    {
                        key: "Nationality",
                        desc: "Only Indian citizens are eligible to apply for BPF SI Exam.",
                    },
                    {
                        key: "Age Limit",
                        desc: "Candidates should be between 20 to 27 years of age to be eligible for BPF SI Exam. There is age relaxation provided to candidates belonging to reserved categories the details of which are as follows.",
                        list: [
                            { key: "ST&SC candidates", desc: "5 Years" },
                            { key: "OBC", desc: "3 Years" },
                        ],
                    },
                    {
                        key: "Educational Qualifications",
                        desc: "Candidates should have completed their graduation from a recognised college or university.",
                    },
                    {
                        key: "Physical Standards",
                        desc: "The details of the physical Standards are as follows.",
                        table: {
                            headers: ["Category", "Height", "Chest", "Weight"],
                            data: [
                                [
                                    "Male",
                                    "165 cms (160 cms for SC/ST)",
                                    "80 cms (76.2 cms for SC/ST)",
                                    "50 kg (48 kg for SC/ST)",
                                ],
                                ["Female", "157 cms", "", ""],
                            ],
                        },
                    },
                    {
                        key: "Number Of Attempts",
                        desc: "There is no restriction on the number of Attempts for BPF SI Exam. Candidates can apply for the exam. as many times as they want provided they fulfill the above mentioned eligibility criteria.",
                    },
                ],
            },
            medical: {
                title: "Medical Standards",
                desc: "The medical standards for both special inspector and constable are the same. The medical examination takes place after the documents verification round. Candidates are sent to the dist hospital for the same. Students to fulfill the medical category B-1 as per laid in the All India Food Processing Nigam medical manual. It should be noted that candidates wearing glasses, having a flat foot, knock-knee squint eyes, color blindness, and other bodily defects shall be termed as disqualified.",
                list: [
                    {
                        key: "Standards",
                        desc: "B-1",
                    },
                    {
                        key: "Distance Vision",
                        desc: "6/9, 6/12",
                    },
                    {
                        key: "Near Vision",
                        desc: "0.6, 0.6",
                    },
                    {
                        key: "Tests",
                        desc: "Must Pass color vision, Binocular vision, Night vision and Mesopic vision tests",
                    },
                    {
                        key: "Power Of Lenses",
                        desc: "Not to exceed 4D",
                    },
                ],
                note: "Candidates also need to carry the attestation form at the time of medical exam as per the format.",
            },
            exam_pattern: {
                title: "Exam Pattern",
                desc: "The examination is conducted in 2 stages:",
                list: [
                    {
                        key: "Computer Based Test (CBT)",
                        list: [
                            {
                                key: "1",
                                desc: "Candidates have the options to choose a language for CBT from Hindi, English, Urdu, Tamil, Telugu, Konkani, Bengali, Odia, Assamese, Manipuri and Punjabi",
                            },
                            { key: "2", desc: "The standards of questions in BPF SI Exam will be of graduation level" },
                            { key: "3", desc: "Each question carries one mark" },
                            { key: "4", desc: "There is a negative marking of 1/3 marks for wrong answers" },
                            {
                                key: "5",
                                desc: "Candidates are required to obtain 35 percent marks (30 percent marks by SC and ST candidates) to qualify the CBT",
                            },
                            {
                                key: "6",
                                desc: "The duration of the test is 90 minutes the exam paper will have a total of 120 questions",
                            },
                            {
                                key: "7",
                                desc: "Questions in the test will be asked from general awareness, arithmetic and general Intelligence & reasoning",
                            },
                            { key: "8", desc: "The test carries a total of 120 marks" },
                        ],
                        table2: {
                            open: 0,
                            headers: ["Subject", "No. of Questions", "Marks", "Time Limit"],
                            data: [
                                {
                                    sub: "General Awareness: Questions will be aimed at testing the candidate's general awareness of the environment around him and its application to society; to test knowledge of current events and such matters of everyday observations and experiences as may be expected of any educated person.",
                                    n_q: "50",
                                    marks: "50",
                                    time_limit: "1 hr 30 min",
                                    topics: [
                                        "Indian History",
                                        "Art & Culture",
                                        "Geography",
                                        "Economics",
                                        "General Polity",
                                        "Indian Constitution",
                                        "Sports",
                                        "General Science etc.",
                                    ],
                                },
                                {
                                    sub: "Arithmetic",
                                    n_q: "35",
                                    marks: "35",
                                    topics: [
                                        "Number Systems",
                                        "Whole Numbers",
                                        "Decimal and Fractions",
                                        "Relationships between Numbers",
                                        "Fundamental Arithmetical Operations",
                                        "Percentages",
                                        "Ratio and Proportion",
                                        "Averages",
                                        "Interest",
                                        "Profit and Loss",
                                        "Discount",
                                        "Use of table and graphs",
                                        "Mensuration",
                                        "Time and Distance etc.",
                                    ],
                                },
                                {
                                    sub: "General Intelligence & Reasoning",
                                    n_q: "35",
                                    marks: "35",
                                    topics: [
                                        "Analogies",
                                        "Similarities and Differences",
                                        "Spatial Visualization",
                                        "Spatial Orientation",
                                        "Problem Solving Analysis",
                                        "Judgement",
                                        "Decision Making",
                                        "Visual Memory",
                                        "Discriminating Observation",
                                        "Relationship Concepts",
                                        "Arithmetical Reasoning",
                                        "Verbal and Figure classification",
                                        "Arithmetic number series",
                                        "Non-Verbal series",
                                        "Coding and Decoding",
                                        "Statement Conclusion",
                                        "Syllogistic reasoning etc.",
                                    ],
                                },
                            ],
                            footer: {
                                total: "Total",
                                n_q: "120",
                                marks: "120",
                                time_limit: "1 hr 30 min",
                            },
                        },
                    },
                    {
                        key: "Physical Exam Test (PET)",
                        table: {
                            headers: ["Test", "Male", "Female"],
                            data: [
                                ["Running", "1600 meters", "800 meters"],
                                ["Time", "6 min 30 secs", "4 min"],
                                ["Long Jump", "12 ft", "9 ft"],
                                ["High Jump", "3 ft 9 inch", "3 ft"],
                            ],
                        },
                    },
                ],
            },
            keywords: [
                "join bpf",
                "bpf jobs",
                "bpf recruitment",
                "bpf si job",
                "bpf si exam syllabus",
                "bpf special inspector job",
                "bpf special inspector exam syllabus",
                "bharat protection force si job",
                "bharat protection force si exam syllabus",
                "bharat protection force special inspector job",
                "bharat protection force special inspector exam syllabus",
            ],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "बीपीएफ एसआई: विशेष निरीक्षक";
                data.eligibility = {
                    title: "पात्रता",
                    desc: "बीपीएफ एसआई पात्रता मानदंड को निम्नलिखित मापदंडों के साथ परिभाषित किया गया है:",
                    list: [
                        {
                            key: "राष्ट्रीयता",
                            desc: "केवल भारतीय नागरिक ही BPF SI परीक्षा के लिए आवेदन करने के पात्र हैं।",
                        },
                        {
                            key: "आयु सीमा",
                            desc: "बीपीएफ एसआई परीक्षा के लिए पात्र होने के लिए उम्मीदवारों की आयु 20 से 27 वर्ष के बीच होनी चाहिए। आरक्षित श्रेणियों से संबंधित उम्मीदवारों को आयु में छूट प्रदान की जाती है, जिसका विवरण इस प्रकार है।",
                            list: [
                                { key: "एसटी और एससी उम्मीदवार", desc: "5 वर्ष" },
                                { key: "ओबीसी", desc: "3 वर्ष" },
                            ],
                        },
                        {
                            key: "शैक्षिक योग्यता",
                            desc: "उम्मीदवारों को किसी मान्यता प्राप्त कॉलेज या विश्वविद्यालय से स्नातक पूरा करना चाहिए था।",
                        },
                        {
                            key: "भौतिक मानक",
                            desc: "भौतिक मानकों का विवरण इस प्रकार है।",
                            table: {
                                headers: ["श्रेणी", "ऊंचाई", "छाती", "वजन"],
                                data: [
                                    [
                                        "पुरुष",
                                        "165 सेमी (एससी / एसटी के लिए 160 सेमी)",
                                        "80 सेमी (एससी / एसटी के लिए 76.2 सेमी)",
                                        "50 किग्रा (एससी/एसटी के लिए 48 किग्रा)",
                                    ],
                                    ["महिला", "157 सेमी", "", ""],
                                ],
                            },
                        },
                        {
                            key: "प्रयासों की संख्या",
                            desc: "बीपीएफ एसआई परीक्षा के लिए प्रयासों की संख्या पर कोई प्रतिबंध नहीं है। उम्मीदवार परीक्षा के लिए आवेदन कर सकते हैं। वे जितनी बार चाहें उतनी बार आवेदन कर सकते हैं बशर्ते वे उपर्युक्त पात्रता मानदंडों को पूरा करते हों।",
                        },
                    ],
                };
                data.medical = {
                    title: "चिकित्सा मानक",
                    desc: "विशेष निरीक्षक और कांस्टेबल दोनों के लिए चिकित्सा मानक समान हैं। दस्तावेजों के सत्यापन के दौर के बाद चिकित्सा परीक्षा होती है। उम्मीदवारों को उसी के लिए जिला अस्पताल भेजा जाता है। छात्रों को निर्धारित के अनुसार चिकित्सा श्रेणी बी -1 को पूरा करने के लिए। अखिल भारतीय खाद्य प्रसंस्करण निगम चिकित्सा नियमावली में। यह ध्यान दिया जाना चाहिए कि चश्मा पहने हुए, एक सपाट पैर, घुटने टेकने वाली आंखें, रंग अंधापन, और अन्य शारीरिक दोषों वाले उम्मीदवारों को अयोग्य घोषित किया जाएगा। ",
                    list: [
                        {
                            key: "मानक",
                            desc: "बी -1",
                        },
                        {
                            key: "दूरी दृष्टि",
                            desc: "6/9, 6/12",
                        },
                        {
                            key: "नियर विजन",
                            desc: "0.6, 0.6",
                        },
                        {
                            key: "टेस्ट",
                            desc: "रंग दृष्टि, द्विनेत्री दृष्टि, रात्रि दृष्टि और मेसोपिक दृष्टि परीक्षण पास करना चाहिए",
                        },
                        {
                            key: "लेंस की शक्ति",
                            desc: "4D से अधिक नहीं",
                        },
                    ],
                    note: "उम्मीदवारों को भी प्रारूप के अनुसार चिकित्सा परीक्षा के समय सत्यापन फॉर्म ले जाने की आवश्यकता है।",
                };
                data.exam_pattern = {
                    title: "परीक्षा पैटर्न",
                    desc: "परीक्षा 2 चरणों में आयोजित की जाती है:",
                    list: [
                        {
                            key: "कंप्यूटर आधारित टेस्ट (सीबीटी)",
                            list: [
                                {
                                    key: "1",
                                    desc: "उम्मीदवारों के पास हिंदी, अंग्रेजी, उर्दू, तमिल, तेलुगु, कोंकणी, बंगाली, ओडिया, असमिया, मणिपुरी और पंजाबी से सीबीटी के लिए भाषा चुनने का विकल्प है",
                                },
                                { key: "2", desc: "बीपीएफ एसआई परीक्षा में प्रश्नों के मानक स्नातक स्तर के होंगे" },
                                { key: "3", desc: "प्रत्येक प्रश्न में एक अंक होता है" },
                                { key: "4", desc: "गलत उत्तरों के लिए 1/3 अंक का नकारात्मक अंकन है" },
                                {
                                    key: "5",
                                    desc: "उम्मीदवारों को सीबीटी उत्तीर्ण करने के लिए 35 प्रतिशत अंक (एससी और एसटी उम्मीदवारों द्वारा 30 प्रतिशत अंक) प्राप्त करने की आवश्यकता है",
                                },
                                {
                                    key: "6",
                                    desc: "परीक्षा की अवधि 90 मिनट है, परीक्षा के पेपर में कुल 120 प्रश्न होंगे",
                                },
                                {
                                    key: "7",
                                    desc: "परीक्षण में प्रश्न सामान्य जागरूकता, अंकगणित और सामान्य बुद्धि और तर्क से पूछे जाएंगे",
                                },
                                { key: "8", desc: "परीक्षा में कुल 120 अंक हैं" },
                            ],
                            table2: {
                                open: 0,
                                headers: ["विषय", "प्रश्नों की संख्या", "अंक", "समय सीमा"],
                                data: [
                                    {
                                        ...data.exam_pattern.list[0].table2.data[0],
                                        sub: "सामान्य जागरूकता: प्रश्नों का उद्देश्य उम्मीदवार की अपने आस-पास के वातावरण और समाज के लिए उसके आवेदन के बारे में सामान्य जागरूकता का परीक्षण करना होगा; वर्तमान घटनाओं और रोजमर्रा के अवलोकन और अनुभवों के ऐसे मामलों के ज्ञान का परीक्षण करने के लिए जो किसी भी शिक्षित व्यक्ति से अपेक्षित हो सकते हैं। ",
                                        time_limit: "1 घंटा 30 मिनट",
                                        topics: [
                                            "भारतीय इतिहास",
                                            "कला और संस्कृति",
                                            "भूगोल",
                                            "अर्थशास्त्र",
                                            "सामान्य राजनीति",
                                            "भारतीय संविधान",
                                            "खेल",
                                            "सामान्य विज्ञान आदि",
                                        ],
                                    },
                                    {
                                        ...data.exam_pattern.list[0].table2.data[1],
                                        sub: "अंकगणित",
                                        topics: [
                                            "नंबर सिस्टम",
                                            "पूर्ण संख्या",
                                            "दशमलव और अंश",
                                            "संख्याओं के बीच संबंध",
                                            "मौलिक अंकगणितीय संचालन",
                                            "प्रतिशत",
                                            "अनुपात और अनुपात",
                                            "औसत",
                                            "ब्याज",
                                            "लाभ और हानि",
                                            "छूट",
                                            "तालिका और रेखांकन का उपयोग",
                                            "मासिक धर्म",
                                            "समय और दूरी आदि",
                                        ],
                                    },
                                    {
                                        ...data.exam_pattern.list[0].table2.data[2],
                                        sub: "जनरल इंटेलिजेंस एंड रीजनिंग",
                                        topics: [
                                            "सादृश्य",
                                            "समानताएं और भेद",
                                            "स्थानिक विज़ुअलाइज़ेशन",
                                            "स्थानिक उन्मुखीकरण",
                                            "समस्या समाधान विश्लेषण",
                                            "निर्णय",
                                            "निर्णय लेना",
                                            "दृश्य स्मृति",
                                            "भेदभावपूर्ण अवलोकन",
                                            "रिलेशनशिप कॉन्सेप्ट्स",
                                            "अंकगणितीय तर्क",
                                            "मौखिक और चित्र वर्गीकरण",
                                            "अंकगणित संख्या श्रृंखला",
                                            "गैर-मौखिक श्रृंखला",
                                            "कोडिंग और डिकोडिंग",
                                            "बयान निष्कर्ष",
                                            "सिलोलोजिस्टिक रीजनिंग वगैरह",
                                        ],
                                    },
                                ],
                                footer: {
                                    ...data.exam_pattern.list[0].table2.footer,
                                    total: "टोटल",
                                    time_limit: "1 घंटा 30 मिनट",
                                },
                            },
                        },
                        {
                            key: "शारीरिक परीक्षा परीक्षा (पीईटी)",
                            table: {
                                headers: ["टेस्ट", "पुरुष", "महिला"],
                                data: [
                                    ["रनिंग", "1600 मीटर", "800 मीटर"],
                                    ["समय", "6 मिनट 30 सेकंड", "4 मिनट"],
                                    ["लॉन्ग जंप", "12 फीट", "9 फीट"],
                                    ["हाई जंप", "3 फीट 9 इंच", "3 फीट"],
                                ],
                            },
                        },
                    ],
                };
                data.keywords = [
                    "बीपीएफ में शामिल हों",
                    "बीपीएफ जॉब्स",
                    "बीपीएफ भर्ती",
                    "बीपीएफ एसआई जॉब",
                    "बीपीएफ एसआई परीक्षा पाठ्यक्रम",
                    "बीपीएफ विशेष निरीक्षक जॉब",
                    "बीपीएफ विशेष निरीक्षक परीक्षा पाठ्यक्रम",
                    "भारत सुरक्षा बल एसआई जॉब",
                    "भारत सुरक्षा बल एसआई परीक्षा पाठ्यक्रम",
                    "भारत सुरक्षा बल विशेष निरीक्षक की नौकरी",
                    "भारत सुरक्षा बल विशेष निरीक्षक परीक्षा पाठ्यक्रम",
                ];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `/${$page.params.locale}/join/si`,
        title: $t.title,
        keywords: $t.keywords,
    };
</script>

<Meta metaData="{metaData}" />

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title}</span>
{#if $t.desc}
    <p class="my-2">{$t.desc}</p>
{/if}

{#if $t.eligibility}
    <span class="mt-6 mb-2 text-xl font-bold text-gray-600">{$t.eligibility.title}:</span>
    <p class="my-2">{$t.eligibility.desc}</p>
    <ul class="ml-2">
        {#each $t.eligibility.list as item, idx (idx)}
            <li>
                <div class="flex-cj">
                    <span>•<span class="font-bold mx-2">{item.key}:</span>{item.desc}</span>

                    {#if item.list}
                        <ul class="ml-4 my-2">
                            {#each item.list as item2, idx2 (idx2)}
                                <li>•<span class="font-bold mx-2">{item2.key}:</span>{item2.desc}</li>
                            {/each}
                        </ul>
                    {/if}

                    {#if item.table}
                        <div class="w-full mx-auto ml-4 my-4 bg-white shadow-xl rounded-xl border border-gray-200">
                            {#if item.table.name}
                                <header class="px-5 py-4 border-b border-gray-100">
                                    <h2 class="font-semibold text-gray-800">{item.table.name}</h2>
                                </header>
                            {/if}
                            <div class="p-3">
                                <div class="overflow-x-auto">
                                    <table class="table-auto w-full">
                                        {#if item.table.headers}
                                            <thead class="text-sm font-semibold uppercase text-gray-500 bg-slate-200">
                                                <tr>
                                                    {#each item.table.headers as header (header)}
                                                        <th class="p-4">
                                                            {header}
                                                        </th>
                                                    {/each}
                                                </tr>
                                            </thead>
                                        {/if}
                                        <tbody class="text-sm divide-y divide-gray-100">
                                            {#each item.table.data as tdata, idx2 (idx2)}
                                                <tr>
                                                    {#each tdata as d, idx3 (idx3)}
                                                        <td class="p-4 text-center">
                                                            {d}
                                                        </td>
                                                    {/each}
                                                </tr>
                                            {/each}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    {/if}
                </div>
            </li>
        {/each}
    </ul>
{/if}

{#if $t.medical}
    <span class="mt-6 mb-2 text-xl font-bold text-gray-600">{$t.medical.title}:</span>
    <p class="my-2">{$t.medical.desc}</p>
    <ul class="ml-2">
        {#each $t.medical.list as item, idx (idx)}
            <li>
                <div class="flex-cj">
                    <span>•<span class="font-bold mx-2">{item.key}:</span>{item.desc}</span>

                    {#if item.list}
                        <ul class="ml-4 my-2">
                            {#each item.list as item2, idx2 (idx2)}
                                <li>•<span class="font-bold mx-2">{item2.key}:</span>{item2.desc}</li>
                            {/each}
                        </ul>
                    {/if}

                    {#if item.table}
                        <div class="w-full mx-auto ml-4 my-4 bg-white shadow-xl rounded-xl border border-gray-200">
                            {#if item.table.name}
                                <header class="px-5 py-4 border-b border-gray-100">
                                    <h2 class="font-semibold text-gray-800">{item.table.name}</h2>
                                </header>
                            {/if}
                            <div class="p-3">
                                <div class="overflow-x-auto">
                                    <table class="table-auto w-full">
                                        {#if item.table.headers}
                                            <thead class="text-sm font-semibold uppercase text-gray-500 bg-slate-200">
                                                <tr>
                                                    {#each item.table.headers as header (header)}
                                                        <th class="p-4">
                                                            {header}
                                                        </th>
                                                    {/each}
                                                </tr>
                                            </thead>
                                        {/if}
                                        <tbody class="text-sm divide-y divide-gray-100">
                                            {#each item.table.data as tdata, idx2 (idx2)}
                                                <tr>
                                                    {#each tdata as d, idx3 (idx3)}
                                                        <td class="p-4 text-center">
                                                            {d}
                                                        </td>
                                                    {/each}
                                                </tr>
                                            {/each}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    {/if}
                </div>
            </li>
        {/each}
    </ul>
    <span class="w-full my-2"><span class="font-bold mx-2">Note: </span>{$t.medical.note}</span>
{/if}

{#if $t.exam_pattern}
    <span class="mt-6 mb-2 text-xl font-bold text-gray-600">{$t.exam_pattern.title}:</span>
    <p class="my-2">{$t.exam_pattern.desc}</p>
    <ul class="ml-2">
        {#each $t.exam_pattern.list as item, idx (idx)}
            <li>
                <div class="flex-cj">
                    <span
                        >•<span class="font-bold mx-2">{item.key}:</span>{#if item.desc}{item.desc}{/if}</span
                    >

                    {#if item.list}
                        <ul class="ml-4 my-2">
                            {#each item.list as item2, idx2 (idx2)}
                                <li>•<span class="font-bold mx-2">{item2.key}:</span>{item2.desc}</li>
                            {/each}
                        </ul>
                    {/if}

                    {#if item.table}
                        <div class="w-full mx-auto ml-4 my-4 bg-white shadow-xl rounded-xl border border-gray-200">
                            {#if item.table.name}
                                <header class="px-5 py-4 border-b border-gray-100">
                                    <h2 class="font-semibold text-gray-800">{item.table.name}</h2>
                                </header>
                            {/if}
                            <div class="p-3">
                                <div class="overflow-x-auto">
                                    <table class="table-auto w-full">
                                        {#if item.table.headers}
                                            <thead class="text-sm font-semibold uppercase text-gray-500 bg-slate-200">
                                                <tr>
                                                    {#each item.table.headers as header (header)}
                                                        <th class="p-4">
                                                            {header}
                                                        </th>
                                                    {/each}
                                                </tr>
                                            </thead>
                                        {/if}
                                        <tbody class="text-sm divide-y divide-gray-100">
                                            {#each item.table.data as tdata, idx2 (idx2)}
                                                <tr>
                                                    {#each tdata as d, idx3 (idx3)}
                                                        <td class="p-4 text-center">
                                                            {d}
                                                        </td>
                                                    {/each}
                                                </tr>
                                            {/each}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    {/if}

                    {#if item.table2}
                        <div class="w-full mx-auto ml-4 my-4 bg-white shadow-xl rounded-xl border border-gray-200">
                            {#if item.table2.name}
                                <header class="px-5 py-4 border-b border-gray-100">
                                    <h2 class="font-semibold text-gray-800">{item.table2.name}</h2>
                                </header>
                            {/if}
                            <div class="p-3">
                                <div class="overflow-x-auto">
                                    <table class="table-auto w-full">
                                        {#if item.table2.headers}
                                            <thead class="text-sm font-semibold uppercase text-gray-500 bg-slate-200">
                                                <tr>
                                                    {#each item.table2.headers as header (header)}
                                                        <th class="p-4">
                                                            {header}
                                                        </th>
                                                    {/each}
                                                </tr>
                                            </thead>
                                        {/if}
                                        <tbody class="text-sm divide-y divide-gray-100">
                                            {#each item.table2.data as tdata, idx2 (idx2)}
                                                <tr
                                                    on:click="{() =>
                                                        (item.table2.open = item.table2.open === idx2 ? -1 : idx2)}"
                                                    class="cursor-pointer hover:bg-gray-300"
                                                >
                                                    <td class="p-4 flex flex-row">
                                                        <span class="h-6 w-6 flex-rij text-teal-500">
                                                            {#if item.table2.open === idx2}
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
                                                        <td
                                                            rowspan="{item.table2.data.length +
                                                                (item.table2.open === idx2 ? 1 : 0)}"
                                                            class="p-4 text-center"
                                                        >
                                                            {tdata.time_limit}
                                                        </td>
                                                    {/if}
                                                </tr>
                                                {#if item.table2.open === idx2}
                                                    <tr>
                                                        <td colspan="3" class="p-4">
                                                            <ol class="m-2">
                                                                {#each tdata.topics as topic, idx3}
                                                                    <li>{idx3 + 1}: {topic}</li>
                                                                {/each}
                                                            </ol>
                                                        </td>
                                                    </tr>
                                                {/if}
                                            {/each}
                                        </tbody>
                                        {#if item.table2.footer}
                                            <tfoot class="text-sm font-semibold uppercase text-gray-600 bg-slate-200">
                                                <tr>
                                                    <th class="p-2 whitespace-nowrap">{item.table2.footer.total}:</th>
                                                    <th class="p-2 whitespace-nowrap">{item.table2.footer.n_q}</th>
                                                    <th class="p-2 whitespace-nowrap">{item.table2.footer.marks}</th>
                                                    <th class="p-2 whitespace-nowrap"
                                                        >{item.table2.footer.time_limit}</th
                                                    >
                                                </tr>
                                            </tfoot>
                                        {/if}
                                    </table>
                                </div>
                            </div>
                        </div>
                    {/if}
                </div>
            </li>
        {/each}
    </ul>
{/if}
