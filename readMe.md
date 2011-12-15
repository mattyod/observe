#Observe

Observe is a helper module for enabling event driven communication across modules within Node.js applications. Observe on it's own is not a complete solution for event driven application development but when coupled with certain programming patterns, as explained below, I hope it provides a useful starting point.

##Installation

NPM install to come soon hopefully, in the meantime you'll just have to download it.

##How to use

###The example

One way to gain a quick understanding of how Observe works is to download and explore the code in the "examples" folder. In this you can see a very simple app that instantiates a hierarchy of modules and triggers method calls within them via an Observe "delegate" event.

###Roll your own

Below is a step by step guide to building a simple app similar to the example code provided. This is one way of implementing the Observe event pattern but by no means the only way in which the code could be implemented.

First in your applications main file include Observe:

```js
var observe = require('observe');
```

Also include any other modules that you require:

```js
var a = require('a'),
    b = require('b');
```

Now you can add modules that you desire to be part of the Observe event pattern using the 'add' method and passing the Observe event emitter down to that module:

```js
observe.add('a', a.init(observe.events));
observe.add('b', b.init(observe.events));
```

At this point you will need to add certain features to your included modules to make sure that they play nicely with observe and allow for the passing of method calls or event emitters via an Observe "delegate" event.

The initial structure of your module may look something like this:

```js
module.exports = {
    init: function(o) {
        this.observe = o;
        
        // Do some stuff

        return this;
    }
};
```

There are two key concepts to how Observe works here. Firstly we store a pointer to the Observe event emitter locally within our module object:

```js
this.observe = o;
```

Secondly we return the entire context of the object itself to our root module:

```js
return this;
```

At this point our module doesn't really do much so we extend it a bit and add an event emitter and a logging method. Ending up with something like:

```js
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
```

Mimic this structure in module b and you have the very beginnings of cross module event emitting in place.

To see this extended to include sub modules of both a and b take a look round the example provided.

###Prefer to prototype?

As mentioned observe can be used in a variety of ways to suit your coding style, if you prefer a prototypal pattern take a look through the example-proto folder. I aim to revisit this documentation soon and will try to add a more detailed explanation of both examples.

/*TODO*/ - revisit docs