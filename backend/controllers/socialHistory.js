const express = require('express');
const router = express.Router();
const { SocialHistory } = require('../models');

const seededData = [
    {
        education: [{
            location: "Golden Valley Academy",
            degree: "High School Diploma",
            startDate: "08/01/1971",
            endDate: "05/01/1975"
        }],
        occupation: [{
            title: "Executive Assistant",
            employer: "Jim Bob's Jerky Emporium",
            startDate: "08/29/1975",
            endDate: "current"
        }],
        maritalStatus: "Married",
        children: 2,
        diet: "Fair",
        exercise: [{
            type: "Aerobic",
            duration: 30,
            freqency: 5
        }],
        sleep: 7,
        tobacco: [{
            current: true,
            past: false,
            type: "cigarettes",
            amount: 1,
            startDate: "05/13/1974",
            endDate: "current"
        }],
        alcohol: [{
            current: true,
            past: false,
            type: "wine",
            amount: 3,
            startDate: "21 years old",
            endDate: "current"
        }],
        substance: [{
            current: false,
            past: false,
            type: "n/a",
            route: "n/a",
            amount: 0,
            startDate: "n/a",
            endDate: "n/a"
        }],
        notes: "I am interested in quiting tobacco."
    }
]

router.get('', async (req, res, next) => {
    try {
        const mySocialHistory = await SocialHistory.find({});
        res.json(mySocialHistory);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/seed', async (req, res, next) => {
    try {
        await SocialHistory.deleteMany({});
        await SocialHistory.insertMany(seededData);
        res.redirect('/socialhistory');
    } catch(err) {
        next();
        console.log(err);
    }
})

router.post('/new', async (req, res, next) => {
    try {
        const newSocialHistory = req.body;
        await SocialHistory.create(req.body);
        res.redirect('/socialhistory');
    } catch (err) {
        next();
        console.log(err);
    }
})

router.put('/:id/edit', async (req, res, next) => {
    try {
        const updatedSocialHistory = await SocialHistory.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/socialhistory/${req.params.id}`);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.delete('/:id/delete', async (req, res) => {
    try {
        const deletedSocialHistory = await SocialHistory.findByIdAndDelete(req.params.id);
        res.redirect('/socialhistory');
    } catch (err) {
        next();
        console.log(err);
    }
})

module.exports = router;