const mongoose = require('mongoose');

const careTeam = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'You must enter the title of your healthcare provider']
        },
        name: {
            type: String,
            required: [true, 'You must enter the name of your healthcare provider']
        },
        specialty: {
            type: String,
            required: [true, 'You must enter the specialty of your healthcare provider']
        },
        address: {
            type: String
        },
        phoneNumber: {
            type: String
        },
        email: {
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

const CareTeam = mongoose.model('careTeam', careTeamSchema);

module.exports = CareTeam;