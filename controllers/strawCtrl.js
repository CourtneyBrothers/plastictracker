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
  let id = +req.body.SavedPlasticTypeId;
  return new Promise((resolve,reject) => {
    //post plastic type from quantity input 
      for (let i = 0; i < quantity; i++) {
        user_saved_plastic.create(reqObj)
          .then(saved => {
            resolve("done")
          })
          .catch(err => {
            console.log("error w iteration");
          })
      }
    }).then(() => {
      res.redirect(`/saved/${id}`);
    })
    .catch(err => {
      console.log(err, "error post straw cntrl");
    })
}


module.exports.countPlastic = (req, res, next) => {
  const {
    user_saved_plastic,
    Saved_Plastic_Type
  } = req.app.get('models');

  let id = +req.params.id;
  console.log("id",id);
    user_saved_plastic.count({
      where:{
        UserId: req.session.passport.user.id,
        SavedPlasticTypeId: req.params.id
      }
    })
    .then(result => {
      console.log("R E S U L T ", typeof result, "R E S U L T");
      // console.log("result0",result[0], "result0")
       
      res.render("plasticDetail",{id,result,req})
    })
    .catch(err=>{
      console.log("error in result",err)
    })
}
//remove sup stats because it relies on quantity which no longer exists
module.exports.getSUPstats = (req, res, next) => {
  const {
    user_reuse_this_plastic
  } = req.app.get('models');
  sequelize.query(`Select "ReuseThisPlasticId", count ("ReuseThisPlasticId") AS quantity FROM user_reuse_this_plastics where "UserId"=${req.session.passport.user.id} GROUP BY "ReuseThisPlasticId"`)
    .then(result => {
      console.log("R E S U L T ", result, "R E S U L T");
      console.log("result0", result[0], "result0")
      res.render("supstats", {
        result
      })
    })
}


// module.exports.getSup = (req, res, next) => {
//   const {
//     user_reuse_this_plastic
//   } = req.app.get('models');
//   user_reuse_this_plastic.sum('quantity', {
//       where: {
//         UserId: req.session.passport.user.id,
//         ReuseThisPlasticId: req.params.id //this should be from route params
//       }
//     })
//     .then(sum => {
//       console.log(sum, "sum");
//       res.render("supstraws", {
//         sum
//       });
//     })
// }