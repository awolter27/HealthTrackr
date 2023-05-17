const express = require('express');
const router = express.Router();
const { CareTeam } = require('../models');

const seededData = [
    {
        title: "Dr.",
        name: "Taylor Jones",
        specialty: "Family Medicine",
        address: "935 E Birch St.",
        phoneNumber: "202-555-0197",
        email: "tjones13@peakviewcommunitycenter.org",
        lastAppointment: "05/23/2022",
        nextAppointment: "06/01/2023",
        notes: "I want to discuss increasing the dose of my anti-hypertensive."
    },
    {
        title: "PA-C",
        name: "Josh Campbell",
        specialty: "Orthopedics",
        address: "383 Main St.",
        phoneNumber: "505-600-9639",
        email: "jcampbell9@peakviewcommunitycenter.org",
        lastAppointment: "03/10/2023",
        nextAppointment: "06/29/2023",
        notes: "I want to discuss the critera for a knee replacement."
    },
    {
        title: "NP",
        name: "Hannah Miller",
        specialty: "OBGYN",
        address: "24787 Luckey Rd.",
        phoneNumber: "248-868-9984",
        email: "hannahmiller@westviewhospital.com",
        lastAppointment: "12/03/2022",
        nextAppointment: "12/15/2023",
        notes: "I want to discuss starting birth control."
    },
    {
        title: "Dr.",
        name: "Scott Jamison",
        specialty: "Dentist",
        address: "10455 N Central Expy.",
        phoneNumber: "214-363-3559",
        email: "sjamison@highlandsgeneralclinic.org",
        lastAppointment: "07/24/2022",
        nextAppointment: "TBD",
        notes: "I need to make an appointment for one of my molars."
    }
]

router.get('', async (req, res, next) => {
    try {
        const myCareTeam = await CareTeam.find({});
        res.json(myCareTeam);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/seed', async (req, res, next) => {
    try {
        await CareTeam.deleteMany({});
        await CareTeam.insertMany(seededData);
        res.redirect('/careteam');
    } catch(err) {
        console.log(err);
        next();
    }
})

router.post('/new', async (req, res, next) => {
    try {
        const newCareTeam = req.body;
        await CareTeam.create(req.body);
        res.redirect('/careteam');
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

router.put('/:id/edit', async (req, res, next) => {
    try {
        const updatedCareTeam = await CareTeam.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/careteam/${req.params.id}`);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.delete('/:id/delete', async (req, res) => {
    try {
        const deletedCareTeam = await CareTeam.findByIdAndDelete(req.params.id);
        res.redirect('/careteam');
    } catch (err) {
        next();
        console.log(err);
    }
})

module.exports = router;