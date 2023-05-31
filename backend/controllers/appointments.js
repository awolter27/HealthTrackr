const express = require("express");
const router = express.Router();
const { Appointments } = require("../models");

const seededData = [
    {
        nameOfAppointment: "Primary Care Appointment",
        title: "Dr.",
        nameOfProvider: "Taylor Jones",
        specialty: "Family Medicine",
        address: "935 E Birch St.",
        date: "06/01/2023",
        time: "8:30 am",
        reason: "Medication Refill for Amlodipine",
        notes: "I want to discuss increasing the dose of my anti-hypertensive."
    },
    {
        nameOfAppointment: "Orthopedics Appointment",
        title: "PA-C",
        nameOfProvider: "Josh Campbell",
        specialty: "Orthopedics",
        address: "383 Main St.",
        date: "06/29/2023",
        time: "1:15 pm",
        reason: "Cortisone Injection in Right Knee",
        notes: "I want to discuss the critera for a knee replacement."
    },
    {
        nameOfAppointment: "OBGYN Appointment",
        title: "NP",
        nameOfProvider: "Hannah Miller",
        specialty: "OBGYN",
        address: "24787 Luckey Rd.",
        date: "12/15/2023",
        time: "3:45 pm",
        reason: "Annual Visit",
        notes: "I want to discuss the results of my last pap smear."
    }
];

router.get("", async (req, res, next) => {
    try {
        const myAppointments = await Appointments.find({});
        res.json(myAppointments);
    } catch (err) {
        next();
        console.log(err);
    }
});

router.get("/seed", async (req, res, next) => {
    try {
        await Appointments.deleteMany({});
        await Appointments.insertMany(seededData);
        res.redirect("/appointments");
    } catch (err) {
        next();
        console.log(err);
    }
});

router.post("", async (req, res, next) => {
    try {
        const newAppointment = req.body;
        await Appointments.create(req.body);
        res.redirect("/appointments");
    } catch (err) {
        next();
        console.log(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const myAppointment = await Appointments.findById(req.params.id);
        res.json(myAppointment);
    } catch (err) {
        next();
        console.log(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const updatedAppointment = await Appointments.findByIdAndUpdate(req.params.id, req.body);
        res.json(updatedAppointment);
    } catch (err) {
        next();
        console.log(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const deletedAppointment = await Appointments.findByIdAndDelete(req.params.id);
        res.json(deletedAppointment);
    } catch (err) {
        next();
        console.log(err);
    }
});

module.exports = router;