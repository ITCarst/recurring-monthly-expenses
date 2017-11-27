'use strict';

const path = require('path');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser');

const { ExpensesAppSchema } = require('./graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

const app = express();

app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
	.use(bodyParser.json({ limit: '10mb' }))
	.use((err, req, res, next) => res.status(500).send(err.message))
  .use(express.static(path.join(__dirname, '../dist')))
  .use('/expenses',
      graphqlHTTP({
        schema: ExpensesAppSchema,
        graphiql: true
      })
  )
  .get('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')))

module.exports = app;
