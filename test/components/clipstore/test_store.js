var assert = require('assert');
var store = require('../../../src/components/models/clipstore');

describe('test clipstore', function() {
  describe('test insertion', function() {
    it('keeps same size of elements', function() {
        let s = new store.Store(5);
        for (let i = 0; i < 105; i++) {
            s.push(i);
        }
        
        let result = [];
        s.foreach(function(v, index) {
            result.push(v);
        })

        assert.deepEqual(result, [100, 101, 102, 103, 104], "FILO")
    });
  });
});
