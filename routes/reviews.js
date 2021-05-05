const express = require('express');
const { asyncHandler } = require('./utils');
const db = require('../db/models');
const { requireAuth } = require('../auth');
const { Review, User } = db;
// const { check } = require('express-validator');
const router = express.Router();
router.use(requireAuth);

const { token } = req
const { id } = jwt.decode(token).data
const comicId = parseInt(req.params.comicId, 10)

// view reviews
router.get( '/comics/:id(\\d+)', asyncHandler(async (req, res) => {
    const reviews = await Review.findAll({
        where: {
            comicId: comicId
        },
    });
    res.json({ reviews });
    })
);

// post new comment
router.post('/comics/:id(\\d+)', asyncHandler( async(req, res) => {
    const review = req.body.review
    const comment = await Review.create({ review, userId: id, comicId: comicId });
    const comments = await Review.findAll({
        where: {
            comicId: comicId
        }
    });
    res.status(201).json({ comment, comments })
}));

// edit review comment
router.put('/comics/:id(\\d+)', asyncHandler(async(req, res, next) => {
    const review = await Review.findOne({
        where: {
            comicId: comicId
        },
    });
    if (review) {
     await review.update({ review: req.body.review });
     res.json({ review });
    }
}));


// delete thingamajiggy(comment hopefully)
router.delete('/comics/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const review = await Review.findOne({
        where: {
            comicId: comicId
        }
    });
    if (review) {
        await review.destroy();
        res.json({ review: `Deleted comment with id of ${req.params.id}`});
    }
}));


// add rating
router.put('/comics/:id(\\d+)', asyncHandler(async(req, res, next) => {
    const rating = await Comic.findByPk({
        where: {
            comicId: comicId
        },
        include: [Review.rating],
    });
    if (review) {
     await review.update({ review: req.body.review });
     res.json({ review });
    }
}));



module.exports = router;
