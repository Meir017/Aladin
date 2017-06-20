const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://52.232.117.146:27017/aladin');

const aladinRequests = new Schema({
    userId: String,
    requestId: String,
    completed: Boolean,
    requestBody: {
        text: String,
        tags: [String]
    },
    suggestions: [{
        text: String,
        tags: [String]
    }],
    replies: [{
        text: String,
        tags: [String],
        userId: String,
        created: Date
    }],
    created: Date,
    updated: Date
});

const AladinRequest = mongoose.model('aladin_requests', aladinRequests);

module.exports = {
    AladinRequest
};