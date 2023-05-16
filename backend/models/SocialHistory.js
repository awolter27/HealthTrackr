const mongoose = require('mongoose');

const socialHistorySchema = new mongoose.Schema(
    {
        education: [{
            location: {
                type: String
            },
            degree: {
                type: String
            },
            startDate: {
                type: Date
            },
            endDate: {
                type: Date
            }
        }],
        occupation: [{
            title: {
                type: String
            },
            employer: {
                type: String
            },
            startDate: {
                type: Date
            },
            endDate: {
                type: Date
            }
        }],
        maritalStatus: {
            type: String
        },
        children: {
            type: Number
        },
        diet: {
            type: String
        },
        exercise: [{
            type: {
                type: String
            },
            duration: {
                type: Number
            },
            frequency: {
                type: Number
            }
        }],
        sleep: {
            type: Number
        },
        tobacco: [{
            current: {
                type: Boolean
            },
            past: {
                type: Boolean
            },
            type: {
                type: String
            },
            amount: {
                type: Number
            },
            startDate: {
                type: Date
            },
            quitDate: {
                type: Date
            }
        }],
        alcohol: [{
            current: {
                type: Boolean
            },
            past: {
                type: Boolean
            },
            type: {
                type: String
            },
            amount: {
                type: Number
            },
            startDate: {
                type: Date
            },
            quitDate: {
                type: Date
            }
        }],
        substance: [{
            current: {
                type: Boolean
            },
            past: {
                type: Boolean
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
                type: Date
            },
            quitDate: {
                type: Date
            }
        }],
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