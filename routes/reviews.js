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


//edit review
router.post(
    "/:id(\\d+)/edit/",
    asyncHandler(async (req, res) => {
        let comicId = Comic.findOne({where:{comicId}})
        const targetReview = Review.findByPk(editBtn.id);
        const { commentArea } = req.body;
        await targetReview.update({ review: commentArea, userId: res.locals.user.id, comicId: req.params.id });
        res.render(`review-edit.pug`);
    })
);


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
