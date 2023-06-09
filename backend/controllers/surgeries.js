const express = require("express");
const router = express.Router();
const { Surgeries } = require("../models");

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
];

router.get("", async (req, res, next) => {
    try {
        const mySurgeries = await Surgeries.find({});
        res.json(mySurgeries);
    } catch (err) {
        next();
        console.log(err);
    }
});

router.get("/seed", async (req, res, next) => {
    try {
        await Surgeries.deleteMany({});
        await Surgeries.insertMany(seededData);
        res.redirect("/surgeries");
    } catch (err) {
        next();
        console.log(err);
    }
});

router.post("", async (req, res, next) => {
    try {
        const newSurgery = req.body;
        await Surgeries.create(req.body);
        res.redirect("/surgeries");
    } catch (err) {
        next();
        console.log(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const mySurgery = await Surgeries.findById(req.params.id);
        res.json(mySurgery);
    } catch (err) {
        next();
        console.log(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const updatedSurgery = await Surgeries.findByIdAndUpdate(req.params.id, req.body);
        res.json(updatedSurgery);
    } catch (err) {
        next();
        console.log(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const deletedSurgery = await Surgeries.findByIdAndDelete(req.params.id);
        res.json(deletedSurgery);
    } catch (err) {
        next();
        console.log(err);
    }
});

module.exports = router;