import db from "#lib/db.js";
import { redirect } from "@sveltejs/kit";

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const title = formData.get("title");
        const year = Number(formData.get("year"));
        const length = formData.get("length");

        const movie = {
            title,
            year,
            length
        };

        await db.createMovie(movie);

        redirect(303, "/movies");
    }
};
