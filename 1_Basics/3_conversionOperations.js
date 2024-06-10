/*

- Whenever we take input in form, it happens that we don't know what the data type of value is inputed ?
"NaN" stands for Not A Number
So we use typeOf()
- If we want to convert String into a number we use Number() method.
- Suppose we get a value as "33aa", if we convert it into the number using Number(), we get value as "NaN"
but the data type will become number.
- If we have variable with value as "null" and when we convert it into Number then the value becomes 0
- If we have variable with value as "undefined" and when we convert it into Number then the value becomes "NaN"
- If we have variable with boolean value as true and when we convert it into Number then the value becomes 1

*/

let score = "JavaScript"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "JavaScript"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************


/*




*/



let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);



// Types of concatenation 
let str1 = "Mastery"
let str2 = " JavaScript"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); 
// console.log(1 + "2"); 
// console.log("1" + 2 + 2); 
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter);


// In prefix, the the value of variable increases before usage(++gameCounter) => 101
// In suffix, the value of variable increases after usage(gameCounter++) => 100


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion