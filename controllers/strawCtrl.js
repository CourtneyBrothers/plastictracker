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
      res.redirect("/savedplastic");
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
        SavedPlasticTypeId: 1 //this should be from route params
      }
  })
  .then(sum => {
    console.log(sum, "sum");
    res.render("dashboard",{sum});
  })
}

module.exports.getStrawsStraw = (req, res, next) => {
    const {user_saved_plastic} = req.app.get('models');
    sequelize.query(`Select "SavedPlasticTypeId", SUM (quantity) AS quantity FROM user_saved_plastics where "UserId"=${req.session.passport.user.id} GROUP BY "SavedPlasticTypeId"`)
    .then(result => {
      console.log("R E S U L T ", result, "R E S U L T");
      console.log("result0",result[0], "result0")
      res.render("straws",{result})  
    })
  }

// module.exports.getStrawsStraw = (req, res, next) => {
//   const {user_saved_plastic} = req.app.get('models');
//   user_saved_plastic.sum('quantity', {
//     where: 
//       {UserId: req.session.passport.user.id,
//         SavedPlasticTypeId: 1 //this should be from route params
//       }
//   })
//   .then(sum => {
//     console.log(sum, "sum");
//     res.render("straws",{sum});
//   })
// }

module.exports.getCupLid = (req, res, next) => {
  const {user_saved_plastic} = req.app.get('models');
  user_saved_plastic.sum('quantity', {
    where: 
      {UserId: req.session.passport.user.id,
        SavedPlasticTypeId: 2
      }
  })
  .then(cupLidSum => {
    console.log(cupLidSum, "sum");
    res.render("dashboard",{cupLidSum});
  })
}

