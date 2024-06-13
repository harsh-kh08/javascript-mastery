/*

------------------------------------ Numbers ---------------------------------------------------------

- In order to define variable of dataType number as const num = 300.

- JS automatically detect dataType of num as number.

- To explicitly define data type of variable we can do:
const balance = new Number(100);

- To convert a number dataType to String we can do :

console.log(balance.toString());

- If we want a number with a definite precision number,we can set it using 'toFixed()' method.
For example - 
console.log(balance.toFixed(2))


- We have a huge number and we want to represent that number in comma or make it easy to understand. We use
'toLocaleSting()' method. For example - 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // 1,00,000

------------------------------------------------------------------------------------------------

*/


/*

------------------------------------ Math library ------------------------------------------------

- Math is default object and it is itself an object which has a lot of properties.
- In order to find properties of Math obj - Go to terminal and code - console.log(Math);

- To print object with its key value pair and function , we use command - 'console.log(obj)'


*/


const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)