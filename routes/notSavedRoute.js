'use strict';

const { Router } = require('express');
const router = Router();
const { postSUP } = require('../controllers/notSavedCtrl');

router.post('/notsavedplastic', postSUP);


module.exports = router;