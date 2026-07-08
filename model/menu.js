import db from "../data/config.js"

export class Menu {
    constructor(id, name, category, price, prepTime, status, image, description, detail, tags) {
        this.id = id
        this.slug = name.trim().toLowerCase().replace(/\s+/g, "-")
        this.name = name
        this.category = category
        this.price = price
        this.prepTime = prepTime
        this.status = status
        this.image = image
        this.description = description
        this.detail = detail
        this.tags = tags
    }


    async save() {
        try {


            if(this.id){

                
                 const query = "UPDATE menus SET name=?,slug=?, category=?, price=?, prepTime=?, status=?, image=?, description=?, detail=?, tags=? WHERE id = ?"

                const values = [this.name,this.slug, this.category, this.price, this.prepTime, this.status, this.image, this.description, this.detail, this.tags,this.id]
                
                
                await db.execute(query, values)

            }else{

                 const query = "INSERT INTO menus(name,slug, category, price, prepTime, status, image, description, detail, tags) VALUES (?,?,?,?,?,?,?,?,?,?)"

                const values = [this.name,this.slug, this.category, this.price, this.prepTime, this.status, this.image, this.description, this.detail, this.tags]

                await db.execute(query, values)

            }

           


        } catch (error) {
            console.log("error while inserting data", error);
            throw error
        }

    }


    // static async writeMenuData(data) {

    // }

    static async fetchAllMenus() {
        try {
            const [rows, xyz] = await db.execute("SELECT * FROM menus");
            
            return rows
            
            
        } catch (err) {
            console.log("error while fetching data", err);
            throw err

        }

    }

    static async getMenuDetails(slug) {
        try {

            const [rows] = await db.execute("SELECT * FROM menus WHERE slug = ?", [slug])

            rows.forEach(item =>{
                item.tags = item.tags.trim().split(",")
            })
            

            return rows
        } catch (err) {
            console.log("error while fetching data", err);
            throw err
        }

    }

    static async getItemsById(id) {
        try {

            const [rows] = await db.execute("SELECT * FROM menus WHERE id = ?", [id])
            return rows
        } catch (err) {
            console.log("error while fetching data", err);
            throw err
        }

    }

    static async deleteMenuItem(id) {

        try {
            const [rows] = await db.execute("DELETE FROM menus WHERE id = ?", [id])
            return rows
        } catch (err) {
            console.log("error while deleting data", err);
            throw err
        }

    }
}
