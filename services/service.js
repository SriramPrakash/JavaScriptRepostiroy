var express = require('express');
var _ = require('underscore-node');

var app= express();

var todos=[];

var jsonData={"Name":"Sriram","Age":25}

app.get('/',function(req,res){

res.json(jsonData);
});

app.get("/data",function(req,res,next){
    res.sendFile('d:/Sriram/JSWorkspace/JavaScriptRepostiroy/public/index.html',function(err){
        if(err){
            res.status(500).send(err);
        }
        next()
    });
    
});

app.post('/todo',function(req,res){
console.log('POST')
var todo=req.body
todos.push(todo);
res.send(todo);
});

app.get('/todo/:id',function(req,res){
    var todo=_.find(todos,{id:req.params.id});
    res.json(todos)
});

app.listen(3000,function(){
    console.log('Listening on 3000')
});