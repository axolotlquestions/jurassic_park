var assert = require("assert");
var Dinosaur = require('../dinosaur.js')

describe('dinosaur tests', function(){
  beforeEach(function(){
    dino = new Dinosaur("velociraptor", 6);
  })

  it('should have a type', function(){
    assert.strictEqual(dino.type, "velociraptor");
  })
  it('should have 6 offspring per year', function(){
    assert.strictEqual(dino.offspring, 6)
  })

})
