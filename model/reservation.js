import db from "../data/config.js"

export class Reservation {
    constructor(name, phone, date, time, request, guests) {
        this.name = name;
        this.phone = phone;
        this.date = date;
        this.time = time;
        this.guests = guests;
        this.request = request;
    }

    static async fetchAllReservations() {
        try {
            const [rows] = await db.execute("SELECT * FROM reservations")
            console.log(rows)
            return rows;
        } catch (err) {
            console.log("error while fetching data", err);
            throw err

        }
    }


    async save() {

        const query = "INSERT INTO reservations(name, phone, date, time, request,guests) VALUES (?,?,?,?,?,?)"

        const values = [this.name, this.phone, this.date, this.time, this.request,this.guests]
        console.log(values);
        await db.execute(query, values)

    }

}