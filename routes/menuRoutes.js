import express from "express"
import fs from "fs/promises"
import path from "path"
import * as menuController from  "../controller/menuController.js"



export const menuRouter = express.Router()


menuRouter.get("/",menuController.getHomepage)
menuRouter.get("/menu",menuController.getMenuPage)

menuRouter.get("/manage-menu",menuController.getManageMenu)
menuRouter.get("/menu/:slug",menuController.getMenuDetails)
menuRouter.get("/add-menu",menuController.getAddMenu)
menuRouter.post("/submit-menu",menuController.postAddMenu)
menuRouter.post("/delete-item/:id",menuController.deleteMenuItem)
menuRouter.get("/edit-menu/:id",menuController.getEditMenuPage)
menuRouter.post("/edit-menu",menuController.editMenuItem)