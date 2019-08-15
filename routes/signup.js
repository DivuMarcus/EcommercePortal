var router = require('express').Router();
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var User = require('../models/user');


router.get('/',function(req,res){
  res.render('main/signup');
});

//Signup Users data post to database
router.post('/', (req, res, next) => {
  User.find({ email: req.body.email })
      .exec()
      .then(user => {
          if (user.length >= 1) {
              return res.status(409).json({
                  message: 'Mail Exists'
              });
          }
          else {
              bcrypt.hash(req.body.password, 10, (err, hash) => {
                  if (err) {
                      return res.status(500).json({
                          error: err
                      });
                  } else {
                      var user = new User({
                          _id: new mongoose.Types.ObjectId(),
                          email: req.body.email,
                          password: hash
                      });
                      user
                          .save()
                          .then(result => {
                              console.log(result);
                              res.redirect('/login');
                          })
                          .catch(err => {
                              console.log(err);
                              res.status(500).json({
                                  error: err
                              });
                          });
                  }
              });
          }
      })

});

module.exports = router;
