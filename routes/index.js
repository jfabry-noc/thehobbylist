var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    subTitle: 'Find your next one!'
  });
});

module.exports = router;
