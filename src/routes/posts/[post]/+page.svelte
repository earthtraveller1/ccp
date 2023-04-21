<script>
	export let data;
</script>

<header>
	<a href="/ccp">Home</a>
</header>

<main class="posts">
	<svelte:component this={data.content} />
</main>
