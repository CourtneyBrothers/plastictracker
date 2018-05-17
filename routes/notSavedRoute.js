'use strict';

const { Router } = require('express');
const router = Router();
const { postSUP,getAllPlastic, updateSUP, updateRecycledSUP, deletePlastic,getAllSUP } = require('../controllers/notSavedCtrl');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}

router.post('/notsavedplastic', postSUP,isLoggedIn);
router.post('/reuse/:id',updateSUP,isLoggedIn);
router.post('/recycle/:id',updateRecycledSUP,isLoggedIn);
router.delete('/delete/:id',deletePlastic,isLoggedIn);
// router.get('/all',getAllPlastic,isLoggedIn)
router.get('/supdashboard',getAllSUP,isLoggedIn)


module.exports = router;