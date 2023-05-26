const mongoose = require('mongoose');

const socialHistorySchema = new mongoose.Schema(
    {
        education: {
            location: {
                type: String,
                default: "N/A"
            },
            degree: {
                type: String,
                default: "N/A"
            },
            startDate: {
                type: String,
                default: "N/A"
            },
            endDate: {
                type: String,
                default: "N/A"
            }
        },
        occupation: {
            title: {
                type: String,
                default: "N/A"
            },
            employer: {
                type: String,
                default: "N/A"
            },
            startDate: {
                type: String,
                default: "N/A"
            },
            endDate: {
                type: String,
                default: "N/A"
            }
        },
        maritalStatus: {
            type: String,
            default: "N/A"
        },
        children: {
            type: Number,
            default: 0
        },
        diet: {
            type: String,
            default: "N/A"
        },
        exercise: {
            type: {
                type: String,
                default: "N/A"
            },
            duration: {
                type: Number,
                default: 0
            },
            frequency: {
                type: Number,
                default: 0
            }
        },
        sleep: {
            type: Number,
            default: 0
        },
        tobacco: {
            current: {
                type: String,
                default: "N/A"
            },
            past: {
                type: String,
                default: "N/A"
            },
            type: {
                type: String,
                default: "N/A"
            },
            amount: {
                type: Number,
                default: 0
            },
            startDate: {
                type: String,
                default: "N/A"
            },
            quitDate: {
                type: String,
                default: "N/A"
            }
        },
        alcohol: {
            current: {
                type: String,
                default: "N/A"
            },
            past: {
                type: String,
                default: "N/A"
            },
            type: {
                type: String,
                default: "N/A"
            },
            amount: {
                type: Number,
                default: 0
            },
            startDate: {
                type: String,
                default: "N/A"
            },
            quitDate: {
                type: String,
                default: "N/A"
            }
        },
        substances: {
            current: {
                type: String,
                default: "N/A"
            },
            past: {
                type: String,
                default: "N/A"
            },
            type: {
                type: String,
                default: "N/A"
            },
            route: {
                type: String,
                default: "N/A"
            },
            amount: {
                type: Number,
                default: "N/A"
            },
            startDate: {
                type: String,
                default: "N/A"
            },
            quitDate: {
                type: String,
                default: "N/A"
            }
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

const SocialHistory = mongoose.model('socialHistory', socialHistorySchema);

module.exports = SocialHistory;