var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.use(express.static('data'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

mongoose.connect(connectFunction());

app.get('/beanbags/:Cateory',function(req,res,next,Cateory){

});

function connectFunction(){
	return 'mongodb://localhost:27017/imagedb';
}

