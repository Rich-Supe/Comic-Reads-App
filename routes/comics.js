const express = require('express');
const router = express.Router();

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');
const { Comic } = db;
const { check, validationResult } = require('express-validator');

router.use(requireAuth)



router.get('/', asyncHandler(async(req, res) => {
    // console.log("From the JavaScript File I'm reaching here")
    const comics = await Comic.findAll();
    res.render("comics", { comics })
}));



router.get('./:id(\\d+)', asyncHandler(async(req, res) => {

    res.render('(:')
}));

//Stephen - Updating Database///////////////////////////////////////////////////////////////////////////////////////////
// Stephen - I want to find user and then patch "wants to read"
router.patch('./:id(\\d+)', asyncHandler(async(req, res) => {
    const comicId = parseInt(req.params.id, 10);
    //gotta find model root for the "want to read"
    const wantToRead = await user.findByPk(comicId, {
        includes: 'JoinComicToUser'
    });
    console.log(wantToRead)
    if(wantToRead === false){
        await wantToRead.update(true);
    } else {
        await wantToRead.update(false);
    }
}));

// Stephen - I want to find user and then patch "has read"
router.patch('./:id(\\d+)', asyncHandler(async(req, res) => {
    const comicId = parseInt(req.params.id, 10);
    //gotta find model root for the "want to read"
    const hasRead = await user.findByPk(comicId, {
        includes: 'JoinComicToUser'
    });
    console.log(hasRead)
    //figure out what is in the body and updated the has_read
    if(hasRead === false){
        await hasRead.update(true);
    } else {
        await hasRead.update(false);
    }
}));
//End of Stephen//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = router
