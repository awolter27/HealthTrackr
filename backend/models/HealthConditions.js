const mongoose = require('mongoose');

const healthConditions = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'You must enter the name of your health condition']
        },
        current: {
            type: Boolean,
            default: true,
            required: [true, 'You must enter the status of your health condition']
        },
        past: {
            type: Boolean,
            default: false
        },
        ageOfDiagnosis: {
            type: number
        },
        symptoms: {
            type: String,
            required: [true, 'You must enter the symptoms of your health condition']
        },
        notes: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const HealthConditions = mongoose.model('healthCondition', healthConditionsSchema);

module.exports = HealthConditions;