var aa = require('./aa');

module.exports = {
  init: function(o) {
    // Stash a pointer to the event emitter within this context
    this.observe = o;
        
    // Call our local method(s)
    this.emit();
    
    // Pass the event emitter further down the chain
    this.aa = aa.init(o);
    
    // Expose myself
    return this;
  },
  
  emit: function() {
    var a = this;    
    
    setTimeout(function() {
      a.observe.emit('delegate', function(context) {
        context.b.log('event emitted from a');
      });
    }, 1000);    
  },
  
  log: function(msg) {
    console.log('method called within a: ', msg);
  }
};