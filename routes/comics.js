const express = require('express');
const router = express.Router();

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');
const { Comics } = db;
const { check, validationResult } = require('express-validator'); 
const { requireAuth } = require("../auth");

router.use(requireAuth)



router.get('/', asyncHandler(async(req, res) => {
    const comics = await Comics.findAll();
  
    res.render("comics", { comics })
}));

router.get('./:id(\\d+)', asyncHandler(async(req, res) => {
    
    res.render('(:')
}));



module.exports = router