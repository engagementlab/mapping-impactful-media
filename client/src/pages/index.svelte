<script>
    // import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import Image from '../shared/Image.svelte';
</script>

<div class="flex flex-col-reverse md:flex-row" in:fade={{ duration: 500 }}>
    <h1
        class="w-full md:w-1/2 font-work-sans font-bold text-orange text-3xl md:text-6xl"
    >
        Exploring Media literacy practices for just and equitable futures.
    </h1>
    <div>
        <Image imgId="home-artwork" />
    </div>
</div>
