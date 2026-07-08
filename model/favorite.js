import db from "../data/config.js"


export class Favorite {

    static async fetchAllFavorites() {
        try {
            const [rows] = await db.execute("SELECT menu_id From favorite")
            return rows.map(rows => rows.menu_id);
        } catch (err) {
            console.log("error while inserting data", err);
            throw err
        }

    }



    static async toggleFavorite(menu_id) {
        const [rows] = await db.execute("SELECT menu_id FROM favorite WHERE menu_id = ?", [menu_id]);

        if (rows.length > 0) {
            await db.execute("DELETE FROM favorite WHERE menu_id = ?", [menu_id]);
            console.log(menu_id)
        } else {
            await db.execute("INSERT INTO favorite(menu_id) VALUES(?)", [menu_id]);
        }
    }

    static async delete(menu_id) {

        await db.execute("DELETE FROM favorite WHERE menu_id = ?", [menu_id]);

    }
}


