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


/*
1. console.log("1" + 2);

Output: 12
Explanation: The + operator is used for both addition and string concatenation in JavaScript. When one of the operands is a string, the other operand is converted to a string and concatenation is performed. Here, "1" is a string and 2 is a number. The number 2 is converted to the string "2", and then they are concatenated to produce "12".

2. console.log(1 + "2");

Output: 12
Explanation: Similar to the first example, 1 is a number and "2" is a string. The number 1 is converted to the string "1", and then they are concatenated to produce "12".


3. console.log("1" + 2 + 2);

Output: 122
Explanation: This statement is evaluated from left to right. First, "1" (a string) and 2 (a number) are concatenated to produce "12". Then, the result "12" (a string) is concatenated with 2 (a number), which is converted to the string "2", resulting in "122".


4. console.log(1 + 2 + "2");

Output: 32
Explanation: This statement is also evaluated from left to right. First, 1 and 2 (both numbers) are added together to produce 3. Then, 3 (a number) is concatenated with "2" (a string), converting 3 to the string "3", resulting in "32".
To summarize:

"1" + 2 results in "12" (string concatenation).
1 + "2" results in "12" (string concatenation).
"1" + 2 + 2 results in "122" (string concatenation).
1 + 2 + "2" results in "32" (addition followed by string concatenation).


*/



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