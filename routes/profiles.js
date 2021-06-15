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

//! POST - create an organiser's profile <- TBC <- private

router.post('/:UserId', async (req, res) => {
  const {UserId} = req.params;
  // const UserId = req.user_id;
  const { description, profile_picture, video, profile_name } = req.body;

  try {

    await models.Profile.create({ UserId, description, profile_picture, video, profile_name },
      { where: {
        UserId,
      },
      });
    res.send({ message: UserId + " Profile created" });

  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});


//FOR FUTURE -> route to create several organisers' profile from one user / need refactoring
//GET - all profiles from an organiser <- admin <- TBC

router.get('/:UserId', async (req, res) => {
  const {UserId} = req.params;
  // const UserId = req.user_id;
  

  try {

    const profiles = await models.Profile.findAll({ 
      where: {
        UserId,
      },
      });
    res.send(profiles);
    } 
    catch (error) {
      res.status(500).send(error);
    }
  });



  // GET - One profile from an organiser <- admin <- TBC

  // router.get('/:UserId', async (req, res) => {
  //   const {UserId} = req.params;
  //   // const UserId = req.user_id;
    

  //   try {

  //     const profile = await models.Profile.findOne({ 
  //       where: {
  //         UserId,
  //       },
  //       });
  //     res.send(profile);
  //     } 
  //     catch (error) {
  //       res.status(500).send(error);
  //     }
  //   });

// PUT - update an organiser's profile <- private


// POST - create organiser's keywords <- private


// DELETE - an organiser's profile <- private and admin



module.exports = router;
