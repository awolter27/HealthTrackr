const express = require('express');
const router = express.Router();
const { FamilyHistory } = require('../models');

const seededData = [
    {
        relationship: "Paternal Grandfather",
        living: {
            living: false,
            age: 0
        },
        deceased: {
            deceased: true,
            ageAtDeath: 84
        },
        healthCondition: "Colon Cancer",
        ageOfDiagnosis: 79,
        notes: "He underwent radiation, chemotherapy, and surgery."
    },
    {
        relationship: "Father",
        living: {
            living: true,
            age: 61
        },
        deceased: {
            deceased: false,
            ageAtDeath: 0
        },
        healthCondition: "Hypertension",
        ageOfDiagnosis: 40,
        notes: "He takes lisinopril."
    },
    {
        relationship: "Mother",
        living: {
            living: true,
            age: 59
        },
        deceased: {
            deceased: false,
            ageAtDeath: 0
        },
        healthCondition: "Osteoarthritis",
        ageOfDiagnosis: 55,
        notes: "She uses OTC naproxen."
    }
]

router.get('', async (req, res, next) => {
    try {
        const myFamilyHistory = await FamilyHistory.find({});
        res.json(myFamilyHistory);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/seed', async (req, res, next) => {
    try {
        await FamilyHistory.deleteMany({});
        await FamilyHistory.insertMany(seededData);
        res.redirect('/familyhistory');
    } catch(err) {
        next();
        console.log(err);
    }
})

router.post('/new', async (req, res, next) => {
    try {
        const newFamilyHistory = req.body;
        await FamilyHistory.create(req.body);
        res.redirect('/familyhistory');
    } catch (err) {
        next();
        console.log(err);
    }
})

router.put('/:id/edit', async (req, res, next) => {
    try {
        const updatedFamilyHistory = await FamilyHistory.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/familyhistory/${req.params.id}`);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.delete('/:id/delete', async (req, res) => {
    try {
        const deletedFamilyHistory = await FamilyHistory.findByIdAndDelete(req.params.id);
        res.redirect('/familyhistory');
    } catch (err) {
        next();
        console.log(err);
    }
})

module.exports = router;