const express = require('express');
const router = express.Router();
const { Vaccinations } = require('../models');

router.get('', async (req, res, next) => {
    try {
        const myVaccinations = await Vaccinations.find({});
        res.json(myVaccinations);
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

router.put('/:id', async (req, res, next) => {
    try {
        const updatedVaccination = await Vaccinations.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/vaccinations/${req.params.id}`);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedVaccination = await Vaccinations.findByIdAndDelete(req.params.id);
        res.redirect('/vaccinations');
    } catch (err) {
        next();
        console.log(err);
    }
})

module.exports = router;