// ES6 version

/**
 * ES6 Solution explained
 *
 * JavaScript’s global object (window in web browsers, global in Node.js)
 * is more a bug than a feature, especially with regard to performance.
 * That’s why it’s not surprising that ES6 introduces a distinction:
 *
 * All properties of the global object are global variables.
 * In global scope, the following declarations create such properties:
 *   - `var` declarations
 *   - Function declarations
 *
 * But there are now also global variables that are not properties of the global object.
 * In global scope, the following declarations create such variables:
 *   - `let` declarations
 *   - `const` declarations
 *   - Class declarations
 *
 * Source: http://www.2ality.com/2015/02/es6-scoping.html
 *
 * In this sprint, we use the `window` object to dynamically select the
 * constructor function to be instantiated. Because of the rule above,
 * we have to use an anonymous class expression with the `var` keyword
 */

var Dancer = class {
  
  constructor(top, left, timeBetweenSteps){
    this.$node = $('<span class="dancer"></span>');
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
  }

  step(){
    setTimeout(() => {this.step()}, this.timeBetweenSteps);
  }

  setPosition(){
    let styleSettings = {
      top: top,
      left: left
    };
    return this.$node.css(styleSettings);
  }
}



// ES5 version 

// // Creates and returns a new dancer object that can step
// var Dancer = function(top, left, timeBetweenSteps){
//   this.$node = $('<span class="dancer"></span>');
//   this.top = top;
//   this.left = left;
//   this.timeBetweenSteps = timeBetweenSteps;
// }

// Dancer.prototype.step = function(){
//   // version 1 (capture 'this' as context)
//   var context = this;
//   setTimeout(function () { context.step() }, this.timeBetweenSteps);

//   // version 2 (bind anonymous function with 'this')
//   //setTimeout(function(){this.step()}.bind(this), this.timeBetweenSteps);
// }

// Dancer.prototype.setPosition = function(top, left){
//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   return this.$node.css(styleSettings);
// }


