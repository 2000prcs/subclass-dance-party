var MoDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="mo animated infinite flip"></span>');
  this.top = 77;
  this.left = 400;
  this.moveMo();
}

MoDancer.prototype = Object.create(Dancer.prototype);

MoDancer.prototype.constructor = MoDancer;

MoDancer.prototype.moveMo = function(){
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  return this.$node.css(styleSettings);
}