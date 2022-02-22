<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { fade } from "svelte/transition";

    import type { INavLink } from "$lib/types";

    import { isMenuOpen } from "$lib/store";
    import { clickOutside } from "$lib/utils";

    import Link from "$ui/Link.svelte";
    import Dropdown from "$ui/Dropdown.svelte";

    export let links: INavLink[] = [];

    export let path: string = "";

    let open: boolean = $isMenuOpen;

    let unsubscribe = () => {};

    onMount(() => {
        unsubscribe = isMenuOpen.subscribe((val) => {
            open = val;
        });
    });

    onDestroy(unsubscribe);
</script>

<nav
    use:clickOutside="{() => isMenuOpen.set(false)}"
    class="{`px-2 py-2 w-11/12 sm:w-auto font-bold rounded-xl bg-slate-100 ${
        open === true ? 'flex-cij flex-grow' : 'hidden'
    } sm:flex sm:flex-rij shadow-xl border-2 border-green-500`}"
>
    {#each links as link}
        {#if link.childs}
            <Dropdown
                styles="{`px-4 py-2 mx-2 my-1 w-full sm:w-auto rounded-xl cursor-pointer ${
                    path.startsWith(link.href)
                        ? 'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 ring-4 ring-green-300'
                        : 'hover:text-white hover:bg-gradient-to-r hover:from-green-400 hover:via-green-500 hover:to-green-600 focus:ring-4 focus:ring-green-300'
                }`}"
            >
                <span slot="route" class="font-bold">{link.name}</span>

                <div
                    transition:fade
                    slot="items"
                    class="sm:absolute sm:z-50 right-0 w-full mt-4 origin-top-right rounded-md shadow-xl sm:w-48 px-2 py-2 flex-cij bg-slate-100 text-gray-900"
                >
                    {#each link.childs as ch}
                        <Link
                            href="{ch.href}"
                            styles="{`w-full px-4 py-2 mx-2 my-1 rounded-xl cursor-pointer ${
                                path === ch.href
                                    ? 'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600'
                                    : 'hover:text-white hover:bg-gradient-to-r hover:from-green-400 hover:via-green-500 hover:to-green-600'
                            }`}"
                        >
                            {ch.name}
                        </Link>
                    {/each}
                </div>
            </Dropdown>
        {:else}
            <Link
                href="{link.href}"
                styles="{`px-4 py-2 mx-2 my-1 w-full sm:w-auto rounded-xl cursor-pointer ${
                    path === link.href
                        ? 'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 ring-4 ring-green-300'
                        : 'hover:text-white hover:bg-gradient-to-r hover:from-green-400 hover:via-green-500 hover:to-green-600 focus:ring-4 focus:ring-green-300'
                }`}"
            >
                {link.name}
            </Link>
        {/if}
    {/each}
</nav>
