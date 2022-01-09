<script lang="ts">
    import locale from "$lib/stores/locale";

    import Link from "$ui/Link.svelte";

    export let styles: string = "";
</script>

<header class="{styles}">
    <Link href="/" styles="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 cursor-pointer">
        <slot name="logo" />
    </Link>
    <div class="relative w-full h-32 sm:h-40 md:h-44 flex-cij">
        <slot name="title" />
        <slot name="sub-title" />
        <div class="sm:absolute top-0 right-0 text-white">
            <Link
                href="#content"
                styles="px-4 py-2 m-1 text-center text-sm font-medium rounded-lg cursor-pointer bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-orange-300"
                >Skip to Main Content</Link
            >
            <button
                type="button"
                class="px-4 py-2 m-1 text-center text-sm font-medium rounded-lg cursor-pointer bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-orange-300"
                on:click|preventDefault="{() => ($locale === 'en' ? locale.set('hi') : locale.set('en'))}"
                >{$locale === "en" ? "Hindi" : "English"}</button
            >
            <slot name="menu-btn" />
        </div>
    </div>
</header>
