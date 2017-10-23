var express=require('express');
var bodyparser=require('body-parser');
var app=express();
var _=require('lodash');
var findIndex = require('lodash.findindex');

app.use(express.static('views'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
//console.log(app);

var lions=[];

var id=0;



app.param('id',function(req,res,next,Id){	
	if(Id !=null){		
		console.log(lions)
		var lion=findIndex(lions,{"name":'Sriram'});	
		console.log(lion);
			if(lion){
				next(new Error('Not Found'));
			}	
		req.body= lions[lion];		
	}	
	next();
});

app.get('/lions',function(req,res){
	res.json(lions);
});

app.get('/lions/:id',function(req,res){
	res.json(req.body)
});

app.post('/lions',function(req,res,next){
			var lion=req.body;
			if(lion.id!=null){			
				if(!lions[lion.id]){
					id++;
					lion.id=id;
					lions.push(lion);
				}
				else{
					lions[lion.id].name=lion.name;
					lions[lion.id].pride=lion.pride;
					lions[lion.id].type=lion.type;
				}
						
		}
		else{
			id++;
			lion.id=id;
			lions.push(lion);
		}
		res.json(lion)
	});

app.put('/lions/:id',function(req,res){

	var deletedLion = req.body.lion;
	lions.splice(deletedLion.id,1);
	res.json(deletedLion);
	
});

app.use(function(err){
	if(err){
		console.log(err);
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
