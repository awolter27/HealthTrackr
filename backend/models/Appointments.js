const mongoose = require('mongoose');

const appointmentsSchema = new mongoose.Schema(
    {
        nameOfAppointment: {
            type: String,
            required: [true, 'You must enter the name of your appointment']
        },
        title: {
            type: String,
            required: [true, 'You must enter the title of your healthcare provider']
        },
        nameOfProvider: {
            type: String,
            required: [true, 'You must enter the name of the provider you are seeing during your appointment']
        },
        specialty: {
            type: String,
            default: "N/A"
        },
        address: {
            type: String,
            required: [true, 'You must enter the address of your appointment']
        },
        date: {
            type: String,
            required: [true, 'You must enter the date of your appointment']
        },
        time: {
            type: String,
            required: [true, 'You must enter the time of your appointment']
        },
        reason: {
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

const Appointments = mongoose.model('appointment', appointmentsSchema);

module.exports = Appointments;