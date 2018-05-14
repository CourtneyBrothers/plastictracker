'use strict';
const passport = require('passport');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('plastictracker', null, null, {
  dialect: 'postgres'
});

module.exports.postSUP = (req,res,next) => {
  const {
    user_reuse_this_plastic
  } = req.app.get('models');
  let reqObj = req.body;
  reqObj.UserId = req.session.passport.user.id;
  let quantity = +req.body.quantity;
  let id = +req.body.ReuseThisPlasticId;
  let promiseArray = [];
  for (let i = 0; i < quantity; i++) {
    promiseArray.push(user_reuse_this_plastic.create(reqObj))
  }
  Promise.all(promiseArray).then(saved => {
      res.redirect(`/sup/${id}`)
    })
    .catch(err => {
      console.log(err, "err w iteration")
    })
}


module.exports.getAllReusePlastic = (req, res,next)=>{
  sequelize.query(`SELECT user_reuse_this_plastics."ReuseThisPlasticId",reuse_this_plastic_type.label, COUNT (reuse_this_plastic_type.label) AS quantity FROM user_reuse_this_plastics INNER JOIN reuse_this_plastic_type ON user_reuse_this_plastics."ReuseThisPlasticId"=reuse_this_plastic_type.id GROUP BY user_reuse_this_plastics."ReuseThisPlasticId",reuse_this_plastic_type.label
  `)
  .then(result => {
    console.log("result0", result[0], "result0")
    res.render("overboard", {
      result
    })
  })
}

module.exports.updateSUP = (req,res,next)=>{
  console.log("update")
  const {
    user_reuse_this_plastic
  } = req.app.get('models');
  user_reuse_this_plastic.findOne({
    where:{
      UserId: req.session.passport.user.id, 
      id:req.params.id
    }
  })
  .then(sup=>{
    sup.updateAttributes({singleUse: 1})
  })
  .catch(err=>{
    console.log(err,"err")
  })
}

module.exports.updateRecycledSUP = (req,res,next)=>{
  console.log("update")
  const {
    user_reuse_this_plastic
  } = req.app.get('models');
  user_reuse_this_plastic.findOne({
    where:{
      UserId: req.session.passport.user.id, 
      id:req.params.id
    }
  })
  .then(sup=>{
    sup.updateAttributes({singleUse: 2})
  })
  .catch(err=>{
    console.log(err,"err")
  })
}