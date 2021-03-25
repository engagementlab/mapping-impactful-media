<script>
    import { fade } from 'svelte/transition';
</script>

<div in:fade>
    <slot />
</div>

<style>
    div {
        position: absolute;
    }
</style>
