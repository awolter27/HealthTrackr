const mongoose = require('mongoose');

const socialHistorySchema = new mongoose.Schema(
    {
        education: {
            location: {
                type: String
            },
            degree: {
                type: String
            },
            startDate: {
                type: String
            },
            endDate: {
                type: String
            }
        },
        occupation: {
            title: {
                type: String
            },
            employer: {
                type: String
            },
            startDate: {
                type: String
            },
            endDate: {
                type: String
            }
        },
        maritalStatus: {
            type: String
        },
        children: {
            type: Number
        },
        diet: {
            type: String
        },
        exercise: {
            type: {
                type: String
            },
            duration: {
                type: Number
            },
            frequency: {
                type: Number
            }
        },
        sleep: {
            type: Number
        },
        tobacco: {
            current: {
                type: String
            },
            past: {
                type: String
            },
            type: {
                type: String
            },
            amount: {
                type: Number
            },
            startDate: {
                type: String
            },
            quitDate: {
                type: String
            }
        },
        alcohol: {
            current: {
                type: String
            },
            past: {
                type: String
            },
            type: {
                type: String
            },
            amount: {
                type: Number
            },
            startDate: {
                type: String
            },
            quitDate: {
                type: String
            }
        },
        substances: {
            current: {
                type: String
            },
            past: {
                type: String
            },
            type: {
                type: String
            },
            route: {
                type: String
            },
            amount: {
                type: Number
            },
            startDate: {
                type: String
            },
            quitDate: {
                type: String
            }
        },
        notes: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const SocialHistory = mongoose.model('socialHistory', socialHistorySchema);

module.exports = SocialHistory;