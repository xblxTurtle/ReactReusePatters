const express = require('express');
const app = express();
const htmlTemplate = require('./htmlTemplate.js');
const path = require('path');

app.use((req, resp, next) => {
    console.log('received request to: ', req.originalUrl); 
    next();
});

app.use(express.static(path.join(__dirname,'..','assets')));

app.get('/', (req, resp) => {
    resp
        .status(200)
        .send(
            htmlTemplate()
        );
});

module.exports = {
    app
};

