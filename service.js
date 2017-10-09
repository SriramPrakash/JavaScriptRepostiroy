
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
app.use(bodyParser.json());
 
//To get the access for the functions defined in index.js class
var routes = require('./routes/imagefile');
 
// connect to mongo,
//i have created mongo collection in mlab.com.. the below is my database access url..
//So make sure you give your connection details..
mongoose.connect('mongodb://localhost:27017/imagedb');
 
app.use('/', routes);
 
//URL : http://localhost:3000/images/
// To get all the images/files stored in MongoDB
app.get('/images', function(req, res) {
//calling the function from index.js class using routes object..
routes.getImages(function(err, genres) {
if (err) {
throw err;
 
}
res.json(genres)
// res.writeHead(200,{'Content-Type':'image/jpg'})
// res.end(genres,'utf-8')
 //mongoose.connection.close();
});

});
 
// URL : http://localhost:3000/images/(give you collectionID)
// To get the single image/File using id from the MongoDB
app.get('/images/:id', function(req, res) {
 
//calling the function from index.js class using routes object..
routes.getImageById(req.params.id, function(err, genres) {
if (err) {
throw err;
}
//res.download(genres.path);
var staticpath='D:/Sriram/JSWorkspace/'
res.sendFile(staticpath+genres.path)
});
});

app.get('/images/Category/:category', function(req, res) {
    
   //calling the function from index.js class using routes object..
   routes.getImageByCategory(req.params.category, function(err, genres) {
   if (err) {
   throw err;
   }
   //res.download(genres.path);
   var staticpath='D:/Sriram/JSWorkspace/'
   res.sendFile(staticpath+genres.path)
   });
   });
 
app.listen(3000);
 
console.log('Running on port 3000');