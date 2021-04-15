<script>
    import { fade } from 'svelte/transition';
    import SvelteMarkdown from 'svelte-markdown';
    import { getContentAction } from '../data';

    async function getData() {
        const res = await getContentAction('about');
        return res;
    }
</script>

<h2>About</h2>
{#await getData() then content}
    <div in:fade={{ duration: 500 }}>
        <SvelteMarkdown source={content.body} />
    </div>
{/await}
