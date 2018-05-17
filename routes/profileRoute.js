'use strict';

const { Router } = require('express');
const router = Router();
const{ getUser } = require("../controllers/profilectrl")

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}


router.get("/profile/:id",isLoggedIn,getUser)

module.exports = router;