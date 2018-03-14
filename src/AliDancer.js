var AliDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="ali animated infinite rotateOut"></span>');
  this.top = 500;
  this.left = 700;
  this.moveAli();
}

AliDancer.prototype = Object.create(Dancer.prototype);

AliDancer.prototype.constructor = AliDancer;


AliDancer.prototype.moveAli = function(){
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  return this.$node.css(styleSettings);
}


AliDancer.prototype.lineUp = function(){
  var styleSettings = {
    top: 200,
    left: 900
  };
  return this.$node.css(styleSettings);
}
