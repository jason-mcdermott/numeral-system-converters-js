let assert = require('assert');
let dtob = require ('../hex-to-binary/hexToBinary');

describe('hexToBinary', function() {
  describe('#convert()', function() {
    it('should return "0011101010110010" when the input is "3AB2"', function() {
      let result = dtob.convert("3AB2");
      assert.equal(result, "0011101010110010");
    });
  });
});

describe('hexToBinary', function() {
  describe('#convert()', function() {
    it('should return "0001111110011011" when the input is "1F9B"', function() {
      let result = dtob.convert("1F9B");
      assert.equal(result, "0001111110011011");
    });
  });
});

describe('hexToBinary', function() {
  describe('#convert()', function() {
    it('should return "0101011011011111" when the input is "56DF"', function() {
      let result = dtob.convert("56DF");
      assert.equal(result, "0101011011011111");
    });
  });
});

describe('hexToBinary', function() {
  describe('#convert()', function() {
    it('should return "1111101010111111" when the input is "FABF"', function() {
      let result = dtob.convert("FABF");
      assert.equal(result, "1111101010111111");
    });
  });
});