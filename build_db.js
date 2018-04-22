
'use strict'

let models = require("./models");
let { plastic_types } = require("./seeders/data/plastic_types");
let { users } = require("./seeders/data/users");

 
models.sequelize.sync({force: true})
.then(()=>{
  return models.User.bulkCreate(users)
})
.then(()=>{
  return models.Plastic_Type.bulkCreate(plastic_types)
})
.then(()=>{
  process.exit();
});