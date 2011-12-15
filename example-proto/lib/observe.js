var Events  = require('events').EventEmitter;

var o = {
  // Fire our requested method(s)
  observe: function(callback) {
    callback(this.fn);
  },
  
  // Store our observe methods here
  fn: {},
  
  // Initiate an events emitter
  events: new Events(),
  
  // Key the requested method into our fn object
  add: function(name, method) {
    this.fn[name] = method;
  }
};

module.exports = (function() {
  o.events.on('delegate', function(event) {o.observe(event);});

  return o;
}());