var express = require('express');
var router = express.Router();

/* GET events listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a event');
});

module.exports = router;
