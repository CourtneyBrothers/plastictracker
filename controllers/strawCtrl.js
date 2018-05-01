'use strict';
const passport = require('passport');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('plastictracker', null, null, {
  dialect: 'postgres'
});


module.exports.postStraw = (req, res, next) => {
  const {
    user_saved_plastic
  } = req.app.get('models');
  let reqObj = req.body;
  reqObj.UserId = req.session.passport.user.id;

  let quantity = +req.body.quantity;
  
  console.log(req.body.quantity,"req.body.Q U A N T I T ");
  return new Promise((resolve,reject) => {
      for (let i = 0; i < quantity; i++) {
        user_saved_plastic.create(reqObj)
          .then(saved => {
            resolve("done")
          })
      }
    }).then(() => {
      res.redirect("/stats");
    })
    .catch(err => {
      console.log(err, "error post straw cntrl");
    })
}





// module.exports.getStraws = (req, res, next) => {
//   const {
//     user_saved_plastic
//   } = req.app.get('models');
//   user_saved_plastic.sum('quantity', {
//       where: {
//         UserId: req.session.passport.user.id,
//         SavedPlasticTypeId: req.params.id //this should be from route params
//       }
//     })
//     .then(sum => {
//       console.log(sum, "sum", req.params.id);
//       res.render("straws", {
//         sum,
//         req
//       });
//     })
// }



module.exports.getStrawsStraw = (req, res, next) => {
  const {
    user_saved_plastic
  } = req.app.get('models');
  sequelize.query(`Select "SavedPlasticTypeId", SUM (quantity) AS quantity FROM user_saved_plastics where "UserId"=${req.session.passport.user.id} GROUP BY "SavedPlasticTypeId"`)
    .then(result => {
      // console.log("R E S U L T ", result, "R E S U L T");
      // console.log("result0",result[0], "result0")
      res.render("dashboard", {
        result
      })
    })
}

module.exports.getSUPstats = (req, res, next) => {
  const {
    user_reuse_this_plastic
  } = req.app.get('models');
  sequelize.query(`Select "ReuseThisPlasticId", SUM (quantity) AS quantity FROM user_reuse_this_plastics where "UserId"=${req.session.passport.user.id} GROUP BY "ReuseThisPlasticId"`)
    .then(result => {
      console.log("R E S U L T ", result, "R E S U L T");
      console.log("result0", result[0], "result0")
      res.render("supstats", {
        result
      })
    })
}


module.exports.getSup = (req, res, next) => {
  const {
    user_reuse_this_plastic
  } = req.app.get('models');
  user_reuse_this_plastic.sum('quantity', {
      where: {
        UserId: req.session.passport.user.id,
        ReuseThisPlasticId: req.params.id //this should be from route params
      }
    })
    .then(sum => {
      console.log(sum, "sum");
      res.render("supstraws", {
        sum
      });
    })
}