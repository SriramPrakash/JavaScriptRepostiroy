var express = require('express');
var bodyparser=require('body-parser');
var lionRouter=require('./LionRoute');
var tigerRouter=require('./TigerRoute');

var app=express();

app.use(express.static('views'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use('/lions',lionRouter);
app.use('/tiger',tigerRouter);

app.use(function(err,req,res,next){
	if(err){		
		console.log(err);
		res.status(500).send(err);
	}
});

app.get('/all',function(req,res,next){
	var allAnimals=[];
	allAnimals.push(lionRouter.getAll());
	allAnimals.push(tigerRouter.getAll());
	res.json(allAnimals);
});

app.listen('3000',function(err){
	if(err){
		console.log(err)
	}
	else{
		console.log('Listening on port 3000')
	}
})