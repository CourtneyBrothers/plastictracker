'use strict';

const { Router } = require('express');
const router = Router();
const { postStraw } = require('../controllers/strawCtrl');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}

router.post('/savedplastic', postStraw, isLoggedIn);

module.exports = router;