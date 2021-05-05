const express = require('express');
const router = express.Router();

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');
const { Comic, User, Review, Collection} = db;
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
    let currUser = req.session.auth.userId
    const { targetInfo, bookId, hasRead, wantToRead }  = req.body //targetInfo is the className
    await Collection.create({ hasRead:hasRead, wantsToRead:wantToRead, comicId:comicId, userId:currUser });
    res.json({"post":"success"});

}));

// Stephen - I want to find user and then patch "has read"
router.post('/', asyncHandler(async(req, res) => {
    let currUser = req.session.auth.userId
    const { targetInfo, bookId, hasRead, wantToRead }  = req.body //targetInfo is the className
    bookId = parseInt(bookId)
    await Collection.create({ hasRead:hasRead, wantsToRead:wantToRead, comicId:bookId, userId:currUser });
    res.json({"post":"success"});

}));

module.exports = router
