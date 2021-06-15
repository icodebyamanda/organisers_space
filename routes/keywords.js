var express = require('express');
var router = express.Router();
const models = require('../models');

// GET keywords listing
router.get("/", function (req, res) {
	models.Keyword.findAll()
		.then((data) => res.send(data))
		.catch((error) => {
			res.status(500).send(error);
		});
});

//! POST - create a keyword for ONE organiser's profile

router.post('/:ProfileId', async (req, res) => {
  const {ProfileId} = req.params;
  // const UserId = req.user_id;
  const { word } = req.body;

  try {

    await models.Keyword.create({ ProfileId, word },
      { where: {
        ProfileId,
      },
      });
    res.send({ message: ProfileId + " Keyword created" });

  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//! PUT - Update a keyword for ONE organiser's profile

router.put('/:ProfileId/:id', async (req, res) => {
  const {ProfileId} = req.params;
  const {id} = req.params;
  // const UserId = req.user_id;
  const { word } = req.body;

  try {

    await models.Keyword.update({ ProfileId, id, word },
      { where: {
        ProfileId,
        id,
      },
      });
    res.send({ message: ProfileId + " Keyword updated" });

  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});


//! GET - all keywords for ONE organiser's profile

router.get('/:ProfileId', async (req, res) => {
  const {ProfileId} = req.params;
  // const UserId = req.user_id;

  try {

    const list = await models.Keyword.findAll({ 
      where: {
        ProfileId,
      },
      });
    res.send(list);

  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});


//! DELETE - a keyword for organiser's profile

router.delete('/:ProfileId/:id', async (req, res) => {
  // const id = req.user_id;
  const {ProfileId} = req.params;
  const {id} = req.params;

  try {

  const word = await models.Keyword.destroy({
    where: {
      ProfileId,
      id,
    },
  });
    res.send({message: id + ' Has been deleted'});
  
  } catch(err) { 
    res.status(500).send(err)};
});

// POST - create a keyword for ONE event's presentation


// BUG here: if an EventId exists but the ProfileId isn't a match to EventId it will post - which is an issue

// But if no EventId exists, but a ProfileId does, it will not print

// If params don't include :ProfileId, due to association, EventId will be null and ProfileId would take EventId's param

router.post('/:ProfileId/:EventId/', async (req, res) => {
  
  const {ProfileId} = req.params;
  const {EventId} = req.params;

  // const UserId = req.user_id;
  const { word } = req.body;
  

  try {

    await models.Keyword.create({ ProfileId, EventId, word },
        { where: {
          ProfileId,
          EventId,
        },
        });
      res.send({ message: `${ProfileId} + ${EventId} " Keyword created"` });

  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});


// PUT - Update a keyword for ONE event's presentation

// GET - all keywords for ONE event's presentation

// GET - all keywords for ALL event's presentation

// DELETE - a keyword for event's profile

// GET - All duplicates between eventId and ProfileId

module.exports = router;
