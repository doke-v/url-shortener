const express = require('express');
const cors = require('cors');
const isURL = require('./helpers/is-url');
const shortid = require('shortid');
const path = require('path');
const router = express.Router();

router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(express.static(path.resolve(__dirname, './public')));

const db = [];

router.post('/new', (req, res) => {
  const original_url = req.body.url;
  const valid = isURL(original_url);

  if (!valid) {
    return res.status(400).json({ error: 'invalid URL' });
  } else {
    const obj = { original_url, short_url: shortid.generate() };
    db.push(obj);
    res.json(obj);
  }
});

router.get('/:url', (req, res) => {
  const shorturl = req.params.url;
  const obj = db.find(el => el.short_url == shorturl);
  return obj
    ? res.redirect(obj.original_url)
    : res.json({ error: 'url not found' });
});

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

module.exports = router;
