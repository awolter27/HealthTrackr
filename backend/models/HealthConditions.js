const mongoose = require('mongoose');

const healthConditionsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'You must enter the name of your health condition']
        },
        currentOrPast: {
            current: {
                type: String
            },
            past: {
                type: String
            }
        },
        ageOfDiagnosis: {
            type: Number
        },
        symptoms: {
            type: String
        },
        treatment: {
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

const HealthConditions = mongoose.model('healthCondition', healthConditionsSchema);

module.exports = HealthConditions;