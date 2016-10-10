const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  res.redirect('/shops')
});

router.get('/login', function (req, res, next) {
  res.render('login')
})

module.exports = router;
