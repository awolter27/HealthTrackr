const express = require('express');
const router = express.Router();
const { Allergies } = require('../models');

router.get('', async (req, res, next) => {
    try {
        const myAllergies = await Allergies.find({});
        res.json(myAllergies);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const myAllergy = await Allergies.findById(req.params.id);
        res.json(myAllergy);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.post('', async (req, res, next) => {
    try {
        const newAllergy = req.body;
        await Allergies.create(req.body);
        res.redirect('/allergies');
    } catch (err) {
        next();
        console.log(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updatedAllergy = await Allergies.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/books/${req.params.id}`);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedAllergy = await Allergies.findByIdAndDelete(req.params.id);
        res.redirect('/allergies');
    } catch (err) {
        next();
        console.log(err);
    }
})

module.exports = router;