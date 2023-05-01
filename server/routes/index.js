const express = require("express");
const router = express.Router();
const { cityTemp, currTemp } = require("../controller/index");

//Request routes

router.post("/city", cityTemp);

router.post("/", currTemp);

module.exports = router;
