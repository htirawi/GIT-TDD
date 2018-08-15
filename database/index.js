const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/catsList');
var db = mongoose.connection;
db.on('error' , function(){
	console.log('mongoose not Connected !')
})
db.once('open' , function () {
	console.log("mongoose Connected !")
})


let catSchema = mongoose.Schema({
  
  catName:String,
  ownerEmail:String,
  imageUrl:String,
  adoptionMessage:String
});

let Cat = mongoose.model('Cat', catSchema);

let save = (data,callback) => {
  // TODO: Your code here
  let cat = new Cat(catSchema);
  cat.save(function(err,data){
  	if(err){
  		callback(err,null)
  	}else{
  		callback(null,data)
  	}
  	
  })
  
}

module.exports.save = save;
module.exports.Cat = Cat;
