const mongoose = require('mongoose');

const medicationsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'You must enter the name of your medication']
        },
        dose: {
            type: Number,
            required: [true, 'You must enter the dose of your medication']
        },
        unitOfMeasurement: {
            type: String,
            required: [true, 'You must enter the unit of measurement of your medication']
        },
        route: {
            type: String,
            required: [true, 'You must enter the route of your medication']
        },
        frequency: {
            type: String,
            required: [true, 'You must enter the frequency of your medication']
        },
        reason: {
            type: String
        },
        notes: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const Medications = mongoose.model('medication', medicationsSchema);

module.exports = Medications;