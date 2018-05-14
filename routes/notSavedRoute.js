'use strict';

const { Router } = require('express');
const router = Router();
const { postSUP,getAllReusePlastic, updateSUP } = require('../controllers/notSavedCtrl');

router.post('/notsavedplastic', postSUP);
router.post('/reuse/:id',updateSUP)
// router.get('/overboard',getAllReusePlastic)


module.exports = router;