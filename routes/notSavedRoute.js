'use strict';

const { Router } = require('express');
const router = Router();
const { notSavedSUP, getSUPStraws } = require('../controllers/notSavedCtrl');

router.post('/notsavedplastic', notSavedSUP);
router.get('/supstraws', getSUPStraws);

module.exports = router;