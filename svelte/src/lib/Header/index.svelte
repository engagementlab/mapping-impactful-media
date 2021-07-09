<script lang="ts">
  import { page } from '$app/stores';
  import Image from '$lib/Image.svelte';

  const links = [
    // ['/', 'Home'],
    ['/about', 'About'],
    ['/team', 'Team'],
    // ['/guide', 'Field Guide'],
  ];
</script>

<nav class="container xl:mx-20 my-7 flex flex-row">
  <div class="w-3/4">
    <a href="/">
      <Image
        imgId="logo.png"
        alt="Logo with text 'Mapping Impactful Media Literacy Practices'"
        width="305"
      />
    </a>
  </div>
  <div class="flex items-center w-full">
    <ul class="flex justify-evenly w-full font-work-sans">
      {#each links as [path, name]}
        <li>
          {#if $page.path !== path}
            <a href={path} class="hover:text-peach transition-colors">
              {name}
            </a>
          {:else}
            <span class="underline">
              {name}
            </span>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</nav>
