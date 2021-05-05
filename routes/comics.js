const express = require('express');
const router = express.Router();

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');
const { Comic, User, Review } = db;
const { check, validationResult } = require('express-validator');

router.use(requireAuth)



router.get('/', asyncHandler(async(req, res) => {
    const comics = await Comic.findAll();
    res.render("comics", { comics })
}));

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const id = parseInt(req.params.id, 10);
    const comic = await Comic.findByPk(id);
    const reviews = await Review.findAll( {where: {comicId: id}})
    console.log(reviews)
    res.render('comic', { comic, reviews })
}));

//Stephen - Updating Database///////////////////////////////////////////////////////////////////////////////////////////
// Stephen - I want to find user and then patch "wants to read"
router.patch('/:id(\\d+)', asyncHandler(async(req, res) => {
    const comicId = parseInt(req.params.id, 10);
    //gotta find model root for the "want to read"
    const wantToRead = await user.findByPk(comicId, {
        includes: 'JoinComicToUser'
    });
    if(wantToRead === false){
        await wantToRead.update(true);
    } else {
        await wantToRead.update(false);
    }
}));

// Stephen - I want to find user and then patch "has read"
router.patch('/', asyncHandler(async(req, res) => {
    const { targetInfo }  = req.body
    console.log(targetInfo)
    // if(targetInfo === "hasRead"){
    //     await hasRead.update(true);
    // } else {
    //     await hasRead.update(false);
    // }
    // if(targetInfo === "wantToRead"){
    //     await wantToRead.update(true);
    // } else {
    //     await wantToRead.update(false);
    // }
    if(targetInfo === "btn1234"){
        console.log("Back End: I will update the database" )
    }
    res.json({ targetInfo });
}));

module.exports = router
