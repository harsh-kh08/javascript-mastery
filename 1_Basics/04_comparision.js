/* 

- Basic comparision does not have any problem if both sides have number of data taype of same type. Examples=>

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

- Problem arises when we have different operands on both sides. Exmples=>

// console.log("2" > 1);
// console.log("02" > 1);


- Triple equals does not only compares values but also data type.
- Double equals which only equate values as it convert string to number during comparision.

*/

// Simple Comparision
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// Different operands on both sides
console.log("2" > 1);
console.log("02" > 1);

// Comparing null with value (as null value converts itself to zero)
console.log(null > 0);// false
console.log(null == 0);// false
console.log(null >= 0);// true

// Comparing values to undefined(give false)
console.log(undefined == 0);// false
console.log(undefined > 0);// false
console.log(undefined < 0);// false

// === 

console.log("2" === 2); // false