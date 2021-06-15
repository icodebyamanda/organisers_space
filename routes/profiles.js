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

//! GET - all profiles from an organiser <- admin <- TBC

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

  router.get('/:UserId/:id', async (req, res) => {
    const {UserId} = req.params;
    // const UserId = req.user_id;
    const {id} = req.params;
  
    try {
  
      const profile = await models.Profile.findAll({ 
        where: {
          UserId,
          id,
        },
        });
      res.send(profile);
      } 
      catch (error) {
        res.status(500).send(error);
      }
    });
  

//! PUT - update an organiser's profile <- private


router.put('/:UserId/:id', async (req, res) => {
  const { description, profile_picture, video, profile_name } = req.body;
  const {UserId} = req.params;
  // const UserId = req.user_id;
  const {id} = req.params;

  try {
    
    await models.Profile.update(
      { description, profile_picture, video, profile_name },
    { where: {
      UserId,
      id,
      },
    });

    res.send({ message: "profile updated succesfully!" });
  }
  catch(error) { 
    res.status(500).send(error);
  }
});


// POST - create organiser's keywords <- private


//! DELETE - an organiser's profile <- private and admin

router.delete('/:UserId/:id', async (req, res) => {
  // const id = req.user_id;
  const {UserId} = req.params;
  const {id} = req.params;

  try {

  const user = await models.Profile.destroy({
    where: {
      UserId,
      id,
    },
    include: models.Event,
  });
    res.send({message: id + ' Has been deleted'});
  
  } catch(err) { 
    res.status(500).send(err)};
});


module.exports = router;
