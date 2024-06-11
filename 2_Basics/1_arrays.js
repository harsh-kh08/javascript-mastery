/*

- In javascript, arrays are resizeable.

- In js, arrays make shallow copy.

- Whenver you need to find methods or key-value pairs in objects, you have to type it in the browser compiler and then expand it to see its properties and functions.

- The .slice() method returns a new array containing a subset of the original array, while the splice() method modifies the original array by removing or replacing elements and/or adding new elements.

*/

// Code

const arr = [1,2,3,4];

console.log(arr);

console.log(arr.includes(3)); // Check whether given element is present in array or not.
console.log(arr.indexOf(2)); // Returns the index of a element in given array.
console.log(arr.join())// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.
// The join() method also change the data type from object to string.


// Difference between slice and splice


console.log(arr.slice(1,3));
console.log("A : ",arr); // slice method make changes in copy of array

console.log(arr.splice(1,3));
console.log("B : ",arr); // splice method changes the original array