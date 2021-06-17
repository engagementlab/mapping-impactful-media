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
              phase1Html
              phase2Html
              phase3Html
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
      <SvelteMarkdown source={content.intro} />
    </div>
    <div class="xl:ml-48">
      <Image
        imgId="boy-1"
        width={420}
        alt="A cartoonish drawing of a boy tending a garden"
      />
    </div>
  </div>

  <!-- Assumptions -->
  <div class="flex justify-center">
    <div class="lg:w-3/4 xl:w-1/3 px-6 lg:px-24 py-16 bg-pink">
      <SvelteMarkdown source={content.assumptions} />
    </div>
  </div>

  <!-- Phases -->
  <h4 class="mb-28 mt-28 lg:ml-80 font-work-sans text-2xl lg:w-1/3 text-center">
    To address these assumptions, this project advances an “ecosystem approach”
    to research that is comprised of the following three phases:
  </h4>
  <Image className="relative z-10" imgId="girl-1" width={234} />
  <div class="relative h-40 -mt-64 w-full md:w-1/2 bg-sunny" />

  <div
    class="relative z-10 font-geotica text-9xl text-right md:text-left md:ml-64 -mt-12"
  >
    1
  </div>
  <p class="p-4 md:ml-64">
    {@html content.phase1Html}
  </p>

  <Image className="relative z-10" imgId="professor" width={480} />
  <div class="relative h-40 -mt-64 md:w-1/2 md:left-1/2 bg-coral">
    <div
      class="font-geotica text-9xl text-right md:text-center md:w-9/12 pt-20"
    >
      2
    </div>
  </div>
  <p class="p-4 mt-10">
    {@html content.phase2Html}
  </p>

  <Image className="relative z-10" imgId="girl-2" width={541} />
  <div class="relative h-40 -mt-64 w-full bg-bee" />

  <div
    class="relative z-10 font-geotica text-9xl text-right lg:text-left -mt-12"
  >
    3
  </div>
  <p class="p-4">
    {@html content.phase3Html}
  </p>
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
