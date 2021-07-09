<script>
  import '../app.css';
  import Header from '$lib/Header/index.svelte';
  import Footer from '$lib/Footer/index.svelte';
  import { writable } from 'svelte/store';
  import { getStores, navigating, page, session } from '$app/stores';

  // import { Cloudinary } from 'cloudinary-core';

  // var cl = new Cloudinary({ cloud_name: 'engagement-lab-home' });
  const width = writable();

  navigating.subscribe((val) => {
    if (!val) {
      setTimeout(() => {
        // cl.responsive();
      }, 100);
    }
  });
</script>

<div class="flex flex-col h-screen" bind:offsetWidth={$width}>
  <Header />
  <main class="font-overpass">
    <slot scoped={{ width }} />
  </main>
  <Footer />
</div>
