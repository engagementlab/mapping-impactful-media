<script context="module">
  import SvelteMarkdown from 'svelte-markdown';
  import Image from '$lib/Image.svelte';
  import { getContent } from '$lib/data';

  export async function load({ page, fetch, session, context }) {
    const res = await getContent(
      fetch,
      `allMimAboutPages 
          {
              body
          }`
    );
    return {
      props: {
        content: res['allMimAboutPages'][0],
      },
    };
  }
</script>

<script>
  export let content;
</script>

<h2>Team - COMING SOON</h2>
