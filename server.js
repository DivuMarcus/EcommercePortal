var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var ejs_mate = require('ejs-mate');

var User = require('./models/user');

var app = express();

var password = 'ecommerce123';

mongoose.connect('mongodb+srv://tcs-ecommerce:' + password + '@ecommerce-tcs-qqgie.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser:true
},function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("Connected To The Database");
  }
});

//Middleware
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.engine('ejs',ejs_mate);
app.set('view engine','ejs');

var homeRoutes = require('./routes/home');
var aboutRoutes =require('./routes/about');
var userRoutes = require('./routes/user');
var cartRoutes = require('./routes/cart');
var checkoutRoutes = require('./routes/checkout');
var thankyouroutes = require('./routes/thankyou');
var shopRoutes = require('./routes/shop');
var shopsingleroutes = require('./routes/shop-single');
var contactRoutes = require('./routes/contact');

app.use('/home',homeRoutes);
app.use('/about',aboutRoutes);
app.use('/user',userRoutes);
app.use('/cart',cartRoutes);
app.use('/checkout',checkoutRoutes);
app.use('/thankyou',thankyouroutes);
app.use('/shop',shopRoutes);
app.use('/shop-single',shopsingleroutes);
app.use('/contact',contactRoutes);

app.listen(3000, function(err){
  if (err) throw err;
  console.log("Server is Running on port 3000");
});

//mongoose: object relational mapper i.e virtual object DB, connects JS n Mongo DB.