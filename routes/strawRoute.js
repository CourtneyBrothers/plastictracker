
'use strict';

const { Router } = require('express');
const router = Router();
const { postStraw,countPlastic,countSUP,groupPlasticCount,rawCountSaved,getAllPlastic, allSUPIds,allSavedIds,deleteSavedPlastic } = require('../controllers/strawCtrl');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}

router.post('/savedplastic', postStraw, isLoggedIn);
router.get('/saved/:id',allSavedIds, isLoggedIn);
router.get('/dashboard', rawCountSaved,isLoggedIn);
router.get('/welcome',getAllPlastic,isLoggedIn)
// router.get('/sup/:id',countSUP,isLoggedIn); count query
router.get('/sup/:id',allSUPIds,isLoggedIn);

router.get('/overboard',getAllPlastic,isLoggedIn);
router.delete('/deletesaved/:id',deleteSavedPlastic,isLoggedIn)
module.exports = router;