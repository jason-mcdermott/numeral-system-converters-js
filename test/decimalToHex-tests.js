let assert = require('assert');
let dtob = require ('../decimal-to-hex/decimalToHex');

describe('decimalToHex', function() {
  describe('#convert()', function() {
    it('should return "4" when the input is 4', function() {
      let result = dtob.convert(4);
      assert.equal(result, "4");
    });
  });
});

describe('decimalToHex', function() {
  describe('#convert()', function() {
    it('should return "1DF" when the input is 479', function() {
      let result = dtob.convert(479);
      assert.equal(result, "1DF");
    });
  });
});

describe('decimalToHex', function() {
  describe('#convert()', function() {
    it('should return "37E" when the input is 894', function() {
      let result = dtob.convert(894);
      assert.equal(result, "37E");
    });
  });
});

describe('decimalToHex', function() {
  describe('#convert()', function() {
    it('should return "CD4" when the input is 3284', function() {
      let result = dtob.convert(3284);
      assert.equal(result, "CD4");
    });
  });
});