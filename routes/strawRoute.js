
'use strict';

const { Router } = require('express');
const router = Router();
const { postStraw,countPlastic,countSUP,groupPlasticCount,rawCountSaved,getAllPlastic  } = require('../controllers/strawCtrl');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}

router.post('/savedplastic', postStraw, isLoggedIn);
router.get('/saved/:id',countPlastic, isLoggedIn);
router.get('/dashboard', rawCountSaved);
router.get('/sup/:id',countSUP,isLoggedIn);
router.get('/overboard',getAllPlastic);
module.exports = router;