<script context="module">
  import { enhance } from '$lib/form';
  import Image from '$lib/Image.svelte';
  // import { queryData } from './query/query';

  export async function load({ page, fetch, session, context }) {
    try {
      const res = await fetch('api', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      });
      const data = await res.json();
      return {
        props: {
          content: data['allMimAboutPages'][0],
        },
      };
    } catch (e) {
      console.error('error: ' + e);
    }
  }
</script>

<script>
  import SvelteMarkdown from 'svelte-markdown';
  export let content;
</script>

<h2>About</h2>
<Image imgId="boy-1" responsive={true} />
<!-- {#await getData() then content} -->
<div>
  <SvelteMarkdown source={content.body} />
</div>
<!-- {/await} -->
