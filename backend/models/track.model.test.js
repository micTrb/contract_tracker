let expect = require('chai').expect;

let Track = require('./track.model');

describe('track', function() {
  it('should be invalid if title and isrc_code are empty', function(done) {
    var t = new Track();
    t.validate(function(err) {
      expect(err.errors.title).to.exist;
      expect(err.errors.isrc_code).to.exist;
      done();
    });
  })
})