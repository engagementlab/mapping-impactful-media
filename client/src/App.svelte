<script lang="ts">
    import Nav from './components/Nav.svelte';
    export let name: string;
</script>

<Nav />
<main class="container mx-auto">
    <h1>Hello {name}!</h1>
    <p>
        Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
        how to build Svelte apps.
    </p>
</main>
