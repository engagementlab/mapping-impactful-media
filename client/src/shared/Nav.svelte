<script lang="ts">
    import { url, isActive } from '@roxi/routify';
    import Image from './Image.svelte';
    const links = [
        ['', 'Home'],
        ['./about', 'About'],
    ];
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
            {#each links as [path, name]}
                <li class:opacity-50={$isActive(path)}>
                    <a href={$url(path)}>
                        {name}
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</nav>
