var assert = require('chai').assert;
const fs = require('fs');

describe('buggy index', function() { 
  it('should not have an index.js', function(){
    assert.equal(fs.readdirSync('node_modules/buggy-index').indexOf('index.js'), -1);
  })
});

describe('has index', function() {
  it('should have an index.js', function(){
    assert.equal(fs.readdirSync('node_modules/has-index').indexOf('index.js'), 0);
  })
});
