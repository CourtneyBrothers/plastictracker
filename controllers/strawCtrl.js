'use strict';
const passport = require('passport');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('plastictracker', null, null, {
  dialect: 'postgres'
});


module.exports.postStraw = (req, res, next) => {
  const {user_saved_plastic} = req.app.get('models');
    req.body.UserId = req.session.passport.user.id;
    user_saved_plastic.create(req.body).then(saved =>{
      console.log("saved",saved);
      res.redirect("/stats");
    })
    .catch(err=>{
      console.log(err, "error post straw cntrl");
    });
};


module.exports.getStraws = (req, res, next) => {
  const {user_saved_plastic} = req.app.get('models');
  user_saved_plastic.sum('quantity', {
    where: 
      {UserId: req.session.passport.user.id,
        SavedPlasticTypeId: req.params.id //this should be from route params
      }
  })
  .then(sum => {
    console.log(sum, "sum");
    res.render("straws",{sum});
  })
}

module.exports.getStrawsStraw = (req, res, next) => {
    const {user_saved_plastic} = req.app.get('models');
    sequelize.query(`Select "SavedPlasticTypeId", SUM (quantity) AS quantity FROM user_saved_plastics where "UserId"=${req.session.passport.user.id} GROUP BY "SavedPlasticTypeId"`)
    .then(result => {
      console.log("R E S U L T ", result, "R E S U L T");
      console.log("result0",result[0], "result0")
      res.render("dashboard",{result})  
    })
  }

  module.exports.getSUPstats = (req, res, next) => {
    const {user_reuse_this_plastic} = req.app.get('models');
    sequelize.query(`Select "ReuseThisPlasticId", SUM (quantity) AS quantity FROM user_reuse_this_plastics where "UserId"=${req.session.passport.user.id} GROUP BY "ReuseThisPlasticId"`)
    .then(result => {
      console.log("R E S U L T ", result, "R E S U L T");
      console.log("result0",result[0], "result0")
      res.render("supstats",{result})  
    })
  }
  

