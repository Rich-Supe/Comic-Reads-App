const express = require('express');
const { asyncHandler } = require('./utils');
const db = require('../db/models');
const { requireAuth } = require('../auth');
const { Review, User, Comic } = db;
const { check } = require('express-validator');
const router = express.Router();
router.use(requireAuth);

// const handleValidationErrors = (req, res, next) => {
//     const validationErrors = validationResult(req);

//     if (!validationErrors.isEmpty()) {
//       const errors = validationErrors.array().map((error) => error.msg);

//       const err = Error("Bad request.");
//       err.status = 400;
//       err.title = "Bad request.";
//       err.errors = errors;
//       return next(err);
//     }
//     next();
// };

// const reviewNotFoundError = (id) => {
// const err = Error("Review not found");
// err.errors = [`Review with id of ${id} could not be found.`];
// err.title = "Review not found.";
// err.status = 404;
// return err;
// };

// const validateReview = [
// check("review")
//     .exists({ checkFalsy: true })
//     .withMessage("Review can't be empty."),
// //  message cannot be longer than 280 characters:
// check("review")
//     .isLength({ max: 280 })
//     .withMessage("Review can't be longer than 280 characters."),
// handleValidationErrors,
// ];

// router.get(
// "/comics/:id(\\d+)",
// asyncHandler(async (req, res, next) => {
//     const review = await Review.findOne({
//     where: {
//         id: req.params.id,
//     },
//     });
//     if (review) {
//     res.json({ review });
//     } else {
//     next(reviewNotFoundError(req.params.id));
//     }
// })
// );

// router.post(
//   "/:id(\\d+)/review",
//   asyncHandler(async (req, res) => {
//       const { commentArea } = req.body;
//       await Review.create({ review: commentArea, userId: res.locals.user.id, comicId: req.params.id });
//       res.redirect(`/comics/${req.params.id}`);
//   })
// );

// router.put(
// "/comics/:id(\\d+)",
// validateReview,
// asyncHandler(async (req, res, next) => {
//     const review = await Review.findOne({
//     where: {
//         id: req.params.id,
//     },
//     });
//     if (req.user.id !== review.userId) {
//     const err = new Error("Unauthorized");
//     err.status = 401;
//     err.message = "You are not authorized to edit this review.";
//     err.title = "Unauthorized";
//     throw err;
//     }
//     if (review) {
//     await review.update({ review: req.body.review });
//     res.json({ review });
//     } else {
//     next(reviewNotFoundError(req.params.id));
//     }
// })
// );

// router.delete(
//     "/comics/:id(\\d+)",
//     asyncHandler(async (req, res, next) => {
//       const review = await Review.findOne({
//         where: {
//           id: req.params.id,
//         },
//       });
//       if (req.user.id !== review.userId) {
//         const err = new Error("Unauthorized");
//         err.status = 401;
//         err.message = "You are not authorized to delete this review.";
//         err.title = "Unauthorized";
//         throw err;
//       }
//       if (review) {
//         await review.destroy();
//         res.json({ message: `Deleted review with id of ${req.params.id}.` });
//       } else {
//         next(reviewNotFoundError(req.params.id));
//       }
//     })
//   );

// post new comment


// // edit review comment
// router.put('/comics/:id(\\d+)', asyncHandler(async(req, res, next) => {
//     const review = await Review.findOne({
//         where: {
//             comicId: comicId
//         },
//     });
//     if (review) {
//      await review.update({ review: req.body.review });
//      res.json({ review });
//     }
// }));


// // delete thingamajiggy(comment hopefully)
// router.delete('/comics/:id(\\d+)', asyncHandler(async (req, res, next) => {
//     const review = await Review.findOne({
//         where: {
//             comicId: comicId
//         }
//     });
//     if (review) {
//         await review.destroy();
//         res.json({ review: `Deleted comment with id of ${req.params.id}`});
//     }
// }));


module.exports = router;
