const express = require('express');
const router = express.Router();
const db = require('../db/models');

router.get('/:id(\\d+)', (req, res) => {
    console.log("I LOST THE GAME")
    // res.render('user-profile')
})


module.exports = router