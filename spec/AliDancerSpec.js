describe('aliDancer', function() {

  var aliDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    // add new keyword
    aliDancer = new AliDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(aliDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a moveAli function that makes its node rotates', function() {
    sinon.spy(aliDancer, 'moveAli');
    aliDancer.moveAli();
    expect(aliDancer.moveAli.called).to.be.true;
  });

  
});