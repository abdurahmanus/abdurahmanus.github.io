<script lang="ts">
	import { title } from '$metadata';
	// import '../app.css';
</script>

<main>
	<header>
		<a href="/">
			<h1>{title}</h1>
		</a>
	</header>
	<slot />
</main>
