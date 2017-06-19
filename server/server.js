const restify = require('restify');
const routes = require('./routes.js');

const server = restify.createServer({ name: 'aladeen', version: '1.0.0' })

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

routes(server);

server.listen(process.env.PORT || 3000, () => {
    console.log(`${server.name} listening at ${server.url}`);
});