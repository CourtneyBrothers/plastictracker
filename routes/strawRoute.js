'use strict';

const { Router } = require('express');
const router = Router();
const {displayStraws, postStraw} = require('../controllers/strawCtrl');

router.get('/lastStraw', displayStraws);
router.post('/lastStraw', postStraw);