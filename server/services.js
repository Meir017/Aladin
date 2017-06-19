module.exports = {
    getRequest,
    createRequest,
    searchRequests,
    completeRequest
};

const { AladinRequest } = require('./dal');

async function getRequest(requestId) {
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

async function completeRequest(requestId, userId) {
    const result = await AladinRequest.findByIdAndUpdate(requestId, { completed: true });

    return extractRequestFromResult(result);
}

function extractRequestFromResult(result) {
    result._doc.requestId = result._doc._id;
    delete result._doc._id;
    delete result._doc.__v;

    return result._doc;
}