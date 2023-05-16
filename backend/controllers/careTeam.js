const express = require('express');
const router = express.Router();
const { CareTeam } = require('../models');

router.get('', async (req, res, next) => {
    try {
        const myCareTeam = await CareTeam.find({});
        res.json(myCareTeam);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const myCareTeam = await CareTeam.findById(req.params.id);
        res.json(myCareTeam);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.post('', async (req, res, next) => {
    try {
        const newCareTeam = req.body;
        await CareTeam.create(req.body);
        res.redirect('/careteam');
    } catch (err) {
        next();
        console.log(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updatedCareTeam = await CareTeam.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/careteam/${req.params.id}`);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedCareTeam = await CareTeam.findByIdAndDelete(req.params.id);
        res.redirect('/careteam');
    } catch (err) {
        next();
        console.log(err);
    }
})

module.exports = router;