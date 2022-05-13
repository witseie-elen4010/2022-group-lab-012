# JavaScript and Node JS Style Guide
* Reference :https://www.geeksforgeeks.org/javascript-style-guide-and-coding-conventions
* Reference: https://github.com/felixge/node-style-guide 


## Introduction
* Below are the JavaScript coding style guidelines used.

## Indentation
*  Indent code using two spaces & the code must not end with trailing whitespaces.

function xyz{
  something();
}

## Spaces and brackets
* Blank spaces should always be used in the following circumstances: 

   - A keyword followed by ‘(‘ or ‘)’ must provide whitespaces before and after it.
     if (condition) {
   - All keywords like ‘function’, ‘typeof’ etc needs extra attention for whitespaces & a space provided after it. 

let integer = function (
    value,
    default_value
) {
    value = resolve(value);
    return (10*value);
};


## Variable declaration
* All variable names start with a letter.

## Camel casing for identifier names
* Use camelcase for the identifier.

## Loops and Control Structures
* Always follow whitespace after an identifier of control statements. 
* Always provide whitespace & linebreak after the ';' semicolon.
* Always provide a whitespace after every ',' coma.

if (condition1 || condition2) {
  action1();
}
else if (condition3 && condition4) {
  action2();
}
else {
  defaultAction();
}

## Comments

* Use line comments, not block comments.


// Set k to zero.
     
    k = 0;


## Functions
* Write small functions
 
## Name closures
* Give your closures a name

/* Recommended*/

req.on('end', function onEnd() {
  console.log('winning');
});

req.on('end', function() {
  console.log('losing');
});

## No nested closures 
/* Recommended*/
setTimeout(function() {
  client.connect(afterConnect);
}, 1000);

function afterConnect() {
  console.log('winning');
}


/*Not Recommended*/
setTimeout(function() {
  client.connect(function() {
    console.log('losing');
  });
}, 1000);

## Method chaining 
One method per line should be used to if you want to chain methods

/* Recommended */

.findOne({ name: 'foo' })
  .populate('bar')
  .exec(function(err, user) {
    return true;
  });

 /*Not Recommended*/
 User
.findOne({ name: 'foo' })
.populate('bar')
.exec(function(err, user) {
  return true;
});

User.findOne({ name: 'foo' })
  .populate('bar')
  .exec(function(err, user) {
    return true;
  });

User.findOne({ name: 'foo' }).populate('bar')
.exec(function(err, user) {
  return true;
});

User.findOne({ name: 'foo' }).populate('bar')
  .exec(function(err, user) {
    return true;
  });


 