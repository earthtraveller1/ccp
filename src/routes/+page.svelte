<script>
	import Datetime from './Datetime.svelte';
	import PostsContainer from './PostsContainer.svelte';
	import Post from './Post.svelte';
</script>

<title>Communist Party of China</title>

<div class="everything">
	<header>
		<h1>Communist Party of China</h1>
	</header>

	<main>
		<h1>Welcome</h1>
		<h2>to the unofficial website of the CCP!</h2>

		<p class="inline">Current date and time:</p>
		<Datetime />

		<h2>Articles</h2>

		<PostsContainer>
			<Post
				title={'The Discovery of Immortality Medicine'}
				description={'Learn how the current leader of the CCP, Neng Li, discovered immortality medicine'}
				url={'/posts/immortality-medicine'}
			/>
			<Post
				title={'CCP Anti-god weapon V4 release'}
				description={'Learn about the newest CCP military technology, the upcoming Second Universal War, and what it means for normal people'}
				url={'/posts/anti-god-weapon-release'}
			/>
			<Post
				title={'Tensions rise between the CCP and the Univeral Forces'}
				description={"Learn about how the CCP reacted to King Shiva Deshpande's update on his recognition of the PRC."}
				url={'/posts/tension-ccp-universal-forces'}
			/>
		</PostsContainer>
	</main>
</div>

<style>
	.inline {
		display: inline;
	}

	main {
		overflow: hidden;
		max-height: 100vh;
		margin: 0;
	}

	.everything {
		overflow: hidden;
		max-height: 100vh;
		margin: 0;
	}
</style>
