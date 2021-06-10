<script lang="ts">
  import Image from '$lib/Image.svelte';

  const links = [
    // ['/', 'Home'],
    ['/about', 'About'],
    ['/team', 'Team'],
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
    <ul class="flex justify-around w-full font-work-sans">
      {#each links as [path, name]}
        <li class="hover:text-peach transition-colors">
          <a href={path}>
            {name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>
