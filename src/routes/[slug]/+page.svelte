<script lang="ts">
	import { dev } from '$app/environment';
	import { title } from '$metadata';

	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title} — {title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.metadata.title} />
</svelte:head>

{#if dev}
	<a href="vscode://file{data.filePath}">
		✍️ Open in Visual Studio Code
		<span>&rarr;</span>
	</a>
{/if}

<svelte:component this={data.content} />
