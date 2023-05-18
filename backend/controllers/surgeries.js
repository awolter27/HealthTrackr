const express = require('express');
const router = express.Router();
const { Surgeries } = require('../models');

const seededData = [
    {
        name: "Right Hip Arthoplasty",
        location: "Westview Hospital",
        date: "01/03/2021",
        surgeon: "Dr. Lilly Murphy",
        reason: "Osteoarthritis",
        notes: "I had no complications after the surgery."
    },
    {
        name: "Appendectomy",
        location: "Maple Valley Hospital",
        date: "03/02/2019",
        surgeon: "Dr. Samuel Phillips",
        reason: "Appendicitis",
        notes: "I had no complications after the surgery."
    }
]

router.get('', async (req, res, next) => {
    try {
        const mySurgeries = await Surgeries.find({});
        res.json(mySurgeries);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/seed', async (req, res, next) => {
    try {
        await Surgeries.deleteMany({});
        await Surgeries.insertMany(seededData);
        res.redirect('/surgeries');
    } catch(err) {
        next();
        console.log(err);
    }
})

router.post('/new', async (req, res, next) => {
    try {
        const newSurgery = req.body;
        await Surgeries.create(req.body);
        res.redirect('/surgeries');
    } catch (err) {
        next();
        console.log(err);
    }
})

router.put('/:id/edit', async (req, res, next) => {
    try {
        const updatedSurgery = await Surgeries.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/surgeries/${req.params.id}`);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.delete('/:id/delete', async (req, res) => {
    try {
        const deletedSurgery = await Surgeries.findByIdAndDelete(req.params.id);
        res.redirect('/surgeries');
    } catch (err) {
        next();
        console.log(err);
    }
})

module.exports = router;