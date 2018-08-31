let assert = require('assert');
let btod = require ('../binary-to-decimal/binaryToDecimal');

describe('binaryToDecimal', function() {
  describe('#convert()', function() {
    it('should return 4 when the input is "0100"', function() {
      let result = btod.convert("0100");
      assert.equal(result, 4);
    });
  });
});

describe('binaryToDecimal', function() {
  describe('#convert()', function() {
    it('should return 122 when the input is "01111010"', function() {
      let result = btod.convert("01111010");
      assert.equal(result, 122);
    });
  });
});

describe('binaryToDecimal', function() {
  describe('#convert()', function() {
    it('should return 255 when the input is "000011111111"', function() {
      let result = btod.convert("000011111111");
      assert.equal(result, 255);
    });
  });
});

describe('binaryToDecimal', function() {
  describe('#convert()', function() {
    it('should return 4096 when the input is "0001000000000000"', function() {
      let result = btod.convert("0001000000000000");
      assert.equal(result, 4096);
    });
  });
});