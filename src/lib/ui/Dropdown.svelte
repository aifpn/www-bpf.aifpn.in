<script lang="ts">
    import { clickOutside } from "$lib/utils";

    export let styles: string = "";

    let open: boolean = false;
</script>

<div use:clickOutside="{() => (open = false)}" class="{`relative ${styles}`}">
    <button on:click="{() => (open = !open)}" class="w-full flex-ri justify-between">
        <slot name="route" />
        <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            class="{`inline w-5 h-5 ml-1 transition-transform duration-200 transform ${
                open === true ? 'rotate-180' : 'rotate-0'
            }`}"
            ><path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path></svg
        >
    </button>
    {#if open === true}
        <slot name="items" />
    {/if}
</div>
