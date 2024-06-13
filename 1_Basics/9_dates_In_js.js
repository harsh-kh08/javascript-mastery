/*

- 'toLocaleString()' or 'toLocaleTimeString()' methods always makes strings in more readable format.
In this code below have make the local date format as indian readabe format.
- Date is a function 
- DataType of Date object is object => (tyoeOf(myDate)). So we have to always convert it into strings.

*/




let myDate = new Date(); // To Declare and create object of date

// console.log(myDate.toString());// convert date into string
// console.log(myDate.toDateString()); // Covert string into date string
// console.log(myDate.toLocaleString('en-In')); // Convert whole date (date with time) to indian format date string (Locale means in some format that you want)
// console.log(myDate.toLocaleDateString('en-In')); // convert date to indian format date readable string.
// console.log(typeof myDate); // object

// To create your own date -
let myNewDate = new Date(2023,0,11);
console.log(myNewDate.toLocaleString('en-In'));

// To create date in a particular format -
let myOwnDate = new Date("01-11-2023");
console.log(myOwnDate.toLocaleString('en-In'));

// To create Time Stamps

let timeStamp = Date.now(); // Date.now() methods give today's date in milliseconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

