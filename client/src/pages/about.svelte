<script>
    import SvelteMarkdown from 'svelte-markdown';
    import { getDataAction } from '../data';

    async function getData() {
        const res = await getDataAction();
        return res;
    }
</script>

{#await getData() then content}
    <h2>About</h2>
    <SvelteMarkdown source={content.body} />
{/await}
