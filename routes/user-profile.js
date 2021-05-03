const express = require('express');
const router = express.Router();

const db = require('../db/models');

router.get('/:id(\\d+)', (req, res) => {
    
    res.render('hello')
})


module.exports = router