var MoDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="mo animated infinite flip"></span>');
  this.top = 300;
  this.left = 800;
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


MoDancer.prototype.lineUp = function(){
  var styleSettings = {
    top: 200,
    left: 500
  };
  return this.$node.css(styleSettings);
}
