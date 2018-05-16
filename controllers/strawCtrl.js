'use strict';
const passport = require('passport');

module.exports.postStraw = (req, res, next) => {
  const {
    user_saved_plastic,sequelize
  } = req.app.get('models');
  let reqObj = req.body;
  reqObj.UserId = req.session.passport.user.id;
  let quantity = +req.body.quantity;
  let id = +req.body.SavedPlasticTypeId;
  let promiseArray = [];
  for (let i = 0; i < quantity; i++) {
    promiseArray.push(user_saved_plastic.create(reqObj))
  }
  Promise.all(promiseArray).then(saved => {
      res.redirect(`/saved/${id}`)
    })
    .catch(err => {
      console.log(err, "err w iteration")
    })
}

module.exports.countPlastic = (req, res, next) => {
  const {
   sequelize
  } = req.app.get('models');
  sequelize.query(`SELECT user_saved_plastics."SavedPlasticTypeId",saved_plastic_types.label, COUNT (saved_plastic_types.label) AS quantity FROM user_saved_plastics INNER JOIN saved_plastic_types ON user_saved_plastics."SavedPlasticTypeId"=saved_plastic_types.id WHERE user_saved_plastics."UserId"=${req.session.passport.user.id} AND user_saved_plastics."SavedPlasticTypeId"=${req.params.id} GROUP BY user_saved_plastics."SavedPlasticTypeId",saved_plastic_types.label`)
  .then(result => {
    console.log("result0", result[0], "result0")
    res.render(`plasticDetail${req.params.id}`, {
      result
    })
  })
}

module.exports.countSUP = (req,res,next)=>{
  const {
    sequelize
   } = req.app.get('models');
  sequelize.query(`SELECT user_reuse_this_plastics."ReuseThisPlasticId",reuse_this_plastic_type.label, COUNT (reuse_this_plastic_type.label) AS quantity FROM user_reuse_this_plastics INNER JOIN reuse_this_plastic_type ON user_reuse_this_plastics."ReuseThisPlasticId"=reuse_this_plastic_type.id WHERE user_reuse_this_plastics."UserId"=${req.session.passport.user.id} AND user_reuse_this_plastics."ReuseThisPlasticId"=${req.params.id} GROUP BY user_reuse_this_plastics."ReuseThisPlasticId",reuse_this_plastic_type.label`)
  .then(result => {
    console.log("result0", result[0], "result0")
    res.render(`supDetail${req.params.id}`, {
      result
    })
  })
}


module.exports.rawCountSaved = (req, res, next) => {
    const {
      user_saved_plastic, sequelize
    } = req.app.get('models');
    sequelize.query(`select user_saved_plastics."SavedPlasticTypeId",saved_plastic_types.label, COUNT (saved_plastic_types.label) AS quantity FROM user_saved_plastics INNER JOIN saved_plastic_types ON user_saved_plastics."SavedPlasticTypeId"=saved_plastic_types.id WHERE user_saved_plastics."UserId"=${req.session.passport.user.id} GROUP BY user_saved_plastics."SavedPlasticTypeId",saved_plastic_types.label   `)
      .then(result => {
        console.log("result0", result[0], "result0")
        res.render("dashboard", {
          result
        })
      })
  }




  // select all line Ids and labels for plastic Id for each SUP Detail page
  module.exports.allSUPIds = (req,res,next)=>{
  const {
      sequelize
     } = req.app.get('models');
    sequelize.query(`SELECT user_reuse_this_plastics."id", user_reuse_this_plastics."ReuseThisPlasticId", user_reuse_this_plastics."singleUse", reuse_this_plastic_type.label FROM user_reuse_this_plastics INNER JOIN reuse_this_plastic_type ON user_reuse_this_plastics."ReuseThisPlasticId"=reuse_this_plastic_type.id WHERE user_reuse_this_plastics."UserId"=${req.session.passport.user.id} AND user_reuse_this_plastics."ReuseThisPlasticId"=${req.params.id}  `)
    .then(result => {
      console.log("result0", result[0], "result0")
      res.render(`supDetail${req.params.id}`, {
        result
      })
    })
    .catch(err =>{
      res.render(`404_error_template`)
    })
  }
  //select all line ids for each saved detail page to render
  module.exports.allSavedIds = (req,res,next)=>{
    const {
      sequelize
     } = req.app.get('models');
    sequelize.query(`SELECT user_saved_plastics."id", user_saved_plastics."SavedPlasticTypeId", saved_plastic_types.label FROM user_saved_plastics INNER JOIN saved_plastic_types ON user_saved_plastics."SavedPlasticTypeId"=saved_plastic_types.id WHERE user_saved_plastics."UserId"=${req.session.passport.user.id} AND user_saved_plastics."SavedPlasticTypeId"=${req.params.id}  `)
    .then(result => {
      console.log("result0", result[0], "result0")
      res.render(`plasticDetail${req.params.id}`, {
        result
      })
    })
  }

  module.exports.deleteSavedPlastic = (req, res, next) => {
    console.log("delete")
    const {
      user_saved_plastic,sequelize
    } = req.app.get('models');
    user_saved_plastic.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(sup => {
        sup.destroy({
            where: {
              id: req.params.id
            }
          })
          .then((sup)=>{
            console.log("delete");
            res.redirect("/")
          })
          .catch(err => {
            console.log(err, "err");
          })
      })
  }

  //get all plastic from saved from wastestream for all page
  module.exports.getAllPlastic = (req,res,next)=>{
    const {
      sequelize
     } = req.app.get('models');
    sequelize.query(`select count(*) from user_saved_plastics`)
    .then(result => {
      console.log("result0", result[0], "result0")
      res.render("welcome", {
        result
      })
    })
    .catch(error =>{
     console.log(error,"getallplastic error")
    })
  }