const express = require("express");

const db = require("../data/dbConfig.js");
const accountRouter= require('../accounts/account-router');

const server = express();

server.use(express.json());
server.use('/accounts', accountRouter);

server.get('/', (req, res) => {
    res.send(`<h2> DB 1 Project !</h2>`);
  });

module.exports = server;