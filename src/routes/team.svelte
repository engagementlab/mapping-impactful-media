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
        image {
          publicId
        }
      }`
    );

    return {
      props: {
        peopleResearch: res['allMimPeople'],
      },
    };
  }
</script>

<script>
  export let peopleResearch;
</script>

<!-- Intro -->
<div id="about">
  <div
    class="container mx-auto flex flex-col justify-center mt-14 mb-14 text-center xl:mt-48 xl:ml-90"
  >
    <h1
      class="font-bourbon w-full md:w-8/12 lg:w-4/12 text-2xl md:text-4xl text-sunny"
    >
      Meet The Team
    </h1>
    <p>
      Mapping impactful media literacy practices involve the dedicated efforts
      of several people from the research team to the advisory board and the
      designers. Each person has contributed their best efforts and expertise to
      make this project possible. This project brought together a diverse group
      of researchers, educators, professionals, and activists. You can read more
      about them below.
    </p>
  </div>

  <div
    class="relative w-full ml-48 md:w-4/12 h-44 font-work-sans bg-bee text-3xl md:text-5xl"
  >
    <h2 class="relative left-72 top-36 mt-20">Lead Research Team</h2>
  </div>
  <div id="people" class="flex flex-col justify-center mt-14">
    <p class=" font-work-sans">
      The research team make-up the core group of investigators within the
      project. They focus on research design and implementation, as well as
      producing the final reports for the project.
    </p>
    <!-- Research -->
    <div class=" md:w-1/2">
      {#each peopleResearch as person}
        <div class="flex gap-4 mb-5">
          <Image
            className="self-center"
            imgId={person.image.publicId}
            width={159}
            transforms={'c_fill,g_face,w_159,h_159,r_150'}
            alt={`Headshot image for ${person.name}`}
          />
          <p>
            <a href="https://google.com" class="flex font-bourbon">
              <h3 class=" border-b-2 border-black">
                {person.name} - {person.title}
              </h3>
            </a>
            <SvelteMarkdown source={person.bio} />
          </p>
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
</style>
