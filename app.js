'use strict';

const express = require('express');
const app = express();
const passport = require('passport')
var session = require('express-session');
let bodyParser = require('body-parser');
const path = require('path'); 
const methodOverride = require('method-override');
// flash depend on session module to set temp values that persist briefly so we can set a value, kick off a new request, then have that value accessible on the request
const flash = require('express-flash');

require('dotenv').config();
const port = process.env.PORT || 8080;

// using require('./models') to get the models may create more than one connection to the database. To avoid that, the models variable must be somehow singleton-esque. This can be achieved by attaching the models module to the application:
app.set('models', require('./models')); //pulls in models/index.js by default. Index exports all the models you define in the models folder. So cool.
// And when you need to require a class of the model in a controller, use this inside a middleware function rather than a direct import:
// const { Computer } = req.app.get('models');

app.set('view engine', 'pug');
app.locals.globalWow = "Express is, like, MAGIC"; //If we end up needing some value to be available to every pug template, look into using something like this that can be accessed in the templates just like any variable we pass directly to the template.

let routes = require('./routes/');

// Begin middleware stack
// Inject session persistence into middleware stack
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
})); // session secret

app.use(
  methodOverride(function(req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      let method = req.body._method;
      return method;
    }
  })
);

app.use(express.static(__dirname + "/public"));

app.use(
  "/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist/")
);


//execute passport strategies file
require('./config/passport-strat.js');
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
// This custom middleware adds the logged-in user's info to the 'locals' variable,
// so we can access it in the Pug templates
app.use( (req, res, next) => {
  res.locals.session = req.session;
  // console.log('res.locals.session', res.locals.session);
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(flash());

// note that this needs to be after the above stuff
app.use(routes);

// Add a 404 error handler
app.use(function(req, res, next){
  let error = new Error("Not Found. Try again, nice person");
  error.status = 404;
  res.status(404).render('404_error_template', {title: "Sorry, page not found"});
  next(error)
});

app.use( (error, req, res, next ) => {
  res.status( error.status || 500);
});

// Add error handler to pipe all server errors to from the routing middleware

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
