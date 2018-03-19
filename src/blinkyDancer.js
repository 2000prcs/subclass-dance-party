// ES6 version

var MakeBlinkyDancer = class extends Dancer {

  constructor(top, left, timeBetweenSteps){
    super(top, left, timeBetweenSteps);
    this.step();
  }

  step(){
    Dancer.prototype.step.call(this);
    this.$node.toggle();
  }

  lineUp(){
    let styleSettings = {
      top: 300,
      left: 20
    };
    return this.$node.css(styleSettings); 
  }

  interact(){
    this.$node.addClass('animated infinite bounceOutRight');
  }

}







// // ES5 version

// var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   Dancer.call(this, top, left, timeBetweenSteps);
//   this.step();
// }

// MakeBlinkyDancer.prototype = Object.create(Dancer.prototype);

// MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

// MakeBlinkyDancer.prototype.step = function(){
//   Dancer.prototype.step.call(this);
//   this.$node.toggle();
// }

// MakeBlinkyDancer.prototype.lineUp = function(){
//   var styleSettings = {
//     top: 300,
//     left: 20
//   };
//   return this.$node.css(styleSettings);
// }


// MakeBlinkyDancer.prototype.interact = function(){
//   this.$node.addClass('animated infinite bounceOutRight');
// }