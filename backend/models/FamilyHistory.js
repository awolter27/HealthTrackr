const mongoose = require('mongoose');

const familyHistorySchema = new mongoose.Schema(
    {
        relationship: {
            type: String,
            required: [true, 'You must enter the relationship to your family member']
        },
        living: {
            living: {
                type: String,
                default: "N/A"
            },
            age: {
                type: Number,
                default: "N/A"
            }
        },
        deceased: {
            deceased: {
                type: String,
                default: "N/A"
            },
            ageAtDeath: {
                type: Number,
                default: "N/A"
            }
        },
        healthCondition: {
            type: String,
            required: [true, 'You must enter the health condition of your family member']
        },
        ageOfDiagnosis: {
            type: Number,
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

const FamilyHistory = mongoose.model('familyHistory', familyHistorySchema);

module.exports = FamilyHistory;