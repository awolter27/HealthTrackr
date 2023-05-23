const express = require('express');
const router = express.Router();
const { Vaccinations } = require('../models');

const seededData = [
    {
        name: "COVID-19",
        manufacturer: "Pfizer",
        lotNumber: "EH2938",
        date: "04/30/2023",
        notes: "Left Deltoid"
    },
    {
        name: "Influenza",
        manufacturer: "Sanofi",
        lotNumber: "EL6942",
        date: "09/22/2022",
        notes: "Right Deltoid"
    },
    {
        name: "Pneumococcal",
        manufacturer: "Merck",
        lotNumber: "LS838",
        date: "09/22/2022",
        notes: "Right Deltoid"
    },
    {
        name: "Shingles",
        manufacturer: "Sanofi",
        lotNumber: "OE3828",
        date: "02/10/2020",
        notes: "Left Deltoid"
    },
    {
        name: "Tetanus",
        manufacturer: "GlaxoSmithKline",
        lotNumber: "MS2382",
        date: "07/06/2015",
        notes: "Right Deltoid"
    },
]

router.get('', async (req, res, next) => {
    try {
        const myVaccinations = await Vaccinations.find({});
        res.json(myVaccinations);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/seed', async (req, res, next) => {
    try {
        await Vaccinations.deleteMany({});
        await Vaccinations.insertMany(seededData);
        res.redirect('/vaccinations');
    } catch(err) {
        next();
        console.log(err);
    }
})

router.post('', async (req, res, next) => {
    try {
        const newVaccination = req.body;
        await Vaccinations.create(req.body);
        res.redirect('/vaccinations');
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const myVaccination = await Vaccinations.findById(req.params.id);
        res.json(myVaccination);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.put('/:id/edit', async (req, res, next) => {
    try {
        const updatedVaccination = await Vaccinations.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/vaccinations/${req.params.id}`);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.delete('/:id/delete', async (req, res) => {
    try {
        const deletedVaccination = await Vaccinations.findByIdAndDelete(req.params.id);
        res.redirect('/vaccinations');
    } catch (err) {
        next();
        console.log(err);
    }
})

module.exports = router;