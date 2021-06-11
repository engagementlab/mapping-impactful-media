<script context="module">
  import SvelteMarkdown from 'svelte-markdown';
  import Image from '$lib/Image.svelte';
  import { getContent } from '$lib/data';

  export async function load({ page, fetch, session, context }) {
    const res = await getContent(
      fetch,
      `allMimAboutPages 
          {
              intro
              assumptions
              phase1
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

<!-- Intro -->
<div id="about">
  <div
    class="container mx-auto p-5 xl:mt-48 xl:ml-90 flex flex-col-reverse md:flex-row"
  >
    <div
      class="w-full md:w-3/4 xl:w-5/12 xl:pt-32 xl:ml-36 leading-9 list-inside"
    >
      <SvelteMarkdown class="" source={content.intro} />
    </div>
    <div class="xl:ml-48">
      <Image imgId="boy-1" width={420} />
    </div>
  </div>

  <!-- Assumptions -->
  <div class="flex justify-center">
    <div class="lg:w-1/3 px-24 py-16 bg-pink">
      <SvelteMarkdown source={content.assumptions} />
    </div>
  </div>

  <!-- Phases -->
  <h4 class="mt-28 lg:ml-80 font-work-sans text-2xl lg:w-1/3 text-center">
    To address these assumptions, this project advances an “ecosystem approach”
    to research that is comprised of the following three phases:
  </h4>
  <Image imgId="girl-1" width={234} />

  <div class="font-geotica text-9xl">1</div>
  <SvelteMarkdown source={content.phase1} />
</div>

<style lang="scss">
  #about {
    /* 
      These have to be global for the markdown renderer, since the HTML is processed post-runtime;
      otherwise, compiler strips out selectors
    */
    :global(ul) {
      list-style: disc !important;
      padding: 2rem;
    }

    :global(ol) {
      list-style: decimal;
      padding: 2rem;
    }

    :global(h2) {
      font-family: 'Work Sans';
      font-size: 2rem;
    }

    :global(h3) {
      font-family: 'Bourbon';
      margin-top: 1rem;
    }
  }
</style>
