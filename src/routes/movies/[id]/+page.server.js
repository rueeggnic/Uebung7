import db from "#lib/db.js";

export async function load({ params }) {
    const movie = await db.getMovie(params.id);
    return {
        movie
    };
}
