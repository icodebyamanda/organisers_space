var express = require('express');
var router = express.Router();

/* GET profiles listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a profile');
});

module.exports = router;
