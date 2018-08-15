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
  console.log("HERE", req.body)
  var obj={
  	catName:req.body[3].last,
  	ownerEmail:req.body[2].last,
  	imageUrl:req.body[1].last,
  	adoptionMessage:req.body[0].last
  }
    console.log("HERE2", obj  )

  var cats=new db.Cat(obj)
  cats.save(obj,function(err,data){
  	res.send("succes add one")
  })
})



let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
module.exports = app


