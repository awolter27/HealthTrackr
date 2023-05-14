const mongoose = require('mongoose');

const allergiesSchema = new mongoose.Schema(
    {

    },
    {
        timestamps: true
    }
);

const Allergies = mongoose.model('allergy', allergiesSchema);

module.exports = Books;