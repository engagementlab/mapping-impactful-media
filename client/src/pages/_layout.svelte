<script>
    import Footer from '../shared/Footer.svelte';
    import Nav from '../shared/Nav.svelte';
</script>

<div class="flex flex-col">
    <Nav />
    <!-- routify:options preload="proximity" -->

    <main class="container mx-auto px-5 flex-grow font-overpass">
        <slot />
    </main>
</div>

<Footer />
