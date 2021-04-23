<script>
    import { ready } from '@roxi/routify';
    import SvelteMarkdown from 'svelte-markdown';

    import { getContentAction } from '../data';
    import Image from '../shared/Image.svelte';

    let content = {};
    getData();

    async function getData() {
        content = await getContentAction('about');
        $ready;
    }
</script>

<h2>About</h2>
<!-- {#await getData() then content} -->
<div>
    <SvelteMarkdown source={content.body} />
</div>
<!-- {/await} -->
<Image imgId="boy-1" responsive={true} />
