<script lang="ts">
    import { Router, afterPageLoad } from '@roxi/routify';
    import { routes } from '../.routify/routes';

    import Nav from './shared/Nav.svelte';
    import Footer from './shared/Footer.svelte';
    import Tailwind from './Tailwind.svelte';

    const NOT_PROD = !process.env.IS_PROD;
    $afterPageLoad(() => {
        // Force cloudinary images to be responsive per page load
        // "cl" shows as undefined here, but is loaded in header
        cl.responsive();
    });
</script>

<svelte:head><meta http-equiv="Accept-CH" content="DPR, Width" /></svelte:head>
{#if NOT_PROD}
    <Tailwind />
{/if}

<div class="flex flex-col h-screen">
    <Nav />

    <main class="container mx-auto px-5 flex-grow font-overpass">
        <Router {routes} />
    </main>

    <Footer />
</div>
