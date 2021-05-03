const express = require('express');
const router = express.Router();

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');
const { check, validationResult } = require('express-validator'); 




router.get('/comics', asyncHandler(async(req, res) => {
    
    res.render(":)")
}));

router.get('./comics/:id(\\d+)', asyncHandler(async(req, res) => {

    res.render('(:')
}));

module.exports = router