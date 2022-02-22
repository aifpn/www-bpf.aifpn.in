<script lang="ts">
    import { blur } from "svelte/transition";

    export let styles: string = "";
</script>

<section
    id="content"
    class="{styles}"
    in:blur="{{ duration: 300, delay: 300, amount: 5 }}"
    out:blur="{{ duration: 300 }}"
>
    <slot />
</section>
