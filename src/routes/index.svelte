<script context="module">
  import SvelteMarkdown from 'svelte-markdown';
  import Image from '$lib/Image.svelte';
  import { getContent } from '$lib/data';

  export async function load({ page, fetch, session, context }) {
    const res = await getContent(
      fetch,
      `
     allMimHomePages
      {
        intro
        about    
        facebook
        partners
      }
    `
    );
    console.log(res);
    return {
      props: {
        content: res['allMimHomePages'][0],
      },
    };
  }
</script>

<script>
  export let content;
</script>

<div class="container mx-auto px-5 flex flex-col-reverse md:flex-row">
  <h1
    class="w-full md:w-1/2 font-work-sans font-bold text-orange text-3xl md:text-6xl"
  >
    Exploring Media literacy practices for just and equitable futures.
  </h1>
  <div>
    <Image imgId="home-artwork" />
  </div>
</div>

<!-- Intro -->
<div class="container mx-auto p-5 bg-peach md:text-xl">
  <SvelteMarkdown source={content.intro} />
</div>

<!-- About -->
<div class="container mx-auto px-5 flex flex-col-reverse md:flex-row">
  <h1 class="w-full md:w-1/2 leading-7">
    <SvelteMarkdown source={content.about} />
  </h1>
  <div>
    <Image imgId="boy-2" width={311} />
  </div>
</div>

<!-- Partners -->
<div
  class="relative w-full md:w-1/4 z-10 h-24 font-work-sans bg-yellow bg-opacity-75 text-3xl md:text-5xl"
>
  <h2 class="relative -top-5">Partners</h2>
</div>
<div class="relative -top-5 md:w-3/4 p-5 bg-geranium">
  <p class="text-center">
    <SvelteMarkdown source={content.partners} />
  </p>
  <h3
    class="font-bold p-4 text-2xl text-center
  "
  >
    Lead Partner
  </h3>
  <Image imgId="namle" />

  <h3
    class="font-bold p-4 text-2xl text-center
  "
  >
    Research Partners
  </h3>
  <div class="flex flex-col items-center justify-around h-96">
    <Image imgId="emerson" width="243" />
    <Image imgId="texas-am" width="243" />
    <Image imgId="iowa" width="136" />
    <Image imgId="amla" width="177" />
  </div>

  <p class="text-center italic text-xs">
    Initial support for the research project is made possible through a grant
    from Facebook. To ensure the independence and integrity of this research
    effort, NAMLE will maintain full authority regarding project strategy,
    budget, personnel decisions, or research activities. Facebook will not have
    direct control over the research design, methodology, analysis, or findings.
    NAMLE and any research authors will maintain exclusive copyright over all
    products and freely disseminate those products to advance the media literacy
    field.Initial support for the research project is made possible through a
    grant from Facebook.
  </p>
</div>
