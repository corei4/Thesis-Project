var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var assert = chai.assert;
var server = require('../server.js')
var connection = require('../database/Schema.js');
var dbOpt = require('../database/dbOpt.js');
var chaiHttp = require('chai-http');
var request = require('supertest');
chai.use(chaiHttp);

// test the localhost:3000 connection
describe('Server Test', function () {
  var user = {
    "telephone": "09990909",
    "email": "Ghaz@Ghazi.com",
    "name": "Ghazi",
    "password": "1234"
  }
  it('should do the sign up request', function (done) {
    chai.request(server).post('/account/signup').send(user).end(function(err, res){
     res.should.have.status(200);
     done();
   })
  })
// right path
var userCredentials = {
  email: 'Ghaz@Ghazi.com', 
  password: '1234'
}
//now let's login the user before we run any tests
it('Should login ', function (done) {
  var authenticatedUser = request.agent(server);
    authenticatedUser
      .post('/account/signin')
      .send(userCredentials)
      .end(function(err, response){
        expect(response.statusCode).to.equal(200);
        done();
      });
    })



     it('Should have a response from the server ', function (done) {
       chai.request(server)
       .post('/api/initializeDB').end(function(err, res){
        res.should.have.status(200);
        done();
      });
     })
// right path
     it('should resived error from the server with wrong path ', function (done) {
       chai.request(server).get('/wrong').end(function(err, res){
        res.should.have.status(404);
        done();
      })
     })
  })



  describe('Database Test', function () {
    // right path
        it('Should get all Charities', function(done){
          this.timeout(20000);
           dbOpt.getAllChar(function(result, err){
             if (err) {
               console.log(err)
              //  done(err)
             } else {
               expect(result).to.be.not.null;
               done()
             }
           })
         })
      })






