var Park = function(){
  this.enclosure = [];
  this.add = function(dinosaur){
    this.enclosure.push(dinosaur);
  };
  this.removeType = function(type){
    for (var i=0; i<this.enclosure.length; i++) {
      if (this.enclosure[i].type === type){
        this.enclosure.splice(i, 1);
      }
    }
  };
  this.removeMoreThanTwoOffspring = function(){
    for (var i=0; i<this.enclosure.length; i++) {
      if (this.enclosure[i].offspring > 2){
        this.enclosure.splice(i, 1);
      }
    }
  };


}

module.exports = Park;
