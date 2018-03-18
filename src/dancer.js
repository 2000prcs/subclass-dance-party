// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
}

Dancer.prototype.step = function(){
  // version 1 (capture 'this' as context)
  var context = this;
  setTimeout(function () { context.step() }, this.timeBetweenSteps);
  
  // version 2 (bind anonymous function with 'this')
  //setTimeout(function(){this.step()}.bind(this), this.timeBetweenSteps);
}

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  return this.$node.css(styleSettings);
}


