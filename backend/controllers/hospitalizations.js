const express = require('express');
const router = express.Router();
const { Hospitalizations } = require('../models');

router.get('', async (req, res, next) => {
    try {
        const myHospitalizations = await Hospitalizations.find({});
        res.json(myHospitalizations);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const myHospitalization = await Hospitalizations.findById(req.params.id);
        res.json(myHospitalization);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.post('', async (req, res, next) => {
    try {
        const newHospitalization = req.body;
        await Hospitalizations.create(req.body);
        res.redirect('/hospitalizations');
    } catch (err) {
        next();
        console.log(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updatedHospitalization = await Hospitalizations.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/hospitalizations/${req.params.id}`);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedHospitalization = await Hospitalizations.findByIdAndDelete(req.params.id);
        res.redirect('/hospitalizations');
    } catch (err) {
        next();
        console.log(err);
    }
})

module.exports = router;