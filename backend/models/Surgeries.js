const mongoose = require('mongoose');

const surgeriesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'You must enter the name of your procedure or surgery']
        },
        location: {
            type: String
        },
        date: {
            type: Date,
            required: [true, 'You must enter the date of your procedure or surgery']
        },
        surgeon: {
            type: String
        },
        reason: {
            type: String,
            required: [true, 'You must enter the reason for your procedure or surgery']
        },
        notes: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const Surgeries = mongoose.model('surgery', surgeriesSchema);

module.exports = Surgeries;