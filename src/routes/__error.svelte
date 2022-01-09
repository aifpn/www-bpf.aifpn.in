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
    import type { IMeta } from "$lib/types";

    import { cfg } from "$lib/config";

    import Link from "$ui/Link.svelte";
    import Meta from "$ui/Meta.svelte";

    export let status: number;
    export let error: Error;

    const metaData: Partial<IMeta> = {
        title: `${status} (Error)`,
        description: `Error ${status}`,
    };
</script>

<Meta metaData="{metaData}" />

<section id="error" class="px-8 w-full min-h-screen flex-cj flex-col">
    <span class="my-2 font-bold text-9xl text-error }}">{status}</span>
    <span class="my-2 font-semibold text-3xl capitalize">{error.message}</span>

    {#if cfg.is_dev}
        <div class="my-2 w-2/3 h-1/2 card shadow-xl bg-base-100">
            <div class="card-body">
                <h2 class="card-title">Error Stack</h2>
                <p class="p-4 overflow-auto break-words">{error.stack}</p>
            </div>
        </div>
    {/if}
</section>
