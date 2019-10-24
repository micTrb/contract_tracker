let chai = require('chai');
let chaiHttp = require('chai-http');

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Contracts", () => {
  describe("GET /", () => {
    // Test to get all students record
    it("should get all contracts", (done) => {
      chai.request('http://localhost:5000/contracts')
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });

  describe("GET /", () => {
    // Test to get all students record
    it("should get all contracts", (done) => {
      chai.request('http://localhost:5000/contracts')
        .get('/5db065106bb6bd0f7006eba9')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe("POST /", () => {
    // Test to get all students record
    it("should post a contract", (done) => {
      chai.request('http://localhost:5000/contracts')
        .post('/add')
        .end((err, res) => {
          res.status.should.be.equal(400);
          res.body.should.be.a('string');
          done();
        });
    });
  });




});