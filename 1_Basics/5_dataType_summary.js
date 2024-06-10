/*

- Data Types in javascript are devided into two types 
1. Primitive

# Primitive has been devided into 7 categories : String, Number, Boolean, null, undefined, Symbol, BigInt

2. Reference (Non Primitive) 

# Reference has been devided into three categories : Arrays, Objects, functions
Note: Data Type of Reference is always object

- Data type of Non primitive is always is "object"
- Data type of function is always "functional object"

- Is javascript dynamically typed language or static typed language?


*/



//  Primitive

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3