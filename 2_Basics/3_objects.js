/*

- Objects can be declared in two ways:

1.SingleTon - using constructors
2.Literals

- Whenver we want to reference same object, we use this keyword.


*/

// Symbol declaration

const mySymbl = Symbol("key");

// Interview Question - Create a symbol and as key of an object.

// Using Object Literals


const jsUser={
    name:"Tom",
    "full_name": "Tom Jacks",
    [mySymbl]: "key1", // this is the syntax to use symbol as key inside object
    age: 18,
    location:"Jaipur",
    email:"tom@gmail.com",
    isLoggedIn:"false",
    lastLoginDays:["Sunday","Monday"]
}

// We can declare objects in two types :


console.log(jsUser.email) //  Using '.' operator

console.log(jsUser["email"]) // Using index operator

console.log(jsUser["full_name"]); // When there is key in string form than we will access the value using index operator. We cannot use . operator

console.log(jsUser[mySymbl])// When there is key in form of symbol  than we will access the value using index operator, We cannot use . operator

jsUser.email = "javascript@chatgpt.com"
// Object.freeze(jsUser) // When we want our objects value should not change in future we freeze it.
jsUser.email = "javascript@microsoft.com"
console.log(jsUser);



// we can add function to the object using . operator
jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // Whenver we want to reference same object, we use this keyword.
}

console.log(jsUser.greeting()); // greeting() function executes
console.log(jsUser.greetingTwo()); // greetingTwo() function executes


console.log(jsUser.greeting) // To get reference of a function, we simply write the function without constructor or bracket so that it doesn't executes and only returns the reference.