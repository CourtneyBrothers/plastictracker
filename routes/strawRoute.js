
'use strict';

const { Router } = require('express');
const router = Router();
const { postStraw,countPlastic,countSUP,groupPlasticCount,rawCountSaved, allSUPIds,allSavedIds,deleteSavedPlastic,postSaved } = require('../controllers/strawCtrl');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}

router.post('/savedplastic', postStraw, isLoggedIn);
router.post('/savedClick/:id',postSaved,isLoggedIn)

router.get('/saved/:id',allSavedIds, isLoggedIn);

router.get('/dashboard', rawCountSaved,isLoggedIn);
router.get('/sup/:id',allSUPIds,isLoggedIn);
router.delete('/deletesaved/:id',deleteSavedPlastic,isLoggedIn)
module.exports = router;