const mongoose = require("mongoose");

const allergiesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "You must enter the name of your allergy"]
        },
        reaction: {
            type: String,
            required: [true, "You must enter the reaction to your allergy"]
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

const Allergies = mongoose.model("allergy", allergiesSchema);

module.exports = Allergies;