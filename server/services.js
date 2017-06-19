module.exports = {
    getRequest,
    createRequest
};

function getRequest(requestId) {
    return {
        userId: 16,
        requestId: requestId,
        requestBody: {
            text: "can you help me?",
            tags: ["tag1", "tag2"]
        },
        suggestions: [{
            text: "aladeen",
            tags: ["tag3", "tag4"]
        }],
        replies: [{
                text: "I can cook for you",
                userId: 19,
                date: new Date()
            },
            {
                text: "I can bake for you",
                userId: 19,
                date: new Date()
            }
        ]
    }
}

function createRequest(request) {
    return {
        requestId: 6
    };
}