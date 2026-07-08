
import express from "express"
import { menuRouter } from "./routes/menuRoutes.js";
import { reservationRouter } from "./routes/reservationRoutes.js";
import { favoriteRouter } from "./routes/favoriteRoutes.js";

const app = express()

app.use(express.static('public'));
app.set("view engine", "ejs")
app.use(express.urlencoded({
    extended : true
}))

// Routes
app.use(menuRouter)
app.use(reservationRouter)
app.use(favoriteRouter)

const PORT = 3000;
app.listen(3000,()=>{
    console.log("server is running on port http://localhost:3000");
})


