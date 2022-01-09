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
            key_persons_title: string;
            key_persons_details: {
                name: string;
                image: string;
                designation: string;
            }[];
        } = {
            page_title: "About Us",
            about_title: "About BPF:",
            about_content:
                "Bharat Protection Force which has been entrusted with the property security and security of officers and employees of All India Food Processing Nigam.",

            key_persons_title: "Key Persons:",
            key_persons_details: [
                {
                    name: "To Be Announced",
                    image: "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png",
                    designation: "-",
                },
            ],
        };

        switch ($locale) {
            case "hi":
                strings.page_title = "संस्था के बारे में";
                strings.about_title = "बी.पी.एफ. के बारे में:";
                strings.about_content =
                    "भारत सुरक्षा बल जिसे अखिल भारतीय खाद्य प्रसंस्करण निगम की संपत्ति सुरक्षा तथा अधिकारियों व कर्मचारियों की सुरक्षा का जिम्मा सौंपा गया है।";
                strings.key_persons_title = "प्रमुख व्यक्ति:";
                strings.key_persons_details = [
                    {
                        ...strings.key_persons_details[0],
                        name: "घोषित किए जाने हेतु",
                    },
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

<section id="key-persons" class="my-4 w-3/4 flex flex-col">
    <span class="my-4 text-2xl font-bold text-gray-600">{$i18n.key_persons_title}</span>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {#each $i18n.key_persons_details as person}
            <div class="w-full bg-blue-900 rounded-xl overflow-hidden flex-cij">
                <img
                    class="m-6 md:m-4 w-32 h-32 rounded-full border-4 border-yellow-400"
                    src="{person.image}"
                    alt="{person.name}"
                />
                <div class="p-6 md:p-4 w-full text-left text-white flex-cij">
                    <span class="text-xl font-bold">{person.name}</span>
                    <span class="text-base font-normal">{person.designation}</span>
                </div>
            </div>
        {/each}
    </div>
</section>
