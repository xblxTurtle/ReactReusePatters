const http = require('http');
const app = require('./serverRouter.js').app;
const port = require('./constants.js').port;

http.createServer(app).listen({port}, () => {
    console.log('Listening on port: ', port);
});

