  // TODO: Your code here
  var server = require('../server/index.js')  
  var db = require('../database/index.js')

  var chai = require('chai')
  var chaiHttp = require('chai-http');
  var should = chai.should();
  chai.use(chaiHttp);


  describe('Server', function() {
    it('it should send Status(200) when get all cats', function (done) {
        chai.request(server)
        .get('/cats')
        .end(function (err,res){
            res.should.have.status(200)

            done()
        });
    });
})

  describe('Server', function() {

    it('it should sendStatus(200) when get new cat', (done) => {
        chai.request(server)
        .post('/addCats')
        .send([{last:"4"}, {last:"3"}, {last:"2"}, {last:"1"}])
        .end(function (err, res) {
            res.should.have.status(200);
            done();
        });

    });
})

describe('DataBase', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var cat = new db.Cat({
        catName: 'catName',
        ownerEmail: 'ownerEmail',
        imageUrl: 'imageUrl',
        adoptionMessage: 'adoptionMessage'
      });
      cat.save(function(err) {
        if (err){ }else{
            done(err);
        } 
      });
    });
  });
});
