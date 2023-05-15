const mongoose = require('mongoose');

const familyHistory = new mongoose.Schema(
    {
        relationship: {
            type: String,
            required: [true, 'You must enter the relationship to your family member']
        },
        healthCondition: {
            type: String,
            required: [true, 'You must enter the health condition of your family member']
        },
        ageOfDiagnosis: {
            type: String
        },
        living: {
            type: Boolean,
            default: true
        },
        age: {
            type: number
        },
        deceased: {
            type: Boolean,
            default: false
        },
        ageAtDeath: {
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

const FamilyHistory = mongoose.model('familyHistory', familyHistorySchema);

module.exports = FamilyHistory;