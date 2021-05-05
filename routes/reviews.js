const express = require('express');
const { asyncHandler } = require('./utils');
const db = require('../db/models');
const { requireAuth } = require('../auth');
const { Review, User } = db;
const { check } = require('express-validator');
const router = express.Router();
router.use(requireAuth);

const handleValidationErrors = (req, res, next) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      const errors = validationErrors.array().map((error) => error.msg);

      const err = Error("Bad request.");
      err.status = 400;
      err.title = "Bad request.";
      err.errors = errors;
      return next(err);
    }
    next();
};


router.get(
    '/comics/:id(\\d+)',
    asyncHandler(async (req, res) => {
      const review = await Review.findAll({
        include: [{ model: User, as: "user", attributes: ["emailAddress"] }],
        order: [["DESC"]],
        attributes: ["review"],
      });
      res.json({ review });
    })
  );

const reviewNotFoundError = (id) => {
const err = Error("Review not found");
err.errors = [`Review with id of ${id} could not be found.`];
err.title = "Review not found.";
err.status = 404;
return err;
};

const validateReview = [
check("review")
    .exists({ checkFalsy: true })
    .withMessage("Review can't be empty."),
//  message cannot be longer than 280 characters:
check("review")
    .isLength({ max: 280 })
    .withMessage("Review can't be longer than 280 characters."),
handleValidationErrors,
];

router.get(
"/comics/:id(\\d+)",
asyncHandler(async (req, res, next) => {
    const review = await Review.findOne({
    where: {
        id: req.params.id,
    },
    });
    if (review) {
    res.json({ review });
    } else {
    next(reviewNotFoundError(req.params.id));
    }
})
);

router.post(
"/comics/:id(\\d+)",
validateReview,
asyncHandler(async (req, res) => {
    const { review } = req.body;
    const reviewMessage = await Tweet.create({ review, userId: req.user.id });
    res.json({ reviewMessage });
})
);

router.put(
"/comics/:id(\\d+)",
validateReview,
asyncHandler(async (req, res, next) => {
    const review = await Review.findOne({
    where: {
        id: req.params.id,
    },
    });
    if (req.user.id !== review.userId) {
    const err = new Error("Unauthorized");
    err.status = 401;
    err.message = "You are not authorized to edit this review.";
    err.title = "Unauthorized";
    throw err;
    }
    if (review) {
    await review.update({ review: req.body.review });
    res.json({ review });
    } else {
    next(reviewNotFoundError(req.params.id));
    }
})
);

router.delete(
    "/comics/:id(\\d+)",
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
        res.json({ message: `Deleted review with id of ${req.params.id}.` });
      } else {
        next(reviewNotFoundError(req.params.id));
      }
    })
  );


// // add rating
router.put('/comics/:id(\\d+)', asyncHandler(async(req, res, next) => {
    const rating = await Comic.findByPk({
        where: {
            id: req.params.id
        },
    });
    if (rating) {
     await rating.update({ rating: req.body.rating });
     res.json({ rating });
    }
}));

// const { token } = req
// const { id } = jwt.decode(token).data
// const comicId = parseInt(req.params.comicId, 10)

// // view reviews
// router.get( '/comics/:id(\\d+)', asyncHandler(async (req, res) => {
//     const reviews = await Review.findAll({
//         where: {
//             comicId: comicId
//         },
//     });
//     res.json({ reviews });
//     })
// );

// // post new comment
// router.post('/comics/:id(\\d+)', asyncHandler( async(req, res) => {
//     const review = req.body.review
//     const comment = await Review.create({ review, userId: id, comicId: comicId });
//     const comments = await Review.findAll({
//         where: {
//             comicId: comicId
//         }
//     });
//     res.status(201).json({ comment, comments })
// }));

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
