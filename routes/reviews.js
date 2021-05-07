const express = require('express');
const { asyncHandler } = require('./utils');
const db = require('../db/models');
const { requireAuth } = require('../auth');
const { Review, User, Comic } = db;
const { check } = require('express-validator');
const router = express.Router();
router.use(requireAuth);


//post review
router.post(
    "/:id(\\d+)/review",
    asyncHandler(async (req, res) => {
        const { commentArea } = req.body;
        await Review.create({ review: commentArea, userId: res.locals.user.id, comicId: req.params.id});
        res.redirect(`/comics/${req.params.id}`);
    })
);

// router.get("/:id(\\d+)/review/:id(\\d+)", asyncHandler(async(req, res) => {
//     const reviewId = parseInt(req.params.id, 10)
//     const review = await db.Review.findByPk(reviewId);
// }))


// render edit-page
router.post(
    "/reviews/:id(\\d+)/edit/",
    asyncHandler(async (req, res) => {
        let comicId = req.params.id;
        let reviewId = req.body.reviewId;
        res.redirect(`/comics/${comicId}/reviews/${reviewId}/edit`);
    })
);

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
    console.log(req.body);
    await targetReview.update({ review: editCommentArea, userId: res.locals.user.id, comicId: comicId});
    res.redirect(`/comics/${comicId}`);
}));



//   router.put(
//     "/:id(\\d+)/edit/:id(\\d+)",
//     asyncHandler(async (req, res, next) => {
//       const review = await Review.findOne({
//         where: {
//           id: req.params.id,
//         },
//       });
//       if (req.user.id !== review.userId) {
//         const err = new Error("Unauthorized");
//         err.status = 401;
//         err.message = "You are not authorized to edit this review.";
//         err.title = "Unauthorized";
//         throw err;
//       }
//       if (review) {
//         await review.update({ review: req.body.review });
//         res.redirect(`/comics/${req.params.id}`);
//       }
//     // else {
//     //     next(tweetNotFoundError(req.params.id));
//     //   }
//     })
//   );

  //delete review
  router.delete(
    "/:id",
    asyncHandler(async (req, res, next) => {
      const review = await Review.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (req.user.id !== review.userId) {
        const err = new Error("Unauthorized");
        err.status = 401;
        err.message = "You are not authorized to delete this review.";
        err.title = "Unauthorized";
        throw err;
      }
      if (review) {
        await review.destroy();
        res.redirect(`/comics/${req.params.id}`);
      }
    //   else {
    //     next(tweetNotFoundError(req.params.id));
    //   }
    })
  );



module.exports = router;
