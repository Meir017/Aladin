const restify = require('restify');
const routes = require('./routes.js');

const app = restify.createServer({ name: 'aladeen', version: '1.0.0' })

app.use(restify.acceptParser(app.acceptable));
app.use(restify.queryParser());
app.use(restify.bodyParser());

restify.CORS.ALLOW_HEADERS.push('Accept-Encoding');
restify.CORS.ALLOW_HEADERS.push('Accept-Language');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", restify.CORS.ALLOW_HEADERS.join(", "));
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    next();
});
app.opts(/\.*/, (req, res, next) => {
    res.end();
})

routes(app);

app.listen(process.env.PORT || 3000, () => {
    console.log(`${app.name} listening at ${app.url}`);
});