var express=require('express')
var bodyparser=require('body-parser')
var app=express()
var _=require('lodash')

app.use(express.static('d:\Sriram\JSWorkspace\JavaScriptRepostiroy\views\index.html'))

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())


app.get('/get',function(req,res,next){
    res.render('d:\Sriram\JSWorkspace\JavaScriptRepostiroy\views')
})

app.use(function(err,req,res,next){
    
        console.log(err)
        next(err)
    
})
app.all(function(req,res){
    console.log('Per every request')
})
app.listen('8080',function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log('Listening on port 8080')
    }
})