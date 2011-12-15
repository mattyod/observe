var AA = require('./aa');

var A = function(o) {
  this.observe = o;

  this.aa = new AA(o);
  
  return this;
};

A.prototype.init = function() {
  this.emit();  
};

A.prototype.log = function(message) {
  console.log('logging in A:', message);
};

A.prototype.emit = function() {
  this.observe.emit('delegate', function(context) {
    context.b.log('from a');
    context.b.bb.log('from a');
  });
};

module.exports = function(o) {  
  return new A(o);
};