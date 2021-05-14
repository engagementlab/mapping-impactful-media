<script>
	import Image from '$lib/Image.svelte';

	import SvelteMarkdown from 'svelte-markdown';

	import { getContentAction } from '../data';

	async function getData() {
		let content = await getContentAction('about');
		return content;
	}
</script>

<h2>About</h2>
<Image imgId="boy-1" responsive={true} />
{#await getData() then content}
	<div>
		<SvelteMarkdown source={content.body} />
	</div>
{/await}
