<script>
    import { link } from 'svelte-spa-router';
</script>

<nav class="container mx-auto px-5 flex flex-row">
    <div class="w-1/2">
        <img src="img/logo.png" alt="Logo" width="250" />
    </div>
    <div class="flex items-center w-full">
        <ul class="flex justify-around w-full font-work-sans">
            <li><a href="/" use:link>Home</a></li>
            <li><a href="/about" use:link>About</a></li>
        </ul>
    </div>
</nav>
