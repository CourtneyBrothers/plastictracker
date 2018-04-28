'use strict';
const passport = require('passport');

module.exports.notSavedSUP = (req, res, next) => {
  const {user_reuse_this_plastic} = req.app.get('models');
    req.body.UserId = req.session.passport.user.id;
    user_reuse_this_plastic.create(req.body).then(saved =>{
      console.log("saved",saved);
    })
    .catch(err=>{
      console.log(err, "error post not saved straw cntrl");
    });
};