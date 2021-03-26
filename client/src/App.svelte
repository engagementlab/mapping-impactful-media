<script lang="ts">
    import { Router } from '@roxi/routify';
    import { routes } from '../.routify/routes';

    import Nav from './shared/Nav.svelte';
    import Footer from './shared/Footer.svelte';
    import Tailwind from './Tailwind.svelte';
</script>

<svelte:head><meta http-equiv="Accept-CH" content="DPR, Width" /></svelte:head>
<Tailwind />
<Nav />

<main class="container mx-auto px-5 font-overpass">
    <Router {routes} />
</main>

<Footer />
