const mongoose = require('mongoose');

const healthConditions = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'You must enter the name of your health condition']
        },
        current: {
            type: Boolean,
            default: true
        },
        past: {
            type: Boolean,
            default: false
        },
        ageOfDiagnosis: {
            type: number
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