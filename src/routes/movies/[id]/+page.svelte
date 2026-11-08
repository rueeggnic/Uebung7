<script>
    let { data } = $props();

    function handleImageError(event) {
        if (!event.currentTarget.src.endsWith('/images/placeholder.jpg')) {
            event.currentTarget.src = '/images/placeholder.jpg';
        }
    }
</script>

<div class="container my-4">
    <a href="/movies" class="d-inline-block mb-3">Back</a>

    {#if data.movie}
        <h1 class="mb-4">{data.movie.title}</h1>

        <div class="row">
            <div class="col-12 col-md-4 col-lg-3 mb-4">
                <img
                    src={data.movie.poster}
                    alt={data.movie.title}
                    class="img-fluid rounded"
                    onerror={handleImageError}
                />
            </div>
            <div class="col-12 col-md-8 col-lg-9">
                <p class="mb-2">Jahr: {data.movie.year}</p>
                <p class="mb-3">Dauer: {data.movie.length}</p>

                {#if data.movie.actors && data.movie.actors.length > 0}
                    <p class="mb-1">Cast:</p>
                    <ul>
                        {#each data.movie.actors as actor}
                            <li>{actor}</li>
                        {/each}
                    </ul>
                {/if}
            </div>
        </div>
    {:else}
        <p>Film wurde nicht gefunden.</p>
    {/if}
</div>
