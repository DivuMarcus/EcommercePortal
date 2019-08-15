var router = require('express').Router();

router.get('/',function(req,res){
  res.render('main/payment');
});

module.exports = router;
