const express = require('express');
const router = express.Router();
const { Medications } = require('../models');

const seededData = [
    {
        name: "Amlodipine",
        dose: 5,
        unitOfMeasurement: "mg",
        route: "Oral",
        frequency: "Once a Day",
        reason: "Hypertension",
        notes: "I want to discuss increasing the dose of my anti-hypertensive."
    },
    {
        name: "Meloxicam",
        dose: 15,
        unitOfMeasurement: "mg",
        route: "Oral",
        frequency: "Once a Day",
        reason: "Osteoarthritis, Tooth Pain",
        notes: "I have an appointment with my orthopedic specialist, but I need to make an appointment to discuss this with my dentist."
    },
    {
        name: "Tylenol",
        dose: 1000,
        unitOfMeasurement: "mg",
        route: "Oral",
        frequency: "Every 6 Hours As Needed",
        reason: "Osteoarthritis, Tooth Pain",
        notes: "I have an appointment with my orthopedic specialist, but I need to make an appointment to discuss this with my dentist."
    },
    {
        name: "Claritin",
        dose: 10,
        unitOfMeasurement: "mg",
        route: "Oral",
        frequency: "Once a Day As Needed",
        reason: "Seasonal Allergies",
        notes: "I need to go to the store to buy more anti-histamines."
    }
]

router.get('', async (req, res, next) => {
    try {
        const myMedications = await Medications.find({});
        res.json(myMedications);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/seed', async (req, res, next) => {
    try {
        await Medications.deleteMany({});
        await Medications.insertMany(seededData);
        res.redirect('/medications');
    } catch(err) {
        next();
        console.log(err);
    }
})

router.post('/new', async (req, res, next) => {
    try {
        const newMedication = req.body;
        await Medications.create(req.body);
        res.redirect('/medications');
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const myMedication = await Medications.findById(req.params.id);
        res.json(myMedication);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.put('/:id/edit', async (req, res, next) => {
    try {
        const updatedMedication = await Medications.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/medications/${req.params.id}`);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.delete('/:id/delete', async (req, res) => {
    try {
        const deletedMedication = await Medications.findByIdAndDelete(req.params.id);
        res.redirect('/medications');
    } catch (err) {
        next();
        console.log(err);
    }
})

module.exports = router;