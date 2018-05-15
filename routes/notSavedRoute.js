'use strict';

const { Router } = require('express');
const router = Router();
const { postSUP,getAllReusePlastic, updateSUP, updateRecycledSUP, deletePlastic } = require('../controllers/notSavedCtrl');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}

router.post('/notsavedplastic', postSUP,isLoggedIn);
router.post('/reuse/:id',updateSUP,isLoggedIn);
router.post('/recycle/:id',updateRecycledSUP,isLoggedIn);
router.delete('/delete/:id',deletePlastic,isLoggedIn);
// router.get('/overboard',getAllReusePlastic)


module.exports = router;