var express = require('express');
var router = express.Router();
var models = require('../models');


/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a user');
});

module.exports = router;
