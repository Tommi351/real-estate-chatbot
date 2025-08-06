const express = require('express');
const Router = express.Router();
const { getMessages } = require('../controllers/gptController');

Router.post("/chat", getMessages);

module.exports = Router;