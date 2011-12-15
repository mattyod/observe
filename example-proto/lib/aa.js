var AA = function(o) {
  this.observe = o;
  return this;
};

AA.prototype.init = function() {
  this.emit();  
};

AA.prototype.log = function(message) {
  console.log('logging in AA:', message);
};

AA.prototype.emit = function() {
  this.observe.emit('delegate', function(context) {
    context.b.log('from aa');
    context.b.bb.log('from aa');
  });
};

module.exports = function(o) {    
  return new AA(o);
};