let chai = require('chai');
let chaiHttp = require('chai-http');

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Tracks", () => {
  describe("GET /", () => {
    it("should get all tracks", (done) => {
      chai.request('http://localhost:5000/tracks')
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });

  describe("GET /", () => {
    it("should get a track by id", (done) => {
      chai.request('http://localhost:5000/tracks')
        .get('/5db17285ab2d2104004ebe9c')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe("POST /", () => {
    // Test to get all students record
    it("should post a track", (done) => {
      chai.request('http://localhost:5000/tracks')
        .post('/add')
        .end((err, res) => {
          res.status.should.be.equal(400);
          res.body.should.be.a('string');
          done();
        });
    });
  });



});