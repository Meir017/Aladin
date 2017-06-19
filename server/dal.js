const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://aladin:DvFTu0avWDsvZKcY8HkSTwSVpzUGdL22ISrRTqJURmDS4xyOV2q83nC9yv6MzD07qxb6ZCIu7NqHEWmsjPsQMw==@aladin.documents.azure.com:10255/?ssl=true&poolSize=4');

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