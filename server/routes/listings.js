const express = require('express');
const Router = express.Router();
const { getListings } = require('../controllers/listingsController');

Router.get("/listings", getListings);

module.exports = Router;