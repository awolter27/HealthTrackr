const express = require("express");
const router = express.Router();
const { HealthConditions } = require("../models");

const seededData = [
    {
        name: "Tooth Pain",
        currentOrPast: {
            current: "True",
            past: "False"
        },
        ageOfDiagnosis: 53,
        symptoms: "Right Upper Molar Pain",
        treatment: "OTC Pain Relief, Meloxicam",
        notes: "I need to make an appointment to discuss this with the dentist."
    },
    {
        name: "Osteoarthritis",
        currentOrPast: {
            current: "True",
            past: "False"
        },
        ageOfDiagnosis: 50,
        symptoms: "Joint Pain",
        treatment: "Meloxicam, Cortisone Injections",
        notes: "I have an appointment with my orthopedic specialist to discuss the requirements for a knee replacement."
    },
    {
        name: "Hypertension",
        currentOrPast: {
            current: "True",
            past: "False"
        },
        ageOfDiagnosis: 38,
        symptoms: "None",
        treatment: "Lifestyle Modifications, Amlodipine",
        notes: "I've noticed my blood pressure slowly increasing since my last visit. I have an appointment with my PCP to discuss increasing the dose of my amlodipine."
    },
    {
        name: "Seasonal Allergies",
        currentOrPast: {
            current: "True",
            past: "False"
        },
        ageOfDiagnosis: 13,
        symptoms: "Sinus Congestion, Nasal Congestion, Sneezing",
        treatment: "OTC Claritin",
        notes: "I'm allergic to pollen."
    },
    {
        name: "Chickenpox",
        currentOrPast: {
            current: "False",
            past: "True"
        },
        ageOfDiagnosis: 3,
        symptoms: "Red, Itchy, Raised Rash",
        treatment: "Symptomatic Care",
        notes: "I was never vaccinated for varicella."
    }
];

router.get("", async (req, res, next) => {
    try {
        const myHealthConditions = await HealthConditions.find({});
        res.json(myHealthConditions);
    } catch (err) {
        next();
        console.log(err);
    }
});

router.get("/seed", async (req, res, next) => {
    try {
        await HealthConditions.deleteMany({});
        await HealthConditions.insertMany(seededData);
        res.redirect("/healthconditions");
    } catch (err) {
        next();
        console.log(err);
    }
});

router.post("", async (req, res, next) => {
    try {
        const newHealthCondition = req.body;
        await HealthConditions.create(req.body);
        res.redirect("/healthconditions");
    } catch (err) {
        next();
        console.log(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const myHealthCondition = await HealthConditions.findById(req.params.id);
        res.json(myHealthCondition);
    } catch (err) {
        next();
        console.log(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const updatedHealthCondition = await HealthConditions.findByIdAndUpdate(req.params.id, req.body);
        res.json(updatedHealthCondition);
    } catch (err) {
        next();
        console.log(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const deletedHealthCondition = await HealthConditions.findByIdAndDelete(req.params.id);
        res.json(deletedHealthCondition);
    } catch (err) {
        next();
        console.log(err);
    }
});

module.exports = router;