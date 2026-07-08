import {Reservation} from "../model/reservation.js";
import { Menu } from "../model/menu.js";


export const getReservationPage = async (req, res) => {

    res.render("reservation");
};

export const postReservationPage = async (req, res) => {
    const { name, phone, date, time, request ,guests} = req.body;
    console.log(guests);

    const reservation = new Reservation(name,phone,date,time,request,guests);

    await reservation.save();

    res.redirect("/reservation-success");
};


export const getReservationSuccess = async (req, res) => {
    const reservation = await Reservation.fetchAllReservations();
    res.render("reservationSuccess", {reservation});
};

