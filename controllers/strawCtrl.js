'use strict';
const passport = require('passport');

module.exports.postStraw = (req, res, next) => {
  const {user_saved_plastic} = req.app.get('models');
    req.body.UserId = req.session.passport.user.id;
    user_saved_plastic.create(req.body).then(saved =>{
      console.log("saved",saved);
    })
    .catch(err=>{
      console.log(err, "error post straw cntrl");
    });
};


module.exports.getStraws = (req, res, next) => {
  const {user_saved_plastic} = req.app.get('models');
  user_saved_plastic.findAndCountAll({
    where: 
      {UserId: req.session.passport.user.id,
        SavedPlasticTypeId: 1
      }
  })
  .then(result => {
    console.log(result.count);
    res.render("dashboard",{result});
  })
}