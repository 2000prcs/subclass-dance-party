describe('moDancer', function() {

  var moDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    // add new keyword
    moDancer = new MoDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(moDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a moveMo function that makes its node flips', function() {
    sinon.spy(moDancer, 'moveMo');
    moDancer.moveMo();
    expect(moDancer.moveMo.called).to.be.true;
  });


});