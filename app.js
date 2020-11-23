console.log("Hello World From NodeJs");

const tutorial = require('./Tutorial');

console.log(tutorial.sum(4,5));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());