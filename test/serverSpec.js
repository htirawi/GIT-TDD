  // TODO: Your code here
	var server = require('../server/index.js')
	var chai = require('chai')
	var chaiHttp = require('chai-http');
	var chaiHttp = require('chai-http');
	var should = chai.should();
	chai.use(chaiHttp);


  it('it should send Status(200) to the client', function (done) {
    chai.request(server)
    .get('/cats')
        .end(function (err,res){
            res.should.have.status(200)
           
            done()
        });
});

    it('it should sendStatus(200) to the client', (done) => {
        chai.request(server)
            .post('/addCats')
            .end(function (err, res) {

                res.should.have.status(200);
                done();
            });

    });