const express = require('express');
const router = express.Router();
const { Medications } = require('../models');

router.get('', async (req, res, next) => {
    try {
        const myMedications = await Medications.find({});
        res.json(myMedications);
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

router.post('', async (req, res, next) => {
    try {
        const newMedication = req.body;
        await Medications.create(req.body);
        res.redirect('/medications');
    } catch (err) {
        next();
        console.log(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updatedMedication = await Medications.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/medications/${req.params.id}`);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedMedication = await Medications.findByIdAndDelete(req.params.id);
        res.redirect('/medications');
    } catch (err) {
        next();
        console.log(err);
    }
})

module.exports = router;