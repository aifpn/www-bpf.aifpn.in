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
                points: string[];
            };
            keywords: string[];
        } = {
            title: "Eligibility To Join",
            content: {
                desc: "BPF i.e. Bharat Protection Force, which is responsible for the security of All India Food Processing Nigam. All India Food Processing Nigam recruit male and female constable for Bharat Protection Force by conducting BPF constable exam. The eligibility criteria to join BPF:",
                points: [
                    "To apply in BPF, it is necessary to pass at least 10th standard.",
                    "To apply in BPF, your age limit should be between 18 to 25 years. Apart from this, there is a relaxation in the upper age limit of 5 years for SC / ST candidates and 3 years for OBC candidates.",
                    "BPF also has physical measurement. In which the height of the male should be from 160 cm to 165 cm. At the same time, the height of the woman should be from 152 cm to 157 cm.",
                    "To take admission in BPF, the minimum chest measurement of a male should be 80 cms. At the same time, it should increase by 5 cm on inflating. That is, it should be 85 centimeters.To take admission in BPF, the minimum chest measurement of a male should be 80 cms. At the same time, it should increase by 5 cm on inflating. That is, it should be 85 centimeters.",
                    "Before taking admission in BPF, candidates are made to run, long jump, high jump for physical efficiency test. In which the men's 1600 meters run is of 5 minutes 45 seconds. And there is a woman's 800 meters. Which has to be completed in 3 minutes 40 seconds. Men's long jump is 14 feet and women's is 9 feet. Men's high jump is up to 4 feet and women's is up to 3 feet.",
                    "Medical examination is also done in BPF. In which the eyes of the candidates should be 6/6. And your eyes should have the power to recognize colors. That is, there should not be a problem of color build-up.",
                    "You should not be one of the persons wearing glasses due to eye problem to be admitted in BPF. Also hearing should not be a problem.",
                    "In this, your weight should be right according to your age.",
                    "You must be a citizen of India to join BPF.",
                ],
            },
            keywords: ["join bpf", "eligibility to join bpf", "eligibility to join bharat protection force"],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "शामिल होने की पात्रता";
                data.content = {
                    desc: "बीपीएफ यानी भारत सुरक्षा बल, जो अखिल भारतीय खाद्य प्रसंस्करण निगम की सुरक्षा के लिए जिम्मेदार है। अखिल भारतीय खाद्य प्रसंस्करण निगम बीपीएफ कांस्टेबल परीक्षा आयोजित करके भारत सुरक्षा बल के लिए पुरुष और महिला कांस्टेबल की भर्ती करता है। बीपीएफ में शामिल होने के लिए पात्रता मानदंड:",
                    points: [
                        "बीपीएफ में आवेदन करने के लिए कम से कम 10वीं पास होना जरूरी है।",
                        "बीपीएफ में आवेदन करने के लिए, आपकी आयु सीमा 18 से 25 वर्ष के बीच होनी चाहिए। इसके अलावा, अनुसूचित जाति / अनुसूचित जनजाति के उम्मीदवारों के लिए 5 वर्ष और ओबीसी उम्मीदवारों के लिए 3 वर्ष की ऊपरी आयु सीमा में छूट है।",
                        "बीपीएफ का शारीरिक माप भी होता है। जिसमें पुरुष की ऊंचाई 160 सेमी से 165 सेमी तक होनी चाहिए। वहीं महिला की ऊंचाई 152 सेमी से 157 सेमी होनी चाहिए।",
                        "बीपीएफ में प्रवेश लेने के लिए पुरुष के सीने का न्यूनतम माप 80 सेंटीमीटर होना चाहिए। वहीं फुलाने पर यह 5 सेंटीमीटर बढ़ जाना चाहिए। यानी 85 सेंटीमीटर होना चाहिए। बीपीएफ में प्रवेश लेने के लिए न्यूनतम एक पुरुष की छाती का माप 80 सेमी होना चाहिए। वहीं, फुलाने पर यह 5 सेमी बढ़ जाना चाहिए। यानी 85 सेंटीमीटर होना चाहिए।",
                        "बीपीएफ में प्रवेश लेने से पहले, उम्मीदवारों को शारीरिक दक्षता परीक्षण के लिए दौड़ने, लंबी कूद, ऊंची कूद के लिए बनाया जाता है। जिसमें पुरुषों की 1600 मीटर दौड़ 5 मिनट 45 सेकंड की होती है। और एक महिला की 800 मीटर होती है। जिसे पूरा करना होता है। 3 मिनट 40 सेकंड में। पुरुषों की लंबी छलांग 14 फीट और महिलाओं की 9 फीट होती है। पुरुषों की ऊंची कूद 4 फीट तक और महिलाओं की 3 फीट तक होती है।",
                        "बीपीएफ में मेडिकल जांच भी होती है। जिसमें अभ्यर्थियों की आंखें 6/6 होनी चाहिए। और आपकी आंखों में रंगों को पहचानने की शक्ति होनी चाहिए। यानी रंग बनने की समस्या नहीं होनी चाहिए।",
                        "आपको बीपीएफ में भर्ती होने के लिए आंखों की समस्या के कारण चश्मा पहनने वाले व्यक्तियों में से एक नहीं होना चाहिए। साथ ही सुनने की समस्या नहीं होनी चाहिए।",
                        "इसमें आपका वजन आपकी उम्र के हिसाब से सही होना चाहिए।",
                        "बीपीएफ में शामिल होने के लिए आपको भारत का नागरिक होना चाहिए।",
                    ],
                };
                data.keywords = [
                    "बीपीएफ में शामिल हों",
                    "बीपीएफ में शामिल होने की पात्रता",
                    "भारत सुरक्षा बल में शामिल होने की पात्रता",
                ];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `/${$page.params.locale}/join/eligibility`,
        title: $t.title,
        keywords: $t.keywords,
    };
</script>

<Meta metaData="{metaData}" />

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title}:</span>
<p class="my-2">{$t.content.desc}</p>
<ol class="flex flex-col p-4">
    {#each $t.content.points as item, idx}
        <li
            class="my-2 flex flex-row transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-red-400"
        >
            <span class="mx-1 text-3xl text-red-500">{idx + 1}</span>
            <span class="mx-4 text-justify">{item}</span>
        </li>
    {/each}
</ol>
