<script lang="ts">
    import { locale } from "$lib/i18n";
    import { isMenuOpen } from "$lib/store";

    import Link from "$ui/Link.svelte";

    export let styles: string = "";
</script>

<header class="{styles}">
    <Link href="/" styles="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 cursor-pointer">
        <slot name="logo" />
    </Link>
    <div class="relative w-full h-32 sm:h-40 md:h-44 flex-cij">
        <slot name="title" />
        <slot name="sub_title" />

        <div class="sm:absolute top-0 right-0 text-white flex-rij">
            <Link
                href="#content"
                styles="px-4 py-2 m-1 text-center text-sm font-medium rounded-lg cursor-pointer bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300"
                >Skip to Main Content</Link
            >
            <button
                type="button"
                class="px-4 py-2 m-1 text-center text-sm font-medium rounded-lg cursor-pointer bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300"
                on:click|preventDefault="{() => ($locale === 'en' ? locale.set('hi') : locale.set('en'))}"
                >{$locale === "en" ? "Hindi" : "English"}</button
            >
            <button
                type="button"
                class="sm:hidden px-4 py-2 m-1 text-center text-sm font-medium rounded-lg cursor-pointer bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300"
                on:click|preventDefault="{() => ($isMenuOpen ? isMenuOpen.set(false) : isMenuOpen.set(true))}"
            >
                <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                    {#if $isMenuOpen === true}
                        <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    {:else}
                        <path
                            fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    {/if}
                </svg>
            </button>
        </div>
    </div>
</header>
