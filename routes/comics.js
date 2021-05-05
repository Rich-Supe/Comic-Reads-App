const express = require('express');
const router = express.Router();

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');
const { Comic, User , Collection} = db;
const { check, validationResult } = require('express-validator');

router.use(requireAuth)



router.get('/', asyncHandler(async(req, res) => {
    const comics = await Comic.findAll();
    res.render("comics", { comics })
}));

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const comicId = parseInt(req.params.id, 10);
    const comics = await Comic.findByPk(comicId);
    res.render('comic', { comics })
}));

//Stephen - Updating Database///////////////////////////////////////////////////////////////////////////////////////////
// Stephen - I want to find user and then patch "wants to read"
router.patch('/:id(\\d+)', asyncHandler(async(req, res) => {
    const comicId = parseInt(req.params.id, 10);
    //gotta find model root for the "want to read"
    const Read = await Comic.findByPk(comicId, {
        includes: 'Collection'
    });
    console.log(WantToRead)
    if(wantToRead === false){
        await Read.update(true);
    }
    else if(wantToRead === true) {
        await Read.update(false);
    }
    else if(hasRead === false){
        await Read.update(true);
    }
    else if(hasRead === true){
        await wantToRead.update(false);
    }
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
