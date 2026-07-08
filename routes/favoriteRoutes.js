import express from "express"
import { addFavorite, getFavorites, removeFavorite,toggleFavorite } from "../controller/favoriteController.js";

export const favoriteRouter = express.Router()

favoriteRouter.post("/favorite", addFavorite);
favoriteRouter.get("/favorites", getFavorites);
favoriteRouter.post("/favorite/delete/:itemId", removeFavorite);
favoriteRouter.post("/favorite/:id", toggleFavorite);
