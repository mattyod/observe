var o       = require('./lib/observe'),
    A       = require('./lib/a'),
    B       = require('./lib/b');


module.exports = (function() {
  // Create new objects
  var a = new A(o.events);
  var b = new B(o.events);
  
  // Add them to 
  o.add('a', a);
  o.add('b', b);
  
  // Or call them directly from root
  console.log('*******************************************************');
  console.log('*************** CALLING METHODS DIRECTLY **************');
  console.log('*******************************************************');
  
  a.log('direct method call from root');
  a.aa.log('direct method call from root');
  b.log('direct method call from root');
  b.bb.log('direct method call from root');
  
  console.log('*******************************************************');
  console.log('************** CALLING METHODS WITH EVENTS ************');
  console.log('*******************************************************');
  
  b.init();
  b.bb.init();
  a.init();
  a.aa.init();

}());