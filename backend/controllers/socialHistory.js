const express = require('express');
const router = express.Router();
const { SocialHistory } = require('../models');

router.get('', async (req, res, next) => {
    try {
        const mySocialHistory = await SocialHistory.find({});
        res.json(mySocialHistory);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const mySocialHistory = await SocialHistory.findById(req.params.id);
        res.json(mySocialHistory);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.post('', async (req, res, next) => {
    try {
        const newSocialHistory = req.body;
        await SocialHistory.create(req.body);
        res.redirect('/socialhistory');
    } catch (err) {
        next();
        console.log(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updatedSocialHistory = await SocialHistory.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/socialhistory/${req.params.id}`);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedSocialHistory = await SocialHistory.findByIdAndDelete(req.params.id);
        res.redirect('/socialhistory');
    } catch (err) {
        next();
        console.log(err);
    }
})

module.exports = router;