const mongoose = require('mongoose');

const careTeamSchema = new mongoose.Schema(
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
            type: String,
            default: "N/A"
        },
        phoneNumber: {
            type: String,
            default: "N/A"
        },
        email: {
            type: String,
            default: "N/A"
        },
        lastAppointment: {
            type: String,
            default: "N/A"
        },
        nextAppointment: {
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

const CareTeam = mongoose.model('careTeam', careTeamSchema);

module.exports = CareTeam;