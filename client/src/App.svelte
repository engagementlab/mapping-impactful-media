<script lang="ts">
    // import { Router, Route } from 'svelte-routing';
    import Router from 'svelte-spa-router';
    import { fly } from 'svelte/transition';
    import Nav from './shared/Nav.svelte';
    import Footer from './shared/Footer.svelte';
    import Home from './home/Home.svelte';
    import About from './about/About.svelte';
    import PageNotFound from './shared/PageNotFound.svelte';
    import Tailwind from './Tailwind.svelte';
    import Transition from './Transition.svelte';
    export let url = '';

    const routes = { '/': Home, '/about': About, '**': PageNotFound };
</script>

<svelte:head><meta http-equiv="Accept-CH" content="DPR, Width" /></svelte:head>
<Tailwind />
<div class="flex flex-col h-screen">
    <Nav />

    <main class="container mx-auto px-5 flex-grow font-overpass">
        <Router {routes} />
    </main>

    <Footer />
</div>
