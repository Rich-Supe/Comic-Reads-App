const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')
const {User, Comic} = db

/* GET home page. */
router.get('/', async (req, res, next) => {
  const comics = await Comic.findAll();
  let titles = [];
  let authors = [];
  let genres = [];
  comics.forEach(comic => {
    if(!titles.includes(comic.title)) {
      titles.push([comic.title, comic.id]);
    }
  })
  comics.forEach(comic => {
    if(!authors.includes(comic.author)) {
      authors.push(comic.author);
    }
  })
  comics.forEach(comic => {
    if(!genres.includes(comic.genre)) {
      genres.push(comic.genre);
    }
  })
  res.render('index', { title: 'Comic Reads', User, titles, authors, genres });
});

module.exports = router;
