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

  let promiseArray = [];

  for (let i = 0; i < quantity; i++) {
    promiseArray.push(user_saved_plastic.create(reqObj))
  }

  Promise.all(promiseArray).then(saved => {
      resolve("done")
    })
    .catch(err => {
      console.log(err, "err w iteration")
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
  console.log("id", id);
  user_saved_plastic.count({
      where: {
        UserId: req.session.passport.user.id,
        SavedPlasticTypeId: req.params.id
      }
    })
    .then(result => {
      console.log("R E S U L T ", typeof result, "R E S U L T");
      // console.log("result0",result[0], "result0")

      res.render("plasticDetail", {
        id,
        result,
        req
      })
    })
    .catch(err => {
      console.log("error in result", err)
    })
}

module.exports.groupPlasticCount = (req, res, next) => {
  const {
    user_saved_plastic,
    Saved_Plastic_Type,
    Sequelize
  } = req.app.get('models');


  user_saved_plastic.findAll({
      attributes: ["SavedPlasticTypeId", [Sequelize.fn('COUNT', Sequelize.col('SavedPlasticTypeId')), 'plasticId']],
      where: {
        UserId: req.session.passport.user.id
      },
      include: [{
        model: Saved_Plastic_Type,
        as: 'type',
        Saved_Plastic_Type: Saved_Plastic_Type
      }]
    })
    .then(result => {
      console.log("R E S U L T ", result, "R E S U L T");
      // console.log("result0",result[0], "result0")
    })
    .catch(err => {
      console.log("error in result", err)
    })
}

module.exports.countSUP = (req, res, next) => {
  const {
    user_reuse_this_plastic,
    Reuse_This_Plastic
  } = req.app.get('models');

  let id = +req.params.id;
  console.log("id", id);
  user_reuse_this_plastic.count({
      where: {
        UserId: req.session.passport.user.id,
        ReuseThisPlasticId: req.params.id
      }
    })
    .then(result => {
      console.log("R E S U L T ", typeof result, "R E S U L T");
      // console.log("result0",result[0], "result0")

      res.render("supPlasticDetail", {
        id,
        result,
        req
      })
    })
    .catch(err => {
      console.log("error in result", err)
    })
}
//remove sup stats because it relies on quantity which no longer exists
// module.exports.getSUPstats = (req, res, next) => {
//   const {
//     user_reuse_this_plastic
//   } = req.app.get('models');
//   sequelize.query(`Select "ReuseThisPlasticId", count ("ReuseThisPlasticId") AS quantity FROM user_reuse_this_plastics where "UserId"=${req.session.passport.user.id} GROUP BY "ReuseThisPlasticId"`)
//     .then(result => {
//       console.log("R E S U L T ", result, "R E S U L T");
//       console.log("result0", result[0], "result0")
//       res.render("supstats", {
//         result
//       })
//     })
// }