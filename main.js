const express = require('express');
const mongodb = require('./mongodb.js');
const config = require('./config.js');
var db
const app = express();
 
app.listen(9999, function() {
  console.log('Node server listening on 9999')
})
 
app.use(express.static(__dirname + '/public'));

mongodb.connectToServer( function( err ) {
    app.listen(config.server.port, function() {
       console.log('Node server listening on ' + config.server.port);
       db = mongodb.getDb();
    })
  });

app.get('/',function(req,res){
    res.sendFile('index.html')
});


 
