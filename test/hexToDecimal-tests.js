let assert = require('assert');
let dtob = require ('../hex-to-decimal/hexToDecimal');

describe('hexToDecimal', function() {
  describe('#convert()', function() {
    it('should return 175 when the input is "AF"', function() {
      let result = dtob.convert("AF");
      assert.equal(result, 175);
    });
  });
});

describe('hexToDecimal', function() {
  describe('#convert()', function() {
    it('should return 2765 when the input is "ACD"', function() {
      let result = dtob.convert("ACD");
      assert.equal(result, 2765);
    });
  });
});

describe('hexToDecimal', function() {
  describe('#convert()', function() {
    it('should return 2738 when the input is "AB2"', function() {
      let result = dtob.convert("AB2");
      assert.equal(result, 2738);
    });
  });
});

describe('hexToDecimal', function() {
  describe('#convert()', function() {
    it('should return 255 when the input is "FF"', function() {
      let result = dtob.convert("FF");
      assert.equal(result, 255);
    });
  });
});