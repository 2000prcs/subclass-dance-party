var MoDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="dancer"></span>');
  // this.top = top;
  // this.left = left;
  // this.timeBetweenSteps = timeBetweenSteps;
}

MoDancer.prototype.step = function(){
  setTimeout(function(){this.step()}.bind(this), this.timeBetweenSteps);
}

MoDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  return this.$node.css(styleSettings);
}

