const mongoose = require('mongoose');

const medications = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'You must enter the name of the medication']
        },
        doseAmount: {
            type: Number,
            required: [true, 'You must enter the dose of the medication']
        },
        doseUnitOfMeasurement: {
            type: String,
            required: [true, 'You must enter the unit of measurement of the medication']
        },
        route: {
            type: String,
            required: [true, 'You must enter the route of the medication']
        },
        frequency: {
            type: String,
            required: [true, 'You must enter the frequency of the medication']
        },
        reason: {
            type: String,
            required: [true, 'You must enter the reason for the medication']
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