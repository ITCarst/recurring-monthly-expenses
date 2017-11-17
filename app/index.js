'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');

const app = express();

app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use((err, req, res, next) => res.status(500).send(err.message));

app.get('/', (req, res) => {
    res.send('Hello Static!')
});

module.exports = app;
