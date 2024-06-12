/*


1. SingleTon Object -
const user = new Object();

2. Reference Object
const user = {};



*/

// Code Example - 

// Simple Objects

const user = {}

user.id = "123abc"
user.name = "Sammy"
user.isLoggedIn = false


// Nested objects

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Tom",
            lastname: "Jacks"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


// Optional chaining

console.log(regularUser.fullname?.userfullname.firstname); // Optional chaining is used to check whether the attribute is present or not, Otherwise we have to put if and else.


// Combining Two objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj5 = {obj1, obj2, obj4}// This will not combine object rather the object as a whole will be inserted and it becomes nested c=object
console.log(obj5);

// Combining Two objects using spread operator

const obj = {...obj1 , ...obj2 , ...obj4} // Using spread operator we can combine two or more objects or combine two or more key value pairs.
console.log(obj)

const obj3 = Object.assign({},obj1, obj2, obj4) //Another way of combining objects
// The empty object in above method act as target node and other objects as source node

// Note: We will use spread operator for combining objects most of the time.

// To get all the keys present inside an object
console.log(Object.keys(user));

// Toget all the values present inside an object
console.log(Object.values(user));


// To check whether sn object has certain property?

console.log(user.hasOwnProperty("name")); // This property is important when we get data from backend

