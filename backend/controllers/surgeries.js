const express = require('express');
const router = express.Router();
const { Surgeries } = require('../models');

router.get('', async (req, res, next) => {
    try {
        const mySurgeries = await Surgeries.find({});
        res.json(mySurgeries);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const mySurgery = await Surgeries.findById(req.params.id);
        res.json(mySurgery);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.post('', async (req, res, next) => {
    try {
        const newSurgery = req.body;
        await Surgeries.create(req.body);
        res.redirect('/surgeries');
    } catch (err) {
        next();
        console.log(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updatedSurgery = await Surgeries.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/surgeries/${req.params.id}`);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedSurgery = await Surgeries.findByIdAndDelete(req.params.id);
        res.redirect('/surgeries');
    } catch (err) {
        next();
        console.log(err);
    }
})

module.exports = router;