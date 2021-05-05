const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const User = require('../db/models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'a/A Express Skeleton Home', User });
});


module.exports = router;
