'use strict';

const { Router } = require('express');
const router = Router();
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}

