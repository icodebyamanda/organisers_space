var express = require('express');
var router = express.Router();
const models = require('../models');

// GET all events created
router.get("/", function (req, res) {
	models.Event.findAll()
		.then((data) => res.send(data))
		.catch((error) => {
			res.status(500).send(error);
		});
});

//! POST - create an event per organiser's profile <- private <- TBC

router.post('/:ProfileId', async (req, res) => {
  const {ProfileId} = req.params;
  // const UserId = req.user_id;
  const { title, description, audience_capacity, if_underage, materials_needed, if_free, pricing } = req.body;

  try {

    await models.Event.create({ ProfileId, title, description, audience_capacity, if_underage, materials_needed, if_free, pricing },
      { where: {
        ProfileId
      },
      });
    res.send({ message: ProfileId + " Event created" });

  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//! PUT - update an event per organiser's profile

router.put('/:ProfileId/:id', async (req, res) => {
  const { title, description, audience_capacity, if_underage, materials_needed, if_free, pricing } = req.body;
  const {ProfileId} = req.params;
  // const UserId = req.user_id;
  const {id} = req.params;

  try {
    
    await models.Event.update(
      { title, description, audience_capacity, if_underage, materials_needed, if_free, pricing },
    { where: {
      ProfileId,
      id,
      },
    });

    res.send({ message: "Event updated succesfully!" });
  }
  catch(error) { 
    res.status(500).send(error);
  }
});

//! GET - all events created by one organiser's profile

router.get('/:ProfileId', async (req, res) => {
  const {ProfileId} = req.params;
  // const UserId = req.user_id;
  

  try {

    const events = await models.Event.findAll({ 
      where: {
        ProfileId,
      },
      });
    res.send(events);
    } 
    catch (error) {
      res.status(500).send(error);
    }
  });

//! GET - one event created by one organiser

router.get('/:ProfileId/:id', async (req, res) => {
  const {ProfileId} = req.params;
  // const UserId = req.user_id;
  const {id} = req.params;

  try {

    const event = await models.Event.findAll({ 
      where: {
        ProfileId,
        id,
      },
      });
    res.send(event);
    } 
    catch (error) {
      res.status(500).send(error);
    }
  });

//! Delete - an event per organiser's profile

router.delete('/:ProfileId/:id', async (req, res) => {
  // const id = req.user_id;
  const {ProfileId} = req.params;
  const {id} = req.params;

  try {

  const user = await models.Event.destroy({
    where: {
      ProfileId,
      id,
    },
  });
    res.send({message: id + ' Has been deleted'});
  
  } catch(err) { 
    res.status(500).send(err)};
});


module.exports = router;
