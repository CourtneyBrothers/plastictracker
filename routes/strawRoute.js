'use strict';

const { Router } = require('express');
const router = Router();
const { postStraw, getStraws } = require('../controllers/strawCtrl');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}

router.post('/savedplastic', postStraw, isLoggedIn);
router.get('/savedplastic', getStraws);

module.exports = router;