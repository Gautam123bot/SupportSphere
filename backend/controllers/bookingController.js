import express from "express"
import Booking from "../models/booking.js"

async function booked(req, res) {
    const { services, noofstaff, starttime, endtime, notes, yname, email, phone, country, state, city, address} = req.body
    try {
        const userInfo = await Booking.create({
            services,
            noofstaff,
            starttime,
            endtime,
            notes,
            yname,
            email,
            phone,
            country,
            state, 
            city,
            address
        })
        res.json(userInfo)
    } catch (error) {
        res.status(422).json(error)
    }
}

export default booked;