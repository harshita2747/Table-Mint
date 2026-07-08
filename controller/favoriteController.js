import { Favorite } from "../model/favorite.js";
import { Menu } from "../model/menu.js";

export const addFavorite = async (req, res) => {
    const { id } = req.body;

    const favorite = new Favorite(id);
    

    await favorite.save();

    res.redirect("/menu");
};

export const getFavorites = async (req, res) => {
  const favorites = await Favorite.fetchAllFavorites();
  const menuItems = await Menu.fetchAllMenus();

const favoriteItems = menuItems.filter(item =>favorites.includes(Number(item.id)));
    console.log(favoriteItems)
  res.render("favorites", { favoriteItems });
};

export const toggleFavorite = async (req, res) => {
  const { id } = req.params;

  await Favorite.toggleFavorite(id);
  

  res.redirect("/");
};

export const removeFavorite = async (req, res) => {
    const { itemId } = req.params;

    await Favorite.delete(itemId);

    res.redirect("/favorites");
};