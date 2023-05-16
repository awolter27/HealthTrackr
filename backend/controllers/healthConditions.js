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
        const myHealthCondition = await HealthConditions.findById(req.params.id);
        res.json(myHealthCondition);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.post('', async (req, res, next) => {
    try {
        const newHealthCondition = req.body;
        await HealthConditions.create(req.body);
        res.redirect('/healthconditions');
    } catch (err) {
        next();
        console.log(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updatedHealthCondition = await HealthConditions.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/healthconditions/${req.params.id}`);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedHealthCondition = await HealthConditions.findByIdAndDelete(req.params.id);
        res.redirect('/healthconditions');
    } catch (err) {
        next();
        console.log(err);
    }
})

module.exports = router;