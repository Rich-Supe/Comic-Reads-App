const express = require('express');
const { asyncHandler } = require('./utils');
const db = require('../db/models');
const { requireAuth } = require('../auth');
const { Review } = db;
const { check, validationResult } = require('express-validator');

const router = express.Router();

router.use(requireAuth);




router.post('/comics/:comicId(\\d+)', asyncHandler( async(req, res) => {
    const { token } = req
    const { id } = jwt.decode(token).data

    const comicId = parseInt(req.params.comicId, 10)
    const review = req.body.review
    const comment = await Review.create({ review, userId: id, comicId: comicId });

    const comments = await Review.findAll({
        where: {
            comicId: comicId
        }
    })

    res.status(201).json({ comment, comments })
}))

module.exports = router;
