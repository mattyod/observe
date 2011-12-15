var BB = function(o) {
  this.observe = o;
  return this;
};

BB.prototype.init = function() {
  this.emit();  
};

BB.prototype.log = function(message) {
  console.log('logging in BB:', message);
};

BB.prototype.emit = function() {
  this.observe.emit('delegate', function(context) {
    context.a.log('from bb');
    context.a.aa.log('from bb');
  });
};

module.exports = function(o) {    
  return new BB(o);
};