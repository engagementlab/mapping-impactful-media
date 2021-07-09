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
          }`,
      'about'
    );
    // We have to split phase 2/3 strings for layout purposes
    const phase2Html = res['allMimAboutPages'][0]['phase2Html'];
    const phase2SplitAt = phase2Html.indexOf('</h2>') + 1;
    const phase3Html = res['allMimAboutPages'][0]['phase3Html'];
    const phase3SplitAt = phase3Html.indexOf('</h2>') + 1;

    return {
      props: {
        content: res['allMimAboutPages'][0],
        phase2Heading: phase2Html.substring(0, phase2SplitAt + 5),
        phase2Content: phase2Html.substring(phase2SplitAt + 5),
        phase3Heading: phase3Html.substring(0, phase3SplitAt + 5),
        phase3Content: phase3Html.substring(phase3SplitAt + 5),
      },
    };
  }
</script>

<script>
  export let content;
  export let phase2Heading;
  export let phase2Content;
  export let phase3Heading;
  export let phase3Content;
</script>

<!-- Intro -->
<div id="about">
  <div
    class="container mx-auto flex justify-center mt-14 mb-14 xl:mt-48 xl:ml-90 text-2xl md:text-4xl text-sunny"
  >
    <h1 class="font-bourbon text-center w-full md:w-8/12 lg:w-4/12">
      Mapping Impactful Media Literacy Practices
    </h1>
  </div>
  <div class="container mx-auto p-5 flex flex-col-reverse md:flex-row">
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
  <h4 class="mb-28 mt-28 lg:ml-80 font-work-sans text-2xl lg:w-2/5 text-center">
    To address these assumptions, this project advances an “ecosystem approach”
    to research that is comprised of the following three phases:
  </h4>

  <div class="relative xl:w-3/4 xl:left-64">
    <Image
      className="relative z-10"
      imgId="girl-1"
      width={234}
      alt={'A cartoonish drawing of a young woman carrying a bag full of carrots and bread. The bag has the words "Save the Earth" on it.'}
    />
    <div class="relative h-40 -mt-64 w-full md:w-1/2 xl:w-2/5 bg-peach" />

    <div
      class="relative z-10 font-geotica text-9xl text-right md:text-left md:ml-64 xl:ml-80 -mt-20"
    >
      1
    </div>
    <div class="p-4 xl:p-0 mt-14 md:ml-64 xl:ml-80 xl:w-2/5 leading-9">
      {@html content.phase1Html}
    </div>
  </div>

  <div class="relative xl:w-3/4 xl:left-64">
    <Image
      className="relative z-10"
      imgId="professor"
      width={480}
      alt={'A cartoonish drawing of a professorial-looking person in front of a chalkboard. They are holding a red book with the title "Civic Media", and the chalkboard has the words "How can media literacy be used to empower diverse voices?" on it.'}
    />
    <div class="relative h-40 -mt-64 md:w-1/2 md:left-1/2 bg-coral">
      <h1
        class="font-geotica text-9xl text-right md:text-center md:w-9/12 pt-20"
      >
        2
      </h1>
    </div>
    <div class="relative mt-14 md:left-1/2 md:w-1/3 lg:w-1/4">
      {@html phase2Heading}
    </div>
    <div class="p-4 md:ml-64 xl:p-0 xl:ml-80 xl:w-2/5 leading-9">
      {@html phase2Content}
    </div>
  </div>

  <div class="relative xl:w-3/4 xl:left-64">
    <Image
      className="relative z-10 md:left-1/3 lg:left-1/2 xl:top-36"
      imgId="girl-2"
      width={541}
      alt={'A cartoonish drawing of the side-view of the bottom three-quarters of a woman\'s head. On the other top quarter above her head are drawings of a wifi signal symbol, flowers and plants, and circles, as well as a red thought bubble that has the words "How does this make me feel?" in it.'}
    />
    <div class="relative h-40 -mt-64 md:w-1/3 bg-bee">
      <div
        class="relative z-10 font-geotica text-9xl text-right lg:text-left pt-20 pr-5 lg:pl-40"
      >
        3
      </div>
    </div>
    <div
      class="relative p-4 xl:p-0 mt-14 md:ml-64 xl:p-0 xl:ml-80 md:w-1/2 lg:w-1/3"
    >
      {@html phase3Heading}
    </div>
    <div class="p-4 mt-0 xl:mt-14 md:ml-64 xl:p-0 xl:ml-80 xl:w-2/5 leading-9">
      {@html phase3Content}
    </div>
  </div>
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
