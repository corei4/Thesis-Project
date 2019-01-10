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

// test the server connection
describe('Server Test', function () {
  var user = {
    "telephone": "09990909",
    "email": "Ghaz@Ghazi.com",
    "name": "Ghazi",
    "password": "1234"
  }

  var userCredentials = {
    email: 'Ghaz@Ghazi.com', 
    password: '1234'
  }

    it('should do the sign up request', (done) => {
      chai.request(server)
      .post('/account/signup')
      .send(user)
      .end((err, res) => {
        should.not.exist(err);
        //res.redirects.length.should.eql(0);
        res.should.have.status(200);
        //res.type.should.eql('application/json');
        //res.body.should.include.keys('status', 'token');
        //res.body.status.should.eql('success');
        done();
      });
    });



    // it('should do the sign up request', function (done) {
    //   chai.request(server).post('/account/signup').send(user).end(function(err, res){
    //    res.should.have.status(200);
    //    done();
    //  })
    // })


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




//now let's login the user before we run any tests




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



  // describe('Database Test', function () {
  //       it('Should get all Charities', function(done){
  //         var all = dbOpt.getAllChar();
  //          all.should.have.status(200);
  //          done();
  //        })
  //     })
//Azhar 

it('Should have a response charities to 200 ', function (done) {
  chai.request(server)
  .get('/charities').end(function(err, res){

    console.log(res.status , "/**/*/****/*/*");
    
   expect(res).to.have.status(200);
   done();
 });
});
//userOrganizations
it('Should have a response userOrganizations Suc. ', function (done) {
  chai.request(server)
  .get('/userOrganizations').end(function(err, res){
    expect(res).to.have.status(200);
   done();
 });
});

//getRequests

it('Should have a response getRequests Suc. ', function (done) {
  chai.request(server)
  .get('/getRequests').end(function(err, res){
    expect(res).to.have.status(200);
   done();
 });
});

// it('Should have a response getUserInfoID Suc. ', function (done) {
//   chai.request(server)
//   .get('/getUserInfoID').end(function(err, res){
//     console.log(res.status,"449989898985665656");
    
//     expect(res).to.have.status(200);
//    done();
//  });
// });


