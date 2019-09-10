var assert = require("assert");
var store = require('../../../src/components/clipstore/store.js');
describe('test basic function', function() {
  describe('test', function() {
    it('should return 6', function() {
      assert.equal(store.sum([1, 2, 3]), 6);
    });
  });
});
