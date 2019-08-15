var router = require('express').Router();
var User = require('../models/user');
var bcrypt = require('bcrypt');


router.get('/',function(req,res){
  res.render('main/login');
});
//Login Users data post to database

router.post('/', (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'Auth Failed Due to length'
                });
            }
            else {
                bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                    if (err) {
                        return res.status(401).json({
                            message: 'Auth Failed due to compare'
                        });
                        console.log(result);
                    }
                    if (result) {
                        return res.redirect('/home');           
                    }
                    res.status(401).json({
                        message: 'Auth Failed otherwise',
                        error: err
                    });
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;
