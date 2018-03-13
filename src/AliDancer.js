var AliDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="dancer"></span>');
  // this.top = top;
  // this.left = left;
  // this.timeBetweenSteps = timeBetweenSteps;
}

AliDancer.prototype.step = function(){
  setTimeout(function(){this.step()}.bind(this), this.timeBetweenSteps);
}

AliDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  return this.$node.css(styleSettings);
}
