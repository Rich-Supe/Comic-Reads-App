const express = require('express');
const { asyncHandler } = require('./utils');
const db = require('../db/models');
const { requireAuth } = require('../auth');
const { Review, User, Comic } = db;
const { check } = require('express-validator');
const router = express.Router();
router.use(requireAuth);


////////////////////////////////////////////////////////////////////////////////////////
//CREATE
////////////////////////////////////////////////////////////////////////////////////////
//post review
router.post(
    "/:id(\\d+)/review",
    asyncHandler(async (req, res) => {
        const { commentArea } = req.body;
        await Review.create({ review: commentArea, userId: res.locals.user.id, comicId: req.params.id});
        res.redirect(`/comics/${req.params.id}`);
    })
);



////////////////////////////////////////////////////////////////////////////////////////
//EDIT
////////////////////////////////////////////////////////////////////////////////////////

router.post(
    "/reviews/:id(\\d+)/edit/",
    asyncHandler(async (req, res) => {
        let comicId = req.params.id;
        let reviewId = req.body.reviewId;
        res.redirect(`/comics/${comicId}/reviews/${reviewId}/edit`);
    })
);
// render edit-page
router.get('/comics/:comicId(\\d+)/reviews/:reviewId(\\d+)/edit', asyncHandler(async (req, res) => {
    const targetReview = await Review.findByPk(req.params.reviewId);
    res.render(`review-edit.pug`, {targetReview});
}))

// post edit
router.post('/comics/:comicId(\\d+)/reviews/:reviewId(\\d+)/edit', asyncHandler(async (req, res) => {
    let comicId = parseInt(req.params.comicId, 10);
    let reviewId = parseInt(req.params.reviewId, 10);
    const targetReview = await Review.findByPk(reviewId);

    const {editCommentArea} = req.body;
    await targetReview.update({ review: editCommentArea, userId: res.locals.user.id, comicId: comicId});
    res.redirect(`/comics/${comicId}`);
}));

////////////////////////////////////////////////////////////////////////////////////////
//DESTROY
////////////////////////////////////////////////////////////////////////////////////////
router.post(
  "/reviews/:id(\\d+)/delete/",
  asyncHandler(async (req, res) => {
      let comicId = req.params.id;
      let reviewId = req.body.reviewId;
      res.redirect(`/comics/${comicId}/reviews/${reviewId}/delete`);
  })
);
router.post('/comics/:comicId(\\d+)/reviews/:reviewId(\\d+)/delete',
  asyncHandler(async (req, res) => {
    let comicId = parseInt(req.params.comicId, 10);
    let reviewId = parseInt(req.params.reviewId, 10);
    const targetReview = await Review.findByPk(reviewId);
    await targetReview.destroy();
    res.redirect(`/comics/${comicId}`);
  }));

 //get delete
router.get('/comics/:comicId(\\d+)/reviews/:reviewId(\\d+)/delete',
asyncHandler(async (req, res) => {
  const targetReview = await Review.findByPk(req.params.reviewId);
  res.render('review-delete.pug', {targetReview});
}));


module.exports = router;
