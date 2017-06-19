module.exports = {
    getRequest,
    createRequest,
    searchRequests,
    searchRequestsByTags,
    completeRequest
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

async function createRequest(request) {
    request.completed = false;

    const result = await AladinRequest.insertMany([request]);

    return { requestId: result[0]._id };
}

async function searchRequests(query) {
    query.completed = false;

    const results = await AladinRequest.find(query);

    return results.map(extractRequestFromResult);
}

function searchRequestsByTags(tags) {
    return searchRequests({
        'requestBody.tags': {
            $elemMatch: {
                $in: tags
            }
        }
    });
}

async function completeRequest(requestId, userId) {
    const update = {
        completedByUser: userId,
        completed: true
    };
    const result = await AladinRequest.findByIdAndUpdate(requestId, update);

    return extractRequestFromResult(result);
}

function extractRequestFromResult(result) {
    if (!result) {
        return null;
    }
    result._doc.requestId = result._doc._id;
    delete result._doc._id;
    delete result._doc.__v;

    return result._doc;
}