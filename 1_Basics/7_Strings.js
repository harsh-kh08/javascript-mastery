/*

- We can use single quotes or double qoutes to represent a string.

- We use '+' operator to concatenate two strings. For ex: console.log("javascript" + "ES6").

- But there will be case when we qant to concatenate or put together different dataTypes so we will use backtick(``).

- Instead of using '+', we will use backtick because it is the modern method of concatenation. 

For ex: console.log(`Hello, my name is ${variable1} and my repo count is ${variable2}`).

- In backtick, we actuallly make placeholders.
 
- To remove whitespaces from string, we use trim() method.

- In orer to replace particular part of a string, we ise replace() mehtod.

- In order to split the string on basis of seperator like space or dash('-'), we use .split() method. 


*/





const name = "Javascript"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('javascript-jc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   javascript    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));