<script lang="ts">
    import { derived } from "svelte/store";
    import { locale } from "$lib/stores/locale";

    import type { IMeta } from "$lib/types";

    import Meta from "$ui/Meta.svelte";

    const i18n = derived(locale, ($locale) => {
        // locale: english (en)
        let strings: {
            page_title: string;
            about_title: string;
            about_content: string;
            eligibility_title: string;
            eligibility_content: string;
            eligibility_points: string[];
        } = {
            page_title: "Join",
            about_title: "What is BPF:",
            about_content:
                "BPF i.e. Bharat Protection Force, which is responsible for the security of All India Food Processing Nigam. All India Food Processing Nigam recruit male and female female constable for Bharat Protection Force by conducting BPF constable exam.",
            eligibility_title: "What is the eligibility to join BPF:",
            eligibility_content: "",
            eligibility_points: [
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
        };

        switch ($locale) {
            case "hi":
                strings.page_title = "संस्था से जुड़ें";
                strings.about_title = "बी.पी.एफ. क्या है:";
                strings.about_content =
                    "बीपीएफ यानी कि भारत सुरक्षा बल है जिसके ऊपर अखिल भारतीय खाद्य प्रसंस्करण निगम की सुरक्षा का जिम्मा होता है। अखिल भारतीय खाद्य प्रसंस्करण निगम बीपीएफ सिपाही परीक्षा आयोजित करके भारत सुरक्षा बल के लिए पुरुष और महिला महिला सिपाही भर्ती करता है।";
                strings.eligibility_title = "बी.पी.एफ. ज्वाइन करने के लिये क्या योग्यता होनी चाहिए:";
                strings.eligibility_points = [
                    "बीपीएफ में आवेदन करने के लिए कम से कम दसवीं कक्षा उत्तीर्ण करना अतिआवश्यक है।",
                    "बीपीएफ में आवेदन करने के लिए आपकी उम्र सीमा 18 से 25 बर्ष तक होनी चाहिए। साथ ही इसमें एससी/एसटी अभ्यर्थियों को 5 साल और OBC अभ्यर्थियों को 3 साल की अधिकतम आयु सीमा में छूट दी जाती है।",
                    "बीपीएफ में शारीरिक मापन भी होता है। जिसमें पुरुष की ऊंचाई 160 सेन्टीमीटर से 165 सेन्टीमीटर तक होनी चाहिए। वहीं महिला की ऊंचाई 152 सेन्टीमीटर से 157 सेन्टीमीटर तक होनी चाहिए।",
                    "बीपीएफ में भर्ती लेने के लिए पुरुष का न्यूनतम सीने की माप 80 सेन्टीमीटर होनी चाहिए। वहीं फुलाने पर 5 सेन्टीमीटर बढ़ जानी चाहिए। यानी 85 सेन्टीमीटर हो जानी चाहिए।",
                    "बीपीएफ में भर्ती लेने से पहले शारीरिक दक्षता परीक्षा के लिए उम्मीदवारों को दौड़, लोंग जंप, हाई जंप कराया जाता है। जिसमें पुरुष की 1600 मीटर दौड़ 5 मिनट 45 सेकेंड की होती है। और वहीं महिला की 800 मीटर की होती है। जिसे 3 मिनट 40 सेकेंड में पूरा करना होता है। पुरूष की लोंग जंप 14 फिट और महिला की 9 फिट होती है। पुरूष का हाई जंप 4 फिट और महिला का 3 फिट तक होती है।",
                    "बीपीएफ में चिकित्सा परीक्षण भी होती है। जिसमें अभ्यर्थियों की आंख 6/6 होनी चाहिए। और आपकी आंखों में रंगों की पहचानने की शक्ति होनी चाहिए। यानी कलर बिल्डनेस की समस्या नहीं होनी चाहिए।",
                    "बीपीएफ में भर्ती होने के लिए आप आंख के प्राब्लम के कारण चश्मा लगाने वाले व्यक्तियों में से नहीं होने चाहिए। साथ ही साथ सुनने में कोई समस्या नहीं होनी चाहिए।",
                    "इसमें आपका वजन आपकी उम्र के हिसाब से ठीक होना चाहिए।",
                    "बीपीएफ में भर्ती होने के लिए आप भारत के नागरिक होने चाहिए।",
                ];
        }

        return strings;
    });

    const metaData: Partial<IMeta> = {
        title: $i18n.page_title,
    };
</script>

<Meta metaData="{metaData}" />

<section id="about-bpf" class="my-4 w-3/4 flex flex-col">
    <span class="my-2 text-2xl font-bold text-gray-600">{$i18n.about_title}</span>
    <p>{$i18n.about_content}</p>
</section>

<section id="eligibility" class="my-4 w-3/4 flex flex-col">
    <span class="my-2 text-2xl font-bold text-gray-600">{$i18n.eligibility_title}</span>
    <p class="my-2">{$i18n.eligibility_content}</p>
    <ol>
        {#each $i18n.eligibility_points as item, idx}
            <li>{idx + 1}. {item}</li>
        {/each}
    </ol>
</section>
