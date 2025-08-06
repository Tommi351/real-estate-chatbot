const listings = require("../data/listings.json");

exports.getListings = (req, res) => {
    res.json(listings);
}