<script>
  import SvelteMarkdown from 'svelte-markdown';
  import Image from '$lib/Image.svelte';
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
<div class="container mx-auto p-5 bg-peach md:text-xl">
  <p>
    Despite the growing work in media literacy across all levels of education,
    there remains the question of what makes media literacy practice impactful?
    How can impactful media literacy practices support more just, equitable, and
    inclusive futures?
  </p>
  <br />

  <p>
    The Mapping Impactful Media Literacy Project explores how impact in media
    literacy interventions is understood, develops indicators for impactful
    practice, and offers education across formal and informal learning
    ecosystems the opportunity to align their work within a responsive guide
    that facilitates alignment with indicators for impact.
  </p>
</div>

<div
  class="relative w-full md:w-1/4 z-10 h-24 font-work-sans bg-yellow bg-opacity-75 text-3xl md:text-5xl"
>
  <h2 class="relative -top-5">Partners</h2>
</div>

<div class="relative -top-5 md:w-3/4 p-5 bg-geranium">
  <p class="text-center">
    Research like this would not be possible without the support of
    institutions, universities, and private investors who have an interest in
    improving media literacy education. We are grateful for their assistance and
    want to highlight a few of the institutions responsible for this
    opportunity.
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
