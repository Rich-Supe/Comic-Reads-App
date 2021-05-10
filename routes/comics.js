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
    let currUser = req.session.auth.userId
    const statusABC = await Collection.findAll({where:{userId:currUser}});
    let status = {}
    statusABC.forEach(el =>{
        status[el.id]=el.dataValues
    })

    res.render("comics", { comics, status })
}));

router.post('/search', (req, res, next) => {
    const {selectedGenre} = req.body;
    const results = Comic.findAll({where: {genre: selectedGenre}});
    res.render('results', {results});
  });

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const id = parseInt(req.params.id, 10);
    const comic = await Comic.findByPk(id);
    const reviews = await Review.findAll( {where: {comicId: id}})
    let currUser = req.session.auth.userId
    const statusABC = await Collection.findAll({where:{userId:currUser}});
    let status = {}
    statusABC.forEach(el =>{
        status[el.id]=el.dataValues
    })

    res.render('comic', { comic, reviews, status })
}));

//Stephen - Updating Database///////////////////////////////////////////////////////////////////////////////////////////
// router.patch('/:id(\\d+)', asyncHandler(async(req, res) => {
//     const comicId = parseInt(req.params.id, 10);
//     //gotta find model root for the "want to read"
//     let currUser = req.session.auth.userId
//     const { targetInfo, bookId, hasRead, wantToRead }  = req.body //targetInfo is the className
//     await Collection.create({ hasRead:hasRead, wantsToRead:wantToRead, comicId:comicId, userId:currUser });
//     res.json({"post":"success"});
// }));

router.post('/', asyncHandler(async(req, res) => {
    let currUser = req.session.auth.userId
    const { bookId, hasRead, wantsToRead }  = req.body
    const collection = await Collection.findOne({where:{comicId:bookId,userId:currUser}});
    if(collection === null){
        await Collection.create({ hasRead:hasRead, wantsToRead:wantsToRead, comicId:bookId, userId:currUser });
        res.json({"post":"success"});
    } else {
        res.json({"post":"exists"});
    }
}));

router.patch('/', asyncHandler(async(req, res) => {
    let currUser = req.session.auth.userId
    const { bookId, hasRead, wantsToRead }  = req.body
    const collection = await Collection.findOne({where:{comicId:bookId,userId:currUser}});
    await collection.update({ hasRead:hasRead, wantsToRead:wantsToRead });
    res.json({"patch":"success"});
}));


router.post(
    "/:id(\\d+)/review",
    asyncHandler(async (req, res) => {
        const { commentArea } = req.body;
        await Review.create({ review: commentArea, userId: res.locals.user.id, comicId: req.params.id });
        res.redirect(`/comics/${req.params.id}`);
    })
);


module.exports = router
