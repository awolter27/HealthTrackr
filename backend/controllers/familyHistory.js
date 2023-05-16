const express = require('express');
const router = express.Router();
const { FamilyHistory } = require('../models');

router.get('', async (req, res, next) => {
    try {
        const myFamilyHistory = await FamilyHistory.find({});
        res.json(myFamilyHistory);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const myFamilyHistory = await FamilyHistory.findById(req.params.id);
        res.json(myFamilyHistory);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.post('', async (req, res, next) => {
    try {
        const newFamilyHistory = req.body;
        await FamilyHistory.create(req.body);
        res.redirect('/familyhistory');
    } catch (err) {
        next();
        console.log(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updatedFamilyHistory = await FamilyHistory.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/familyhistory/${req.params.id}`);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedFamilyHistory = await FamilyHistory.findByIdAndDelete(req.params.id);
        res.redirect('/familyhistory');
    } catch (err) {
        next();
        console.log(err);
    }
})

module.exports = router;