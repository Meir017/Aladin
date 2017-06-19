/// <reference types="restify" />
"use strict";

const services = require('./services.js');

/**
 * @param { Server } server
 */
function routes(server) {
    server.post('/request', createRequest);
    server.get('/request/:requestId', getRequest);

    server.get('postman-collection', getPostmanCollection);
}

function createRequest(req, res, next) {
    const body = req.body;

    const response = services.createRequest(body);

    res.json(200, response);
}

function getRequest(req, res, next) {
    const requestId = req.params.requestId;

    const response = services.getRequest(requestId);

    res.json(200, response);
}

function getPostmanCollection(req, res, next) {
    const postmanCollection = require('./postman-collection.json');

    res.json(200, postmanCollection);
}

module.exports = routes;