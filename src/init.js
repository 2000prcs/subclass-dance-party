$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancer = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerFunction = window[dancer];
    
    // make a dancer with a random position

    var dancer = new dancerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    
  });
  
  $('.lineup').on('click', function(event) {
     for(var i = 0; i < window.dancers.length; i++){
        window.dancers[i].lineUp();
      } 
  });
  
  
  $('.interact').on('click', function(event) {
      for(var i = 0; i < window.dancers.length; i++){
        if(!window.dancers[i+1]){break;}
        if((window.dancers[i].left - window.dancers[i+1].left) > 200)
          window.dancers[i].interact();
      } 
  });


});

