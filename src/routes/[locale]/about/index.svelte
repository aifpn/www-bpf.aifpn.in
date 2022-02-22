<script lang="ts">
    import { onMount } from "svelte";

    import { goto } from "$app/navigation";

    import { page } from "$app/stores";

    import { cfg } from "$lib/config";

    onMount(() => {
        goto(`${cfg.base_url}/${$page.params.locale}/about/bpf`, { replaceState: true });
    });
</script>
