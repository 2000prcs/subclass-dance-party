var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.step();
}

MakeBlinkyDancer.prototype = Object.create(Dancer.prototype);

MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggle();
}

MakeBlinkyDancer.prototype.lineUp = function(){
  var styleSettings = {
    top: 300,
    left: 20
  };
  return this.$node.css(styleSettings);
}


MakeBlinkyDancer.prototype.interact = function(){
  console.log('interacted');
  this.$node.addClass('animated infinite bounceOutRight');
}