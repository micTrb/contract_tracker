let expect = require('chai').expect;


let Contract = require('./contract.model');

describe('contract', function() {
  it('should be invalid if name is empty', function(done) {
    var c = new Contract();
    c.validate(function(err) {
      expect(err.errors.contractName).to.exist;
      done();
    });
  })
})