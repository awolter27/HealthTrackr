const express = require('express');
const router = express.Router();
const { Appointments } = require('../models');

router.get('', async (req, res, next) => {
    try {
        const myAppointments = await Appointments.find({});
        res.json(myAppointments);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const myAppointment = await Appointments.findById(req.params.id);
        res.json(myAppointment);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.post('', async (req, res, next) => {
    try {
        const newAppointment = req.body;
        await Appointments.create(req.body);
        res.redirect('/appointments');
    } catch (err) {
        next();
        console.log(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updatedAppointment = await Appointments.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/appointments/${req.params.id}`);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedAppointment = await Appointments.findByIdAndDelete(req.params.id);
        res.redirect('/appointments');
    } catch (err) {
        next();
        console.log(err);
    }
})

module.exports = router;