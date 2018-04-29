
'use strict';

const { Router } = require('express');
const router = Router();
const { postStraw, getStraws, getCupLid,getStrawsStraw, getSUPstats  } = require('../controllers/strawCtrl');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}

router.post('/savedplastic', postStraw, isLoggedIn);
router.get('/saved/:id',getStraws, isLoggedIn);
router.get('/stats',getStrawsStraw);
router.get('/supstats', getSUPstats);

module.exports = router;