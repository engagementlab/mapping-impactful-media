<script lang="ts">
    import { url, isActive } from '@roxi/routify';
    import Image from './Image.svelte';
</script>

<nav class="container mx-auto px-5 flex flex-row">
    <div class="w-1/2">
        <Image
            imgId="logo.png"
            alt="Logo with text 'Mapping Impactful Media Literacy Practices'"
            width="250"
        />
    </div>
    <div class="flex items-center w-full">
        <ul class="flex justify-around w-full font-work-sans">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </div>
</nav>
