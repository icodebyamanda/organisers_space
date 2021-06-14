var express = require('express');
var router = express.Router();

/* GET keywords listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a keyword');
});

module.exports = router;
