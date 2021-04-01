<script>
    import { fade } from 'svelte/transition';
    import SvelteMarkdown from 'svelte-markdown';
    import { getDataAction } from '../data';

    async function getData() {
        const res = await getDataAction();
        return res;
    }
</script>

<div in:fade={{ duration: 500 }}>
    <h2>About</h2>
    {#await getData() then content}
        <SvelteMarkdown source={content.body} />
    {/await}
</div>
