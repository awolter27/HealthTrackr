const mongoose = require('mongoose');

const hospitalizations = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'You must enter the name of the hospital']
        },
        location: {
            type: String
        },
        reason: {
            type: String,
            required: [true, 'You must enter the reason of your hospitaization']
        },
        date: {
            type: Date,
            required: [true, 'You must enter the dates of your hospitaization']
        },
        notes: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const Hospitalizations = mongoose.model('hospitalization', hospitalizationsSchema);

module.exports = Hospitalizations;