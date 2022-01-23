const mongoose = require("mongoose");

const measureSchema = mongoose.Schema({
    siteUrl: {
        type: String,
        required: true
    },
    ttfb: {
        type: Number
    },
    fcp: {
        type: Number
    },
    domLoad: {
        type: Number
    },
    windowLoad: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Measures', measureSchema);