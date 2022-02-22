<script lang="ts" context="module">
    export async function load({ error, status }) {
        return {
            props: {
                status,
                error,
            },
        };
    }
</script>

<script lang="ts">
    import { derived } from "svelte/store";

    import { page } from "$app/stores";

    import type { IMeta } from "$lib/types";

    import { cfg } from "$lib/config";

    import Meta from "$ui/Meta.svelte";

    export let status: number;
    export let error: Error;

    const t = derived(page, ($page) => {
        // locale: english (en)
        let data: { msg: string } = { msg: "" };

        if (status === 404) {
            data.msg = "Page Not Found";

            switch ($page.params.locale) {
                case "hi":
                    data.msg = "पृष्ठ नहीं मिला";
            }
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        title: `${status} (Error)`,
        description: `Error ${status}`,
    };
</script>

<Meta metaData="{metaData}" />

<section id="error" class="px-8 w-full min-h-screen flex-cij">
    <span class="my-2 font-bold text-9xl text-error">{status}</span>
    <span class="my-2 font-semibold text-3xl capitalize">{error.message || $t.msg}</span>

    {#if cfg.is_dev}
        <div class="my-2 w-2/3 h-1/2 shadow-xl bg-white p-4 overflow-auto break-words">
            {error.stack}
        </div>
    {/if}
</section>
