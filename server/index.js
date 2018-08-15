const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../angular-client/')));

app.get('/cats', function (req, res) {
  // TODO - your code here!
  db.Cat.find({},function(err,data){
  	res.send(data)
  })
  

});

app.post('/addCats', function (req, res) {
  // TODO - your code here!
  var obj={
  	catName:req.body.catName,
  	ownerEmail:req.body.ownerEmail,
  	imageUrl:req.body.imageUrl,
  	adoptionMessage:req.body.adoptionMessage
  }
  var cats=new db.Cat(obj)
  cats.save(obj,function(err,data){
  	res.send(data)
  })
})



let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
module.exports = app


