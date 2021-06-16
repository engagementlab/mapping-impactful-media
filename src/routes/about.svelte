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
              phase2
              phase3
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
    <div class="lg:w-1/3 px-6 lg:px-24 py-16 bg-pink">
      <SvelteMarkdown source={content.assumptions} />
    </div>
  </div>

  <!-- Phases -->
  <h4 class="mb-28 mt-28 lg:ml-80 font-work-sans text-2xl lg:w-1/3 text-center">
    To address these assumptions, this project advances an “ecosystem approach”
    to research that is comprised of the following three phases:
  </h4>
  <Image className="relative z-10" imgId="girl-1" width={234} />
  <div class="relative h-40 -mt-64 w-full bg-sunny" />

  <div
    class="relative z-10 font-geotica text-9xl text-right lg:text-left -mt-12"
  >
    1
  </div>
  {content.phase1}
  <p class="p-4">
    <SvelteMarkdown
      source={content.phase1.replace(/(\r\n|\n|\r)/gm, ' <br />')}
    />
  </p>

  <Image className="relative z-10" imgId="professor" width={480} />
  <div class="relative h-40 -mt-64 w-full bg-strawberry" />

  <div
    class="relative z-10 font-geotica text-9xl text-right lg:text-left -mt-12"
  >
    2
  </div>
  <p class="p-4">
    <SvelteMarkdown source={content.phase2} />
  </p>

  <Image className="relative z-10" imgId="girl-2" width={541} />
  <div class="relative h-40 -mt-64 w-full bg-bee" />

  <div
    class="relative z-10 font-geotica text-9xl text-right lg:text-left -mt-12"
  >
    3
  </div>
  <p class="p-4">
    <SvelteMarkdown source={content.phase3} />
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
