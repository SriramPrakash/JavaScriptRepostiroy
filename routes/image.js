var express = require('express');
var router = express.Router();
var multer = require('multer');
var mongoose = require('mongoose');
 
//path and originalname are the fields stored in mongoDB
var imageSchema = mongoose.Schema({
 path: {
 type: String,
 required: true,
 trim: true
 },
 originalname: {
 type: String,
 required: true
 },
 category:{
     type: String,
     required: true
 },
 price:{
     type: Number,
     required: true
 }
});
 
 
var Image = mongoose.model('files', imageSchema);

exports.Image=Image;
 
router.getImages = function(callback, limit) {
 
 Image.find(callback).limit(limit);
}
 
router.getImageById = function(id, callback) {
  
 Image.findById(id, callback);
 
}
 
router.addImage = function(image, callback) {
 Image.create(image, callback);
}
 
 
// To get more info about 'multer'.. you can go through https://www.npmjs.com/package/multer..
var storage = multer.diskStorage({
 destination: function(req, file, cb) {
 cb(null, 'uploads/')
 },
 filename: function(req, file, cb) {
 cb(null, file.originalname);
 }
});
 
var upload = multer({
 storage: storage
});
 
router.get('/', function(req, res, next) {
    
 res.render('index.html')
});

 
router.post('/', upload.any(), function(req, res, next) {
 
 res.send(req.files);
 
/*req.files has the information regarding the file you are uploading...
from the total information, i am just using the path and the imageName to store in the mongo collection(table)
*/
 var path = req.files[0].path;
 var imageName = req.files[0].originalname;
 var price = req.body.price
 var category=req.body.category;

 console.log(req.body.price)
 console.log(req.body.category)
 
 var imagepath = {};
 imagepath['path'] = path;
 imagepath['originalname'] = imageName;
 imagepath['category']=category;
 imagepath['price']=price;
 
 
 //imagepath contains two objects, path and the imageName
 
 //we are passing two objects in the addImage method.. which is defined above..
 router.addImage(imagepath, function(err) {
 
 });
 
});

router.getImageByCategory=function(category){
    var query=Image.find({category:category});
    console.log(query);
    return query;
}

 
module.exports = router;