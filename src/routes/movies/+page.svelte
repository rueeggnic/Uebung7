<script>
    import MovieCard from "#lib/components/MovieCard.svelte";

    let { data } = $props();
</script>

<div class="container my-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="mb-0">Filmliste</h1>
        <a href="/movies/create" class="btn btn-primary">Add New Movie</a>
    </div>

    <div class="row g-4">
        {#each data.movies ?? [] as movie}
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <MovieCard
                    id={movie._id}
                    title={movie.title}
                    year={movie.year}
                    length={movie.length}
                    poster={movie.poster}
                />
            </div>
        {/each}
    </div>
</div>

