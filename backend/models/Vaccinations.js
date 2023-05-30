const mongoose = require("mongoose");

const vaccinationsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "You must enter the name of your vaccination"]
        },
        manufacturer: {
            type: String,
            default: "N/A"
        },
        lotNumber: {
            type: String,
            default: "N/A"
        },
        date: {
            type: String,
            required: [true, "You must enter the date you recieved your vaccination"]
        },
        notes: {
            type: String,
            default: "Notes"
        }
    },
    {
        timestamps: true
    }
);

const Vaccinations = mongoose.model("vaccination", vaccinationsSchema);

module.exports = Vaccinations;