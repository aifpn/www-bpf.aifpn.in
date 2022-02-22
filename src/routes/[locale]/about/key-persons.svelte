<script lang="ts">
    import { derived } from "svelte/store";

    import { page } from "$app/stores";

    import type { IMeta } from "$lib/types";

    import Meta from "$ui/Meta.svelte";

    const t = derived(page, ($page) => {
        // locale: english (en)
        let data: {
            title: string;
            persons: {
                name: string;
                image: string;
                designation: string;
            }[];
            keywords: string[];
        } = {
            title: "Key Persons",
            persons: [
                {
                    name: "To Be Announced",
                    image: "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png",
                    designation: "-",
                },
            ],
            keywords: ["about bpf", "bpf key persons", "key persons of bharat protection force"],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "प्रमुख व्यक्ति";
                data.persons = [
                    {
                        ...data.persons[0],
                        name: "घोषित किए जाने हेतु",
                    },
                ];
                data.keywords = ["बीपीएफ के बारे में", "बीपीएफ के प्रमुख व्यक्ति", "भारत सुरक्षा बल के प्रमुख व्यक्ति"];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `${$page.params.locale}/about/key-persons`,
        title: $t.title,
        keywords: $t.keywords,
    };
</script>

<Meta metaData="{metaData}" />

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title}:</span>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each $t.persons as person}
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
