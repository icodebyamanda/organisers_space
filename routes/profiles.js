var express = require('express');
var router = express.Router();
const models = require('../models');

//! GET profiles listing
router.get("/", function (req, res) {
	models.Profile.findAll()
		.then((data) => res.send(data))
		.catch((error) => {
			res.status(500).send(error);
		});
});

// POST - create an organiser's profile <- private

router.post('/', async (req, res) => {
  
  const UserId = req.user_id;
  const { description, profile_picture, video } = req.body;

  try {

    await models.Profile.create({ UserId, description, profile_picture, video });
    res.send({ message: UserId + "Profile created" });

  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// GET - an organiser's profile <- admin


// PUT - update an organiser's profile <- private


// POST - create organiser's keywords <- private


// DELETE - an organiser's profile <- private and admin


module.exports = router;
