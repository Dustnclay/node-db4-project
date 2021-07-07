const express = require('express');

const recipeRouter = require('./recipeRouter');

const server = express();

server.use(express.json());
server.use('/recipe', recipeRouter);

module.exports = server;