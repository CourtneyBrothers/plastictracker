'use strict';

const { Router } = require('express');
const router = Router();
const { postStraw } = require('../controllers/strawCtrl');

router.post('/savedplastic', postStraw);

module.exports = router;