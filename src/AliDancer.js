// ES6 version
var AliDancer = class extends Dancer {

  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<span class="ali animated infinite flip"></span>');
    this.moveAli();
  }

  moveAli() {
    let styleSettings = {
      top: this.top,
      left: this.left
    };
    return this.$node.css(styleSettings);
  }

  lineUp() {
    var styleSettings = {
      top: 300,
      left: 900
    };
    return this.$node.css(styleSettings);
  }

  interact() {
    this.$node.addClass('animated fadeInDownBig');
  }

}


// ES5 version

// var AliDancer = function(top, left, timeBetweenSteps){
//   Dancer.call(this, top, left, timeBetweenSteps);
//   this.$node = $('<span class="ali animated infinite rotateOut"></span>');
//   this.moveAli();
// }

// AliDancer.prototype = Object.create(Dancer.prototype);

// AliDancer.prototype.constructor = AliDancer;


// AliDancer.prototype.moveAli = function(){
//   var styleSettings = {
//     top: this.top,
//     left: this.left
//   };
//   return this.$node.css(styleSettings);
// }


// AliDancer.prototype.lineUp = function(){
//   var styleSettings = {
//     top: 300,
//     left: 900
//   };
//   return this.$node.css(styleSettings);
// }


// AliDancer.prototype.interact = function(){
//   this.$node.addClass('animated fadeInDownBig');
// }