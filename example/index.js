var o       = require('./lib/observe'),
    a       = require('./lib/a'),
    b       = require('./lib/b');

module.exports = (function() {
  // Initialise modules within the observer
  o.add('a', a.init(o.events));
  o.add('b', b.init(o.events));  
  
  // Or call them directly from root
  console.log('*******************************************************');
  console.log('*************** CALLING METHODS DIRECTLY **************');
  console.log('*******************************************************');
  
  a.log('direct method call from root');
  a.aa.log('direct method call from root');
  b.log('direct method call from root');
  b.bb.log('direct method call from root');
  
  console.log('*******************************************************');
  console.log('************* CALLING METHODS WITH EVENTS *************');
  console.log('*******************************************************');
}());