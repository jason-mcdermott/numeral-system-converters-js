let assert = require('assert');
let dtob = require ('../decimal-to-binary/decimalToBinary');

describe('decimalToBinary', function() {
  describe('#convert()', function() {
    it('should return "0100" when the input is 4', function() {
      let result = dtob.convert(4);
      assert.equal(result, "0100");
    });
  });
});

describe('decimalToBinary', function() {
  describe('#convert()', function() {
    it('should return "01111010" when the input is 122', function() {
      let result = dtob.convert(122);
      assert.equal(result, "01111010");
    });
  });
});

describe('decimalToBinary', function() {
  describe('#convert()', function() {
    it('should return "000011111111" when the input is 255', function() {
      let result = dtob.convert(255);
      assert.equal(result, "000011111111");
    });
  });
});

describe('decimalToBinary', function() {
  describe('#convert()', function() {
    it('should return "0001000000000000" when the input is 4096', function() {
      let result = dtob.convert(4096);
      assert.equal(result, "0001000000000000");
    });
  });
});