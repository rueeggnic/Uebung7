<div class="container my-4" style="max-width: 650px;">
    <a href="/movies" class="d-inline-block mb-3">Back</a>

    <h1 class="mb-4">Add a Movie</h1>

    <form method="POST">
        <div class="mb-3">
            <label for="title" class="form-label">Name</label>
            <input
                type="text"
                id="title"
                name="title"
                class="form-control"
                placeholder="Barbie"
                required
            />
        </div>

        <div class="mb-3">
            <label for="year" class="form-label">Year</label>
            <input
                type="number"
                id="year"
                name="year"
                class="form-control"
                placeholder="2023"
                required
            />
        </div>

        <div class="mb-3">
            <label for="length" class="form-label">Length</label>
            <input
                type="text"
                id="length"
                name="length"
                class="form-control"
                placeholder="114 Minuten"
                required
            />
        </div>

        <button type="submit" class="btn btn-primary">Add Movie</button>
    </form>
</div>
