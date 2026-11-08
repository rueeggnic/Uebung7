<script>
	import favicon from "#lib/assets/favicon.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="navbar navbar-dark bg-dark px-3">
	<!-- justify-content-start richtet alles links aus, gap-4 hält Abstand zwischen Logo und Link -->
	<div class="container-fluid justify-content-start gap-4">
		<a class="navbar-brand fw-bold mb-0" href="/">MovieFinder</a>
		<div class="navbar-nav flex-row gap-3">
			<a class="nav-link" href="/movies">Movies</a>
		</div>
	</div>
</nav>

{@render children()}
