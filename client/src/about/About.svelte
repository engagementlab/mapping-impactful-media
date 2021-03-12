<script>
    import { onMount } from 'svelte';
    import { getDataAction } from '../data';

    let content = null;

    onMount(() => getData());

    async function getData() {
        content = await getDataAction();
        console.log(content);
    }
</script>

<h2>About</h2>
