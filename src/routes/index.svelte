<script context="module">
  export const prerender = true;
  import SvelteMarkdown from 'svelte-markdown';
  import Image from '$lib/Image.svelte';
  import Button from '$lib/Button/index.svelte';
  import { getContent } from '$lib/data';

  export async function load({ page, fetch, session, context }) {
    const res = await getContent(
      fetch,
      `
      allMimHomePages {
        intro
        about
        facebook
        partners
      }
      allMimPeople(where: { showOnHome: true }) {
        name
        title
        bio
        image {
          publicId
        }
      }
    `,
      'home'
    );
    return {
      props: {
        homeContent: res['allMimHomePages'][0],
        people: res['allMimPeople'],
      },
    };
  }
</script>

<script>
  export let homeContent;
  export let people;
</script>

<div
  class="container lg:mx-20 xl:mx-96 flex flex-col-reverse lg:flex-row items-center"
>
  <h1
    class="w-3/4 lg:w-1/3 font-work-sans font-bold text-orange text-3xl md:text-6xl"
  >
    Exploring Media literacy practices for just and equitable futures.
  </h1>
  <div>
    <Image imgId="home-artwork" />
  </div>
</div>

<!-- Intro -->
<div
  class="container my-10 p-10 xl:px-20 xl:mx-72 xl:w-5/12 bg-peach md:text-xl text-center"
>
  <SvelteMarkdown source={homeContent.intro} />
</div>

<!-- About -->
<div
  class="container mx-auto p-5 xl:mt-48 xl:ml-90 flex flex-col-reverse md:flex-row"
>
  <div class="w-full md:w-3/4 xl:w-5/12 xl:pt-32 xl:ml-36 leading-9">
    <SvelteMarkdown source={homeContent.about} />
    <Button label={'Learn More'} link="/about" />
  </div>
  <div class="xl:ml-48">
    <Image imgId="boy-2" width={311} />
  </div>
</div>

<!-- Word Cloud -->
<div class="container mx-auto p-5 xl:w-1/2 font-bourbon text-2xl text-center">
  <span class="bg-peach px-3">Care</span>

  <span class="bg-bee text-white px-10">Equity</span>
  <div class="my-4">
    <span class="bg-bee text-white px-3">Civic Agency</span>
    <span class="bg-hibiscus">Critical Consciousness</span>
  </div>
  <div class="my-4">
    <span class="bg-hibiscus">Anti-Racism</span>
    <span class="bg-peach px-2">Imagination</span>
  </div>
  <div class="my-4">
    <span class="bg-bee text-white px-1">Anti-Oppression</span>
    <span class="bg-peach px-1">Community</span>
  </div>
  <div class="my-4">
    <span class="bg-hibiscus px-2">Movement Building</span>
    <span class="bg-bee text-white px-2">Emancipation</span>
  </div>
  <div class="my-4">
    <span class="bg-peach px-2">Creative Initiatives</span>
  </div>
</div>

<!-- Team -->
<div class="my-20 pb-10 w-full xl:ml-96 xl:w-5/12 bg-hibiscus">
  <h2 class="relative -top-8 text-3xl md:text-5xl font-work-sans">
    Meet the Team
  </h2>
  <p class="p-5 leading-9">
    Mapping impactful media literacy practices involve the dedicated efforts of
    critical media literacy scholars, practitioners and activists from across
    the United States. The lead research team is made up of four scholars and
    supported by our advisory group, design team, and research partners in
    Australia.
  </p>
  <div class="flex flex-col md:flex-row font-work-sans">
    {#each people as person}
      <div
        class="w-full md:w-1/2 mt-10 flex flex-col justify-center text-center"
      >
        <Image
          className="self-center"
          imgId={person.image.publicId}
          width={159}
          transforms={'c_fill,g_face,w_159,h_159,r_150'}
          alt={`Headshot image for ${person.name}`}
        />
        <h3 class="font-bourbon">
          {person.name} - {person.title}
        </h3>
        <!-- <p class="w-4/5 self-center">
          <SvelteMarkdown source={person.bio} />
        </span> -->
      </div>
    {/each}
  </div>
  <Button label="See the full team" link="/team" className="mx-10" />
</div>

<!-- Partners -->
<div
  class="relative w-full md:w-1/2 z-10 h-24 font-work-sans bg-yellow bg-opacity-75 text-3xl md:text-5xl"
>
  <h2 class="relative -top-8 mt-20">Partners</h2>
</div>
<div
  class="relative -top-5 w-full lg:w-10/12 xl:w-11/12 lg:ml-20 p-5 bg-geranium"
>
  <div class="flex flex-col items-center">
    <p class="xl:w-1/3 leading-9 text-center">
      <SvelteMarkdown source={homeContent.partners} />
    </p>
    <h3
      class="font-bold font-work-sans pt-20 text-2xl
  "
    >
      Lead Partner
    </h3>
    <Image className="self-center pt-16" imgId="namle" width="425" />

    <h3
      class="font-bold font-work-sans pt-20 text-2xl
  "
    >
      Research Partners
    </h3>
    <div
      class="flex flex-col lg:flex-row items-center justify-around w-full h-96 lg:h-60"
    >
      <Image imgId="emerson" width="243" />
      <Image imgId="texas-am" width="243" />
      <Image imgId="iowa" width="136" />
      <Image imgId="amla" width="177" />
    </div>
  </div>

  <p class="md:mx-20 text-center italic text-sm leading-6">
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
