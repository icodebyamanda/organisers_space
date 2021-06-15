var express = require('express');
var router = express.Router();
const models = require('../models');
// const { sequelize } = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// const bcrypt = require("bcrypt");
// const saltRounds = 10;
// const supersecret = process.env.SUPER_SECRET;
//const userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");

/* GET users listing. */
router.get("/", function (req, res) {
	models.User.findAll()
		.then((data) => res.send(data))
		.catch((error) => {
			res.status(500).send(error);
		});
});

// POST Register a user

router.post("/register", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {

    await models.User.create({ firstname, lastname, email, password });

    res.send({ message: "Register successful" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});


// Log a user

// Get user's settings profile


// Update user's data (Private route only - no password reset)

// Delete a user

module.exports = router;
