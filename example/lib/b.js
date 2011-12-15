var bb = require('./bb');

module.exports = {
  init: function(o) {
    // Stash a pointer to the event emitter within this context
    this.observe = o;
    
    // Call our local method(s)
    this.emit();
    
    // Pass the event emitter further down the chain
    this.bb = bb.init(o);
    
    // Expose myself
    return this;
  },
  
  emit: function() {
    var b = this;    
    
    setTimeout(function() {
      b.observe.emit('delegate', function(context) {
        context.a.log('event emitted from b');
      });
    }, 1000);    
  },
  
  log: function(msg) {
    console.log('method called within b: ', msg);
  }
};