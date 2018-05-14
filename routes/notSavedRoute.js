'use strict';

const { Router } = require('express');
const router = Router();
const { postSUP,getAllReusePlastic, updateSUP, updateRecycledSUP } = require('../controllers/notSavedCtrl');

router.post('/notsavedplastic', postSUP);
router.post('/reuse/:id',updateSUP)
router.post('/recycle/:id',updateRecycledSUP)
// router.get('/overboard',getAllReusePlastic)


module.exports = router;