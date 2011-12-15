// Test run with nodeunit
// https://github.com/caolan/nodeunit

var o = require('../observe');

var testObject = {
  init: function(o) {
    this.observe = o;
    
    return this;
  }
};

exports.test = function(test) {
  test.expect(2);
  
  // ADD 'a' to 'o'
  o.add('a', testObject.init(o.events));
  
  test.strictEqual(typeof o.fn.a, 'object', 'Our test object is added to observe');
  
  // Fire an event into "a" creating a data key & value
  o.events.emit('delegate', function(context) {context.a.data = 'success';});
  
  test.strictEqual(o.fn.a.data, 'success', 'A data key/value is added to a');
  
  test.done();
}