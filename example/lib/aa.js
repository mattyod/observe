module.exports = {
  init: function(o) {
    // Stash a pointer to the event emitter within this context
    this.observe = o;
        
    // Call our local method(s)
    this.emit();
    
    // Expose myself
    return this;
  },
  
  emit: function() {
    var aa = this;    
    
    setTimeout(function() {
      aa.observe.emit('delegate', function(context) {
        context.b.log('event emitted from aa');
        context.b.bb.log('event emitted from aa');
      });
    }, 1000);    
  },
  
  log: function(msg) {
    console.log('method called within aa: ', msg);
  }
};