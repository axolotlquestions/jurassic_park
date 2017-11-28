var Park = function(){
  this.enclosure = [];
  this.add = function(dinosaur){
    this.enclosure.push(dinosaur);
  };
  this.remove = function(type){
    for (var i=0, iLen=this.enclosure.length; i<iLen; i++) {
      if (this.enclosure[i].type == type){
        this.enclosure.splice(i, 1);}  
    }
  };


}

module.exports = Park;
