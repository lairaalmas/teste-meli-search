const express = require("express");
const router = express.Router();

const { getSearchedItems, getProductDetails } = require("./items.controllers");

router.get("/items", getSearchedItems);

router.get("/items/:id", getProductDetails);

module.exports = router;
