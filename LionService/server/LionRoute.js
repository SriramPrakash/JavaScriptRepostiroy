var express=require('express');

var app=express.Router();
var _=require('lodash');
var findIndex = require('lodash.findindex');


//console.log(app);

var lions=[];

var id=0;



app.param('id',function(req,res,next,Id){	
	if(Id !=null){		
		console.log(lions)
		var lion=lions[Id];
		console.log(lion);
			if(!lion){
				res.status(404);
			}	
		req.body= lion;		
	}	
	next();
});
app.getAll=function(callback){
	return lions;
}
app.get('/',function(req,res){
	res.json(lions);
});

app.get('/:id',function(req,res){
	res.json(req.body)
});

app.post('/',function(req,res,next){
	
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

app.put('/:id',function(req,res){

	var deletedLion = req.body;
	lions.splice(deletedLion.id,1);
	res.json(deletedLion);
	
});



module.exports=app;
