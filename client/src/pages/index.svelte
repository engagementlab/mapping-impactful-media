<script>
    // import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import Image from '../shared/Image.svelte';
</script>

<div class="flex flex-row" in:fade={{ duration: 500 }}>
    <h1 class="w-1/2 font-work-sans font-bold text-orange text-6xl">
        Exploring Media literacy practices for just and equitable futures.
    </h1>
    <div>
        <Image img_id="home-artwork" />
    </div>
</div>
