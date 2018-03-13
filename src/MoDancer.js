var MoDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="mo"></span>');
  this.top = 100;
  this.left = 100;
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