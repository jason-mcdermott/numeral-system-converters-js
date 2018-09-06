let assert = require('assert');
let btoh = require ('../binary-to-hex/binaryToHex');

describe('binaryToHex', function() {
  describe('#convert()', function() {
    it('should return "475" when the input is "010001110101"', function() {
      let result = btoh.convert("010001110101");
      assert.equal(result, "475");
    });
  });
});

describe('binaryToHex', function() {
  describe('#convert()', function() {
    it('should return "FA5A" when the input is "1111101001011010"', function() {
      let result = btoh.convert("1111101001011010");
      assert.equal(result, "FA5A");
    });
  });
});

describe('binaryToHex', function() {
  describe('#convert()', function() {
    it('should return "0FF2F" when the input is "00001111111100101111"', function() {
      let result = btoh.convert("00001111111100101111");
      assert.equal(result, "0FF2F");
    });
  });
});

describe('binaryToHex', function() {
  describe('#convert()', function() {
    it('should return "C8009" when the input is "11001000000000001001"', function() {
      let result = btoh.convert("11001000000000001001");
      assert.equal(result, "C8009");
    });
  });
});