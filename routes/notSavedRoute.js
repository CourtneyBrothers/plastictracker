'use strict';

const { Router } = require('express');
const router = Router();
const { notSavedSUP } = require('../controllers/notSavedCtrl');

router.post('/notsavedplastic', notSavedSUP);

module.exports = router;