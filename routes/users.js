var express = require('express');
var router = express.Router();
const models = require('../models');
// const { sequelize } = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const supersecret = process.env.SUPER_SECRET;
//const userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");

//! GET users listing
router.get("/", function (req, res) {
	models.User.findAll()
		.then((data) => res.send(data))
		.catch((error) => {
			res.status(500).send(error);
		});
});

//! POST Register a user

router.post('/register', async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {

    await models.User.create({ firstname, lastname, email, password });
    res.send({ message: "Register successful" });

  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//! POST - Log a user

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await models.User.findOne({ where: { email } });

    if (user) {
      const user_id = user.id;
      const correctPassword = await bcrypt.compare(password, user.password);
      if (!correctPassword) throw new Error("Incorrect password");
      var token = jwt.sign({ user_id }, supersecret);

      res.send({ message: "Login successful, here is your token", token });
    } else {
      throw new Error("User does not exist");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//! GET user's settings' profile // TBC for token <- guard

router.get('/settings/:id', async (req, res) => {
  // const id = req.user_id;
  const {id} = req.params;

  try {
    const user = await models.User.findOne({
        where: {
          id,
        },
      });
    res.send(user);
    } 
    catch (error) {
      res.status(500).send(error);
    }
  });


//! PUT - Update user's data (Private route only - no password reset) <- Guard

  router.put('/settings/:id', async (req, res) => {
    const {firstname, lastname, email, password} = req.body;
    //const id = req.user_id;
    const {id} = req.params;

    try {
      const hash = await bcrypt.hash(password, saltRounds);
      await models.User.update(
        { firstname, lastname, email, password : hash },
      { where: {
          id,
        },
      });

      res.send({ message: "user updated succesfully!" });
    }
    catch(error) { 
      res.status(500).send(error);
    }
  });


//! DELETE a user -> guard

router.delete('/settings/:id', async (req, res) => {
  // const id = req.user_id;
  const {id} = req.params;

  try {

  const user = await models.User.destroy({
    where: {
      id,
    },
    include: models.Profile,
  });
    res.send({message:'User deleted'});
  
  } catch(err) { 
    res.status(500).send(err)};
});

module.exports = router;
