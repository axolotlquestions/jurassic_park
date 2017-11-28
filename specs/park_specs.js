var assert = require("assert");
var Dinosaur = require('../dinosaur.js')
var Park = require('../park.js')

describe('park tests', function(){
  beforeEach(function(){
    park = new Park();
    dino1 = new Dinosaur("velociraptor", 6);
    dino2 = new Dinosaur("triceratops", 1);
    dino3 = new Dinosaur("velociraptor", 6);
    dino4 = new Dinosaur("Apatosaurus", 1);
  })
  it("should start with empty enclosures", function(){
    assert.deepStrictEqual(park.enclosure, []);
  });
  it("should be able to add a dinosaur to an enclosure", function(){
    park.add(dino1);
    assert.strictEqual(park.enclosure.length, 1);
  });
  it("should be able to remove all dinosaurs of a certain type", function(){
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);
    park.add(dino4);
    park.removeType("velociraptor");
    assert.deepStrictEqual(park.enclosure, [dino2, dino4]);
  });
  it("should be able to get all dinosaurs with more than 2 offspring", function(){
    park.add(dino1);
    park.add(dino2);
    park.removeMoreThanTwoOffspring();
    assert.deepStrictEqual(park.enclosure, [dino2]);
  });

})
