<script context="module">
  import SvelteMarkdown from 'svelte-markdown';
  import Image from '$lib/Image.svelte';
  import { getContent } from '$lib/data';

  export async function load({ page, fetch, session, context }) {
    const res = await getContent(
      fetch,
      `allMimPeople {
        name
        title
        bio
        website
        category
        image {
          publicId
        }
      }`
    );
    return {
      props: {
        peopleResearch: res['allMimPeople'].filter((p) => {
          return p.category === 'research';
        }),
        peopleNamle: res['allMimPeople'].filter((p) => {
          return p.category === 'namle';
        }),
        peopleBoard: res['allMimPeople'].filter((p) => {
          return p.category === 'board';
        }),
        peopleDesign: res['allMimPeople'].filter((p) => {
          return p.category === 'design';
        }),
      },
    };
  }
</script>

<script>
  export let peopleResearch;
  export let peopleNamle;
  export let peopleBoard;
  export let peopleDesign;
</script>

<!-- Intro -->
<div id="about">
  <div class="container mx-auto mt-14 mb-14 text-center xl:mt-48 xl:ml-90">
    <h1 class="font-bourbon text-2xl md:text-4xl text-sunny">Meet The Team</h1>
    <p class="mx-auto w-11/12 mt-14 md:w-3/4 lg:w-3/5 leading-9">
      Mapping impactful media literacy practices involve the dedicated efforts
      of several people from the research team to the advisory board and the
      designers. Each person has contributed their best efforts and expertise to
      make this project possible. This project brought together a diverse group
      of researchers, educators, professionals, and activists. You can read more
      about them below.
    </p>
  </div>

  <!-- Research -->
  <div
    class="relative w-full md:ml-52 lg:ml-48 md:w-4/6 lg:w-5/12 xl:w-1/3 h-44 font-work-sans bg-bee text-3xl md:text-4xl xl:text-5xl"
  >
    <h2
      class="relative md:left-24 lg:left-44 top-40 md:top-36 md:pt-2 xl:left-72"
    >
      Lead Research Team
    </h2>
  </div>
  <div id="people-research" class="flex flex-col justify-center mt-14">
    <p class="mx-auto w-11/12 md:w-3/4 lg:w-3/5 leading-7">
      The research team make-up the core group of investigators within the
      project. They focus on research design and implementation, as well as
      producing the final reports for the project.
    </p>
    <div class="mx-auto w-11/12 xl:w-1/2 mt-10">
      {#each peopleResearch as person}
        <div class="flex flex-col md:flex-row gap-4 mb-5">
          <Image
            className="self-center"
            imgId={person.image.publicId}
            width={159}
            transforms={'c_fill,g_face,w_159,h_159,r_150'}
            alt={`Headshot image for ${person.name}`}
          />
          <p>
            {#if person.website}
              <a href={person.website} class="flex">
                <h3 class="font-bourbon border-b-2 border-black">
                  {person.name} - {person.title}
                </h3>
              </a>
            {:else}
              <h3 class="font-bourbon">
                {person.name} - {person.title}
              </h3>
            {/if}
            <SvelteMarkdown source={person.bio} />
          </p>
        </div>
      {/each}
    </div>
  </div>

  <!-- NAMLE -->
  <div
    class="absolute w-full md:right-0 md:w-4/6 lg:right-48 lg:w-3/6 xl:w-2/6 md:mt-14 h-44 font-work-sans bg-strawberry text-3xl md:text-4xl lg:text-5xl"
  >
    <h2 class="relative mt-40 md:p-3 md:top-14 md:mt-20 lg:top-12">
      NAMLE Team
    </h2>
  </div>
  <div id="people-namle" class="flex flex-col justify-center mt-64 md:mt-72">
    <p
      class="mx-auto w-11/12 lg:ml-96 lg:w-2/6 lg:text-right xl:ml-auto xl:mr-64 leading-7"
    >
      The project is supported by the National Association of Media Literacy
      Education, whose leaders help coordinate our process.
    </p>
    <div class="mx-auto w-11/12 xl:w-1/2 mt-10">
      {#each peopleNamle as person}
        <div class="flex flex-col md:flex-row gap-4 mb-5">
          <Image
            className="self-center"
            imgId={person.image.publicId}
            width={159}
            transforms={'c_fill,g_face,w_159,h_159,r_150'}
            alt={`Headshot image for ${person.name}`}
          />
          <p>
            {#if person.website}
              <a href={person.website} class="flex">
                <h3 class="font-bourbon border-b-2 border-black">
                  {person.name} - {person.title}
                </h3>
              </a>
            {:else}
              <h3 class="font-bourbon">
                {person.name} - {person.title}
              </h3>
            {/if}
            <SvelteMarkdown source={person.bio} />
          </p>
        </div>
      {/each}
    </div>
  </div>

  <!-- Board -->
  <div
    class="relative w-full md:ml-52 lg:ml-64 md:w-4/6 lg:w-1/4 h-44 font-work-sans bg-peach text-3xl md:text-4xl xl:text-5xl"
  >
    <h2
      class="relative top-36 pt-3 md:left-64 md:pl-2 lg:left-64 lg:ml-20 md:mt-20"
    >
      Advisory Board
    </h2>
  </div>
  <div id="people-board" class="flex flex-col justify-center mt-14">
    <p class="relative mx-auto w-11/12 md:w-3/4 lg:w-1/3 lg:-left-10 leading-7">
      This project includes oversight from a diverse group of scholars assembled
      to guide the researchers and assembly of the final project.
    </p>
    <div class="mx-auto w-11/12 xl:w-1/2 mt-10">
      {#each peopleBoard as person}
        <div class="flex flex-col md:flex-row gap-4 mb-5">
          <Image
            className="self-center"
            imgId={person.image.publicId}
            width={159}
            transforms={'c_fill,g_face,w_159,h_159,r_150'}
            alt={`Headshot image for ${person.name}`}
          />
          <p>
            {#if person.website}
              <a href={person.website} class="flex">
                <h3 class="font-bourbon border-b-2 border-black">
                  {person.name} - {person.title}
                </h3>
              </a>
            {:else}
              <h3 class="font-bourbon">
                {person.name} - {person.title}
              </h3>
            {/if}
            <SvelteMarkdown source={person.bio} />
          </p>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- Design -->
<div
  class="absolute w-full md:right-0 md:w-4/6 lg:right-48 lg:w-3/6 xl:w-2/6 md:mt-14 h-44 font-work-sans bg-bee text-3xl md:text-4xl lg:text-5xl"
>
  <h2 class="relative -left-7 md:top-16 md:mt-20 md:pt-2 lg:pt-0">
    Design Team
  </h2>
</div>
<div id="people-design" class="flex flex-col justify-center mt-64 md:mt-72">
  <p
    class="mx-auto w-11/12 lg:ml-96 lg:w-1/2 xl:w-2/6 lg:text-right xl:ml-auto xl:mr-64 leading-7"
  >
    The design team consists of a group of professional graphic designers and
    developers who work to pull together the final product for the research.
    Many of the team members are also graduate students interested in using
    their professional talents to integrate social justice and media literacy
    initiatives within their respective fields
  </p>
  <div class="mx-auto w-11/12 xl:w-1/2 mt-10">
    {#each peopleDesign as person}
      <div class="flex flex-col md:flex-row gap-4 mb-5">
        <Image
          className="self-center"
          imgId={person.image.publicId}
          width={159}
          transforms={'c_fill,g_face,w_159,h_159,r_150'}
          alt={`Headshot image for ${person.name}`}
        />
        <p>
          {#if person.website}
            <a href={person.website} class="flex">
              <h3 class="font-bourbon border-b-2 border-black">
                {person.name} - {person.title}
              </h3>
            </a>
          {:else}
            <h3 class="font-bourbon">
              {person.name} - {person.title}
            </h3>
          {/if}
          <SvelteMarkdown source={person.bio} />
        </p>
      </div>
    {/each}
  </div>
</div>

<!-- Contributors -->
<div
  class="relative w-full md:ml-52 lg:ml-64 md:w-4/6 lg:w-1/3 h-44 font-work-sans bg-peach text-3xl md:text-4xl xl:text-5xl"
>
  <h2
    class="relative top-36 md:top-32 pt-3 md:pt-5 md:left-64 md:pl-2 lg:left-24 lg:mt-11 xl:left-72"
  >
    Contributors
  </h2>
</div>
<div id="contributors" class="flex flex-col items-center mt-14">
  <div class="px-5 md:w-3/4 leading-7">
    Many scholars have contributed to the project without a formal connection to
    the grant. Their work provided fresh perspectives and needed insight into
    the fields of media literacy and social justice.
  </div>

  <h3 class="block my-14 font-bourbon text-xl">Special Thanks</h3>
  <div class="mb-16 w-11/12 lg:w-1/2 text-center">
    The following people contributed to research and organization in the early
    stages of the project. Kathleen Carroll, Rakshya Devkota, and Sumali Dey,
    all of whom were graduate students at Emerson College’s Media and Design
    Program contributed to this project. Their work supported the research team
    and provided a great overview of the vast field of media literacy practice.
  </div>
</div>

<style lang="scss">
</style>
