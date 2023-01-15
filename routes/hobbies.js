var express = require('express');
var router = express.Router();

// Probably from a DB later.
const allHobbies = ['D&D', 'Programming', 'Web Development', 'Video Games'];

/* GET hobbies page. */
router.get('/', function(req, res, next) {
  res.render('hobbies', {
    title: 'Hobbies',
    subTitle: 'Listing all hobbies.',
    allHobbies: allHobbies
  });
});

module.exports = router;
