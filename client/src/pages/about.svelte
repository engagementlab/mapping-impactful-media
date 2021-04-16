<script>
    import { fade } from 'svelte/transition';
    import SvelteMarkdown from 'svelte-markdown';

    import { getContentAction } from '../data';
    import Image from '../shared/Image.svelte';

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
<Image imgId="boy-1" responsive={true} />
