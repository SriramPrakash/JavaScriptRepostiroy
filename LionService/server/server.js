var express=require('express');
var bodyparser=require('body-parser');
var app=express();
var _=require('lodash');

app.use(express.static('views'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
//console.log(app);

var lions=[];
var id=0;

app.get('/lions',function(req,res){
	res.json(lions);
});

app.get('/lions/:id',function(req,res){
	res.json(_.find(lions,{id:req.params.id})||{});
});

app.post('/lions',function(req,res){
	var lion = req.body;
	id++;
	lion.id=id;
	lions.push(lion);
	res.json(lion);
});

app.put('/lions/:id',function(req,res){
	var lion = _.find(lions,{id:req.params.id});
	if(!lions[lion]){
		res.send();
	}
	else{
		next(err);
		var deletedLion = lions[lion];
		lions.splice(lion,1);
		res.json(deletedLion);
	}
});

app.listen('3000',function(err){
	if(err){
		console.log(err)
	}
	else{
		console.log('Listening on port 3000')
	}
})
