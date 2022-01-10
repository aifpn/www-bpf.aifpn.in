<script lang="ts">
    import Link from "$ui/Link.svelte";

    export let path: string = "/";
    export let styles: string = "";

    let routes = [
        {
            name: "AIFPN",
            path: "https://aifpn.in",
        },
        {
            name: "About Us",
            path: "/about",
        },
        {
            name: "Join",
            path: "/join",
        },
        {
            name: "Gallery",
            path: "/gallery",
        },
    ];
</script>

<nav class="{styles}">
    {#each routes as rt (rt.name)}
        <Link
            href="{rt.path}"
            external="{rt.path.startsWith('https://') ? 'true' : 'false'}"
            styles="{`px-4 py-2 ${
                path === rt.path || path.startsWith(rt.path) ? '' : 'border-2 border-white bg-orange-500'
            }`}">{rt.name}</Link
        >
    {/each}
</nav>
