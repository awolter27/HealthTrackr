const express = require("express");
const router = express.Router();
const { Allergies } = require("../models");

const seededData = [
    {
        name: "Penicillin",
        reaction: "Anaphylaxis",
        notes: "Last Allergic Reaction: 04/16/1993"
    },
    {
        name: "Latex",
        reaction: "Rash",
        notes: "Last Allergic Reaction: 12/03/2012"
    },
    {
        name: "Shellfish",
        reaction: "Hives",
        notes: "Last Allergic Reaction: 02/22/1999"
    },
    {
        name: "Pollen",
        reaction: "Sinus Congestion, Nasal Congestion, Sneezing",
        notes: "Last Allergic Reaction: Seasonal"
    }
];

router.get("", async (req, res, next) => {
    try {
        const myAllergies = await Allergies.find({});
        res.json(myAllergies);
    } catch (err) {
        next();
        console.log(err);
    }
});

router.get("/seed", async (req, res, next) => {
    try {
        await Allergies.deleteMany({});
        await Allergies.insertMany(seededData);
        res.redirect("/allergies");
    } catch (err) {
        next();
        console.log(err);
    }
});

router.post("", async (req, res, next) => {
    try {
        const newAllergy = req.body;
        await Allergies.create(req.body);
        res.redirect("/allergies");
    } catch (err) {
        next();
        console.log(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const myAllergy = await Allergies.findById(req.params.id);
        res.json(myAllergy);
    } catch (err) {
        next();
        console.log(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const updatedAllergy = await Allergies.findByIdAndUpdate(req.params.id, req.body);
        res.json(updatedAllergy);
    } catch (err) {
        next();
        console.log(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const deletedAllergy = await Allergies.findByIdAndDelete(req.params.id);
        res.redirect("/allergies");
    } catch (err) {
        next();
        console.log(err);
    }
});

module.exports = router;