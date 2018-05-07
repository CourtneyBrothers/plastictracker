'use strict';

const { Router } = require('express');
const router = Router();
const { postSUP,getAllReusePlastic } = require('../controllers/notSavedCtrl');

router.post('/notsavedplastic', postSUP);
// router.get('/overboard',getAllReusePlastic)


module.exports = router;