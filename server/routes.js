"use strict";
const services = require('./services.js');

function routes(server) {

    server.post('/request', createRequest);
    server.get('/request/:requestId', getRequest);
    server.post('/request/_search', searchRequests);
    server.post('/request/_search/tags', searchRequestsByTags);
    server.get('/request/user/:userId', getRequestsByUserId);

    server.post('/request/:requestId/complete', completeRequest);

    server.get('postman-collection', getPostmanCollection);
}

async function createRequest(req, res, next) {
    const body = req.body;

    const response = await services.createRequest(body);

    res.json(200, response);
}

async function getRequest(req, res, next) {
    const requestId = req.params.requestId;

    const response = await services.getRequest(requestId);

    res.json(200, response);
}

async function searchRequests(req, res, next) {
    const query = req.body.query;

    const response = await services.searchRequests(query);

    res.json(200, response);
}
async function searchRequestsByTags(req, res, next) {
    const tags = req.body;

    const response = await services.searchRequestsByTags(tags);

    res.json(200, response);
}

async function getRequestsByUserId(req, res, next) {
    const userId = req.params.userId;

    const response = await services.getRequestsByUserId(userId);

    res.json(200, response);
}

async function completeRequest(req, res, next) {
    const requestId = req.params.requestId;
    const userId = req.body.userId;

    const response = await services.completeRequest(requestId, userId);

    res.status(204);
}

function getPostmanCollection(req, res, next) {
    const postmanCollection = require('./postman-collection.json');

    res.json(200, postmanCollection);
}

module.exports = routes;