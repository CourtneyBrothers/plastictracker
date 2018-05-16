'use strict';

const { Router } = require('express');
const router = Router();


router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/credits',(req,res,next)=>{
  res.render('credits')
})

// pipe all other requests through the route modules
router.use(require('./authRoute'));
router.use(require('./strawRoute'));
router.use(require('./notSavedRoute'));
router.use(require('./profileRoute'))

// router.use(require('./foo'));

module.exports = router;