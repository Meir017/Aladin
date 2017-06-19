module.exports = {
    getRequest,
    getRequests,
    createRequest,
    searchRequests,
    searchRequestsByTags,
    getRequestsByUserId,
    completeRequest,
    rateRequest,
    addRequestReply
};

const { AladinRequest } = require('./dal');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


async function getRequest(requestId) {
    if (!ObjectId.isValid(requestId)) {
        return null;
    }

    const result = await AladinRequest.findOne({ _id: requestId });

    return extractRequestFromResult(result);
}

async function getRequests() {
    const results = await AladinRequest.find({});

    return results.map(extractRequestFromResult);
}

async function createRequest(request) {
    request.completed = false;
    request.created = request.updated = new Date();

    const result = await AladinRequest.insertMany([request]);

    return { requestId: result[0]._id };
}

async function searchRequests(query) {
    const results = await AladinRequest.find(query);

    return results.map(extractRequestFromResult);
}

function searchRequestsByTags(tags) {
    return searchRequests({
        'requestBody.tags': {
            $elemMatch: {
                $in: tags
            }
        },
        completed: false
    });
}

function getRequestsByUserId(userId) {
    return searchRequests({ userId });
}

async function completeRequest(requestId, userId) {
    const update = {
        completedByUser: userId,
        completed: true,
        updated: new Date()
    };
    const result = await AladinRequest.findByIdAndUpdate(requestId, update);

    return extractRequestFromResult(result);
}

async function rateRequest() {}
async function addRequestReply(requestId, reply) {
    if (!ObjectId.isValid(requestId)) {
        return null;
    }

    reply.created = new Date();

    const update = {
        $push: {
            replies: reply
        }
    };

    const result = await AladinRequest.findByIdAndUpdate(requestId, update);

    return extractRequestFromResult(result);
}

function extractRequestFromResult(result) {
    if (!result) {
        return null;
    }
    result._doc.requestId = result._doc._id;
    result._doc.user = {
        id: result._doc.userId,
        rating: Math.floor(Math.random() * 100)
    }
    delete result._doc._id;
    delete result._doc.__v;
    delete result._doc.userId;
    result._doc.replies.forEach(reply => {
        reply._doc.user = {
            id: reply.userId,
            rating: Math.floor(Math.random() * 100)
        };
        delete reply._doc.userId;
        delete reply._doc._id;
    });

    return result._doc;
}