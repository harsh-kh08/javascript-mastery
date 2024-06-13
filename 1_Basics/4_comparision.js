/* 

- Basic comparision does not have any problem if both sides have dataType of same type. Examples=>

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
console.log(null > 0);// true


//In JavaScript, when comparing null with a number using relational operators (>, <, <=, >=), null is converted to 0. Therefore, the expression null > 0 becomes 0 > 0, which is false.
console.log(null > 0);
console.log(null > 0);


// The == operator in JavaScript performs type coercion. However, null is only loosely equal to undefined and not to any other value. Therefore, null == 0 is false because null is not considered equal to 0.
console.log(null == 0);


// Type coercion in JavaScript refers to the automatic or implicit conversion of values from one data type to another. This occurs when the language attempts to resolve expressions that involve mixed types or when operations are applied to values that are not of the expected type. 
//Type coercion can happen in various contexts, including arithmetic operations, comparisons, and function calls.
// Type Coercison example - console.log(null == 0);



// Comparing values to undefined(give false)
console.log(undefined == 0);// false
console.log(undefined > 0);// false
console.log(undefined < 0);// false

// === 

console.log("2" === 2); // false