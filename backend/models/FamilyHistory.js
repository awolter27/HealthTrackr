const mongoose = require('mongoose');

const familyHistorySchema = new mongoose.Schema(
    {
        relationship: {
            type: String,
            required: [true, 'You must enter the relationship to your family member']
        },
        living: {
            living: {
                type: Boolean
            },
            age: {
                type: Number
            }
        },
        deceased: {
            deceased: {
                type: Boolean
            },
            ageAtDeath: {
                type: Number
            }
        },
        healthCondition: {
            type: String,
            required: [true, 'You must enter the health condition of your family member']
        },
        ageOfDiagnosis: {
            type: Number
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