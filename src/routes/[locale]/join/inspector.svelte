<script lang="ts">
    import { derived } from "svelte/store";

    import { page } from "$app/stores";

    import type { IMeta } from "$lib/types";

    import Meta from "$ui/Meta.svelte";

    const t = derived(page, ($page) => {
        // locale: english (en)
        let data: {
            title: string;
            desc?: string;
            details: { t: string; c: string }[];
            keywords: string[];
        } = {
            title: "BPF Inspector",
            desc: "A BPF Inspector is an officer of the Bharat Protection Force. Both men and women can work in this position.",
            details: [
                {
                    t: "Selection Process",
                    c: "There is also direct recruitment to become a BPF Inspector for those who are Deputy Inspector, they get the post of Inspector by promotion. In this recruitment is done for selection. In which you have to apply online by visiting the official website of BPF. After applying you will have to give three types of exam.",
                },
                {
                    t: "Written Exam",
                    c: "When you apply. Then you will be told when will be your written exam. In this objective questions are asked related to English, Hindi, General Knowledge, Reasoning and Mathematics. If you pass in the written test then you will be called for physical exam.",
                },
                {
                    t: "Physical Test",
                    c: "A date is fixed for the physical examination. It will be same for all the states which includes a race in which male candidates have to run 4.5 kilometers in 25 minutes and the female candidates have to run 2.25 km. If You pass this exam then you are called for interview.",
                },
                {
                    t: "Interview",
                    c: "After physical exam you have to give interview. Which judges how you handle critical conditions. In this you are asked some questions. When you pass the interview and after your physical examination is done. If all your things are correct Joining letter is given. In which you are told when and where is your first joining.",
                },
                {
                    t: "Qualification",
                    c: "To get the post of BPF Inspector, you need to be a graduate.",
                },
                {
                    t: "Age",
                    c: "To apply for this post. The age of the candidate should be between 21 to 30. SC/ST/OBC candidates are given relaxation in this.",
                },
                {
                    t: "Height (Male)",
                    c: "The height for general category candidates should be 170 cms and that of SC, ST and OBC category candidates should be between 162-165 cms.",
                },
                {
                    t: "Height (Female)",
                    c: "The height should be 157 cms for general category candidates and 152-155 cms for SC, ST and OBC category candidates.",
                },
                {
                    t: "Chest",
                    c: "The chest of general category men should be 80 cms and that of women should be 87 cms. The chest of second category men should be 81 cms and that of women should be 85 cms. This is for normal condition. But when you will inflate your chest there should be a difference of 5 cm means 5 cm should increase.",
                },
                {
                    t: "Medical",
                    c: "You should not have color blindness. And your vision should be 6 by 6.",
                },
                {
                    t: "Salary",
                    c: "The starting salary of a BPF Inspector is Rs 35000 per month. Salary keeps on increasing based on time and experience.",
                },
            ],
            keywords: [
                "join bpf",
                "bpf jobs",
                "bpf recruitment",
                "bpf inspector job",
                "bpf inspector exam syllabus",
                "bharat protection force inspector job",
                "bharat protection force inspector exam syllabus",
            ],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "बीपीएफ निरीक्षक";
                data.desc =
                    "बीपीएफ निरीक्षक भारत सुरक्षा बल का एक अधिकारी होता है। इस पद पर महिला एवं पुरुष दोनों काम कर सकते है।";
                data.details = [
                    {
                        t: "चयन प्रक्रिया",
                        c: "बीपीएफ इंस्पेक्टर बनने के लिए सीधी भर्ती भी होती है जो सहायक विशेष निरीक्षक और विशेष निरीक्षक हैं, उन्हें पदोन्नति द्वारा निरीक्षक का पद मिलता है। इस भर्ती में चयन के लिए किया जाता है। जिसमें आपको ऑनलाइन आवेदन करना होता है बीपीएफ की आधिकारिक वेबसाइट। आवेदन करने के बाद आपको तीन तरह की परीक्षा देनी होगी।",
                    },
                    {
                        t: "लिखित परीक्षा",
                        c: "जब आप आवेदन करेंगे। तब आपको बताया जाएगा कि आपकी लिखित परीक्षा कब होगी। इसमें अंग्रेजी, हिंदी, सामान्य ज्ञान, तर्क और गणित से संबंधित वस्तुनिष्ठ प्रश्न पूछे जाते हैं। यदि आप लिखित परीक्षा में उत्तीर्ण होते हैं तो आपको बुलाया जाएगा। शारीरिक परीक्षा के लिए।",
                    },
                    {
                        t: "शारीरिक परीक्षण",
                        c: "शारीरिक परीक्षा के लिए एक तिथि निर्धारित है। यह सभी राज्यों के लिए समान होगा जिसमें एक दौड़ शामिल है जिसमें पुरुष उम्मीदवारों को 25 मिनट में 4.5 किलोमीटर और महिला उम्मीदवारों को 2.25 किमी दौड़ना है। यदि आप इसे पास करते हैं परीक्षा के बाद आपको साक्षात्कार के लिए बुलाया जाता है।",
                    },
                    {
                        t: "साक्षात्कार",
                        c: "शारीरिक परीक्षा के बाद आपको साक्षात्कार देना होता है। कौन सा जज करता है कि आप महत्वपूर्ण परिस्थितियों को कैसे संभालते हैं। इसमें आपसे कुछ प्रश्न पूछे जाते हैं। जब आप साक्षात्कार पास करते हैं और आपकी शारीरिक परीक्षा हो जाती है। यदि आपकी सभी चीजें सही हैं तो ज्वाइनिंग लेटर है दिया गया है। जिसमें आपको बताया जाता है कि आपकी पहली जॉइनिंग कब और कहां है।",
                    },
                    {
                        t: "योग्यता",
                        c: "बीपीएफ इंस्पेक्टर का पद पाने के लिए आपका स्नातक होना आवश्यक है।",
                    },
                    {
                        t: "आयु",
                        c: "इस पद के लिए आवेदन करने के लिए। उम्मीदवार की आयु 21 से 30 के बीच होनी चाहिए। एससी/एसटी/ओबीसी उम्मीदवारों को इसमें छूट दी गई है।",
                    },
                    {
                        t: "ऊंचाई (पुरुष)",
                        c: "सामान्य श्रेणी के उम्मीदवारों के लिए ऊंचाई 170 सेमी और एससी, एसटी और ओबीसी श्रेणी के उम्मीदवारों की ऊंचाई 162-165 सेमी के बीच होनी चाहिए।",
                    },
                    {
                        t: "ऊंचाई (महिला)",
                        c: "सामान्य श्रेणी के उम्मीदवारों के लिए ऊंचाई 157 सेमी और एससी, एसटी और ओबीसी श्रेणी के उम्मीदवारों के लिए 152-155 सेमी होनी चाहिए।",
                    },
                    {
                        t: "छाती",
                        c: "सामान्य श्रेणी के पुरुषों की छाती 80 सेमी और महिलाओं की 87 सेमी होनी चाहिए। दूसरी श्रेणी के पुरुषों की छाती 81 सेमी और महिलाओं की 85 सेमी होनी चाहिए। यह सामान्य स्थिति के लिए है। लेकिन जब आप आपकी छाती फुलाएगी तो 5 सेमी का अंतर होना चाहिए मतलब 5 सेमी बढ़ जाना चाहिए।",
                    },
                    {
                        t: "मेडिकल",
                        c: "आपको वर्णान्धता नहीं होनी चाहिए। और आपकी दृष्टि 6 बटा 6 होनी चाहिए",
                    },
                    {
                        t: "वेतन",
                        c: "बीपीएफ इंस्पेक्टर का शुरुआती वेतन 35000 रुपये प्रति माह है। समय और अनुभव के आधार पर वेतन बढ़ता रहता है।",
                    },
                ];
                data.keywords = [
                    "बीपीएफ में शामिल हों",
                    "बीपीएफ जॉब्स",
                    "बीपीएफ भर्ती",
                    "बीपीएफ निरीक्षक जॉब",
                    "बीपीएफ निरीक्षक परीक्षा पाठ्यक्रम",
                    "भारत सुरक्षा बल निरीक्षक की नौकरी",
                    "भारत सुरक्षा बल निरीक्षक परीक्षा पाठ्यक्रम",
                ];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `/${$page.params.locale}/join/inspector`,
        title: $t.title,
        keywords: $t.keywords,
    };
</script>

<Meta metaData="{metaData}" />

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title}</span>
{#if $t.desc}
    <p class="my-2">{$t.desc}</p>
{/if}

{#each $t.details as d, idx (idx)}
    <span class="my-2 text-xl font-bold text-gray-600">{d.t}:</span>
    <p class="my-2 flex-cj">{@html d.c}</p>
{/each}
