const mongoose = require('mongoose');

const hospitalizationsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'You must enter the name of the hospital']
        },
        location: {
            type: String
        },
        dates: {
            type: String,
            required: [true, 'You must enter the dates of your hospitaization']
        },
        reason: {
            type: String,
            required: [true, 'You must enter the reason for your hospitaization']
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