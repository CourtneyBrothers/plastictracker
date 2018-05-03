
'use strict';

const { Router } = require('express');
const router = Router();
const { postStraw,countPlastic,countSUP,groupPlasticCount  } = require('../controllers/strawCtrl');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}

router.post('/savedplastic', postStraw, isLoggedIn);
router.get('/saved/:id',countPlastic, isLoggedIn);
// router.get('/stats');
router.get('/dashboard', groupPlasticCount);
router.get('/sup/:id',countSUP,isLoggedIn);
module.exports = router;