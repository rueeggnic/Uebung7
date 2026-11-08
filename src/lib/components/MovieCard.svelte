<script>
  let { id, title, year, length, poster } = $props();

  function handleImageError(event) {
    if (!event.currentTarget.src.endsWith('/images/placeholder.jpg')) {
      event.currentTarget.src = '/images/placeholder.jpg';
    }
  }
</script>

<div class="card h-100 bg-dark text-light">
	<img src={poster} alt={title} class="card-img-top" onerror={handleImageError} />
	<div class="card-body">
		<h5 class="card-title">
			{#if id}
				<a href="/movies/{id}" class="text-light text-decoration-none">{title}</a>
			{:else}
				{title}
			{/if}
		</h5>
		<p class="card-text mb-1">Jahr: {year}</p>
		<p class="card-text">Dauer: {length}</p>
	</div>
</div>