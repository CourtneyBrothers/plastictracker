'use strict';
const passport = require('passport');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('plastictracker', null, null, {
  dialect: 'postgres'
});

module.exports.postSUP= (req, res, next) => {
  const {
    user_reuse_this_plastic
  } = req.app.get('models');
  let reqObj = req.body;
  reqObj.UserId = req.session.passport.user.id;
  let quantity = +req.body.quantity;
  let id = +req.body.ReuseThisPlasticId;
  return new Promise((resolve,reject) => {
    //post plastic type from quantity input 
      for (let i = 0; i < quantity; i++) {
        user_reuse_this_plastic.create(reqObj)
          .then(saved => {
            resolve("done")
          })
          .catch(err => {
            console.log("error w iteration");
          })
      }
    }).then(() => {
      res.redirect(`/sup/${id}`);
    })
    .catch(err => {
      console.log(err, "error post straw cntrl");
    })
}

