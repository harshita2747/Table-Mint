import express from "express"
import fs from "fs/promises"
import path from "path"
import * as reservationController from  "../controller/reservationController.js"



export const reservationRouter = express.Router()

reservationRouter.get("/reservation",reservationController.getReservationPage)
reservationRouter.post("/reservation",reservationController.postReservationPage)
reservationRouter.get("/reservation-success",reservationController.getReservationSuccess)