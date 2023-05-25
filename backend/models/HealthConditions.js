const mongoose = require('mongoose');

const healthConditionsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'You must enter the name of your health condition']
        },
        currentOrPast: {
            current: {
                type: String,
                default: "N/A"
            },
            past: {
                type: String,
                default: "N/A"
            }
        },
        ageOfDiagnosis: {
            type: Number,
            default: "N/A"
        },
        symptoms: {
            type: String,
            default: "N/A"
        },
        treatment: {
            type: String,
            default: "N/A"
        },
        notes: {
            type: String,
            default: "None"
        }
    },
    {
        timestamps: true
    }
);

const HealthConditions = mongoose.model('healthCondition', healthConditionsSchema);

module.exports = HealthConditions;