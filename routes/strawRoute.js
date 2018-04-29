
'use strict';

const { Router } = require('express');
const router = Router();
const { postStraw, getStraws, getCupLid,getStrawsStraw  } = require('../controllers/strawCtrl');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}

router.post('/savedplastic', postStraw, isLoggedIn);
router.get('/savedplastic',getStraws, getCupLid);
router.get('/straws',getStrawsStraw);

module.exports = router;