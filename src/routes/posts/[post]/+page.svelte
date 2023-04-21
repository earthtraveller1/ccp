<script>
	export let data;
</script>

<header>
	<a href="/">Home</a>
</header>

<main class="posts">
	<svelte:component this={data.content} />
</main>
