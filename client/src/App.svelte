<script lang="ts">
    import { Router, afterPageLoad } from '@roxi/routify';
    import { routes } from '../.routify/routes';

    import Tailwind from './Tailwind.svelte';

    const NOT_PROD = !process.env.IS_PROD;
    $afterPageLoad(() => {
        // Force cloudinary images to be responsive per page load
        // "cl" shows as undefined here, but is loaded in header
        cl.responsive();
    });
</script>

<svelte:head
    ><meta http-equiv="Accept-CH" content="DPR, Width" />
    {#if NOT_PROD}
        <Tailwind />
    {/if}
</svelte:head>

<Router {routes} />
