const mongoose = require('mongoose');

const healthConditions = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'You must enter the name of your health condition']
        },
        currentOrPast: [{
            current: {
                type: Boolean
            },
            past: {
                type: Boolean
            }
        }],
        ageOfDiagnosis: {
            type: Number
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