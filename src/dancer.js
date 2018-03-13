// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
}

Dancer.prototype.step = function(){
  setTimeout(function(){this.step()}.bind(this), this.timeBetweenSteps);
}

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  return this.$node.css(styleSettings);
}


