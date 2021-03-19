<script lang="ts">
    import { Router, Route } from 'svelte-routing';
    import Nav from './shared/Nav.svelte';
    import Footer from './shared/Footer.svelte';
    import Home from './home/Home.svelte';
    import About from './about/About.svelte';
    import PageNotFound from './shared/PageNotFound.svelte';
    import Tailwind from './Tailwind.svelte';
    export let url = '';
</script>

<svelte:head><meta http-equiv="Accept-CH" content="DPR, Width" /></svelte:head>
<Tailwind />
<Router {url}>
    <Nav />

    <main class="container mx-auto px-5 font-overpass">
        <div>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="**" component={PageNotFound} />
        </div>
    </main>
</Router>

<Footer />
