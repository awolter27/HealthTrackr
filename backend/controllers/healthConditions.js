const express = require('express');
const router = express.Router();
const { HealthConditions } = require('../models');

router.get('', async (req, res, next) => {
    try {
        const myHealthConditions = await HealthConditions.find({});
        res.json(myHealthConditions);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const myHealthConditions = await HealthConditions.findById(req.params.id);
        res.json(myHealthConditions);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.post('', async (req, res, next) => {
    try {
        const newHealthConditions = req.body;
        await HealthConditions.create(req.body);
        res.redirect('/healthconditions');
    } catch (err) {
        next();
        console.log(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updatedHealthConditions = await HealthConditions.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/healthconditions/${req.params.id}`);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedHealthConditions = await HealthConditions.findByIdAndDelete(req.params.id);
        res.redirect('/healthconditions');
    } catch (err) {
        next();
        console.log(err);
    }
})

module.exports = router;