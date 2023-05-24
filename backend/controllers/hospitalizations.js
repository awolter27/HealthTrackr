const express = require('express');
const router = express.Router();
const { Hospitalizations } = require('../models');

const seededData = [
    {
        name: "Westview Hospital",
        location: "24787 Luckey Rd.",
        dates: "01/03/2021 - 01/04/2021",
        reason: "Right Hip Replacement",
        notes: "I had no complications after the surgery."
    },
    {
        name: "Westview Hospital",
        location: "24787 Luckey Rd.",
        dates: "08/23/2012 - 08/26/2012",
        reason: "Hypertensive Urgency",
        notes: "I was placed on a nicardipine drip in the hospital. Once my blood pressure stabilized, I was placed on amlodipine as an outpatient."
    },
    {
        name: "Maple Valley Hospital",
        location: "244 Madison Ave.",
        dates: "03/02/2019 - 03/04/2019",
        reason: "Emergency Appendectomy",
        notes: "I had no complications after the surgery."
    }
]

router.get('', async (req, res, next) => {
    try {
        const myHospitalizations = await Hospitalizations.find({});
        res.json(myHospitalizations);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/seed', async (req, res, next) => {
    try {
        await Hospitalizations.deleteMany({});
        await Hospitalizations.insertMany(seededData);
        res.redirect('/hospitalizations');
    } catch(err) {
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

router.get('/:id', async (req, res, next) => {
    try {
        const myHospitalization = await Hospitalizations.findById(req.params.id);
        res.json(myHospitalization);
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

router.delete('/:id', async (req, res, next) => {
    try {
        const deletedHospitalization = await Hospitalizations.findByIdAndDelete(req.params.id);
        res.redirect('/hospitalizations');
    } catch (err) {
        next();
        console.log(err);
    }
})

module.exports = router;