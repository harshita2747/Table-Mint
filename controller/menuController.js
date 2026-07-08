import { Menu } from "../model/menu.js";
import { Favorite } from "../model/favorite.js";

const menuData =  await Menu.fetchAllMenus()


export const getHomepage = async(req,res)=>{
    const favoriteIds= await Favorite.fetchAllFavorites();
   console.log("favoriteIds:", favoriteIds);

    res.render("home", {menuItems : menuData,favoriteIds})
}

export const getMenuPage = async (req,res)=>{
    res.render("menu", {menuItems :  menuData})
}


export const getManageMenu = async (req,res)=>{
    res.render("manageMenu",{menuItems : menuData})
}

export const getMenuDetails = async (req,res)=>{
    const slug = req.params.slug
    const [menuItem] =  await Menu.getMenuDetails(slug) 
    res.render("dish",{item :  menuItem, menuItems : menuData})
}

export const getAddMenu = async (req,res)=>{ 
    res.render("editMenu",{edit : false})
}

export const postAddMenu = async (req,res)=>{ 
    const {id,name,category,price,prepTime,status,image,description,detail,tags} = req.body
    const menuItem = new Menu(id,name,category,price,prepTime,status,image,description,detail,tags)
    menuItem.save()
    res.redirect("/manage-menu")
}

export const deleteMenuItem = async(req,res) =>{
    const id = req.params.id;
    await Menu.deleteMenuItem(id);
    res.redirect("/manage-menu")
}

export const getEditMenuPage = async(req,res)=>{
    const [menuItems] = await  Menu.getItemsById(req.params.id)
    const editable = req.query.editable
    res.render("editMenu",{edit : editable, item : menuItems})
}

export const editMenuItem = async(req,res)=>{
    const {id,name,category,price,prepTime,status,image,description,detail,tags} = req.body;
    const menuItem = new Menu(id,name,category,price,prepTime,status,image,description,detail,tags)
    menuItem.save()
    res.redirect("/manage-menu")
}


