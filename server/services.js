module.exports = {
    getRequest,
    createRequest,
    searchRequests
};

function getRequest(requestId) {
    return {
        userId: "aladin1",
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
                userId: "aladin2",
                date: new Date()
            },
            {
                text: "I can bake for you",
                userId: "aladin3",
                date: new Date()
            }
        ]
    }
}

function createRequest(request) {
    return {
        requestId: "aladinId"
    };
}

function searchRequests(query) {
    return [{
            userId: "aladin1",
            requestId: "requestId1",
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
                    userId: "aladin2",
                    date: new Date()
                },
                {
                    text: "I can bake for you",
                    userId: "aladin3",
                    date: new Date()
                }
            ]
        },
        {
            userId: "aladin4",
            requestId: "requestId2",
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
                    userId: "aladin5",
                    date: new Date()
                },
                {
                    text: "I can bake for you",
                    userId: "aladin6",
                    date: new Date()
                }
            ]
        }
    ]
}