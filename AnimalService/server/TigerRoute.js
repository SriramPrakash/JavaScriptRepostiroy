var express=require('express');

var app=express.Router();
var _=require('lodash');
var findIndex = require('lodash.findindex');


//console.log(app);

var tigers=[];

var id=0;



app.param('id',function(req,res,next,Id){	
	if(Id !=null){		
		console.log(tigers)
		var tigers=tigers[Id];
		console.log(tigers);
			if(!tigers){
				res.status(404);
			}	
		req.body= tigers;		
	}	
	next();
});
app.getAll=function(callback){
	return tigers;
}

app.get('/',function(req,res){
	res.json(tigers);
});

app.get('/:id',function(req,res){
	res.json(req.body)
});

app.post('/',function(req,res,next){
	
			var tiger=req.body;
			if(tiger.id!=null){			
				if(!tigers[tiger.id]){
					id++;
					tiger.id=id;
					tigers.push(tiger);
				}
				else{
					tigers[tiger.id].name=tiger.name;
					tigers[tiger.id].pride=tiger.pride;
					tigers[tiger.id].type=tiger.type;
				}
						
		}
		else{
			id++;
			tigers.id=id;
			tigers.push(tiger);
		}

		res.json(tiger)
	});

app.put('/:id',function(req,res){

	var deletedtigers = req.body;
	tigers.splice(deletedtigers.id,1);
	res.json(deletedtigers);
	
});


module.exports=app;

