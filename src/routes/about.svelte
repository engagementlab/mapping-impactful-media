<script context="module">
  import Image from '$lib/Image.svelte';
  import { getContent } from '$lib/data';

  export async function load({ page, fetch, session, context }) {
    try {
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
<div>
  <SvelteMarkdown source={content.body} />
</div>
