var BB = require('./bb');

var B = function(o) {
  this.observe = o;

  this.bb = new BB(o);

  return this;
};

B.prototype.init = function() {
  this.emit();  
};

B.prototype.log = function(message) {
  console.log('logging in B:', message);
};

B.prototype.emit = function() {
  this.observe.emit('delegate', function(context) {
    context.a.log('from b');
    context.a.aa.log('from b');
  });
};

module.exports = function(o) {
  return new B(o);
};