<script lang="ts">
    export let href: string = "/";
    export let styles: string = "";
    export let external: boolean = false;
</script>

{#if external}
    <a href="{href}" class="{styles}" rel="external"><slot /></a>
{:else}
    <a sveltekit:prefetch href="{href}" class="{styles}"><slot /></a>
{/if}
