import * as restify from 'restify';

const server = restify.createServer({name: 'aladeen', version: '1.0.0'})

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.listen(process.env.PORT || 3000, function () {
  console.log(`${server.name} listening at ${server.url}`);
});