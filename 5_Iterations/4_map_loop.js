/*

Map() - creates a new array with the same length as the original array, where each element is the result of calling a provided callback function on the corresponding element in the original array.

Filter() -creates a new array with only the elements that pass the test implemented by the provided callback function.

*/


// Map() method is used to return same length of array as orginal but it applies function to each and every element to return modified
// elements in array.

// Filter() method is used to return those elements which satisfy a particular condition.

const myNumber  =[1,2,3,4,5,6,7,8,9,10]

const resNum = myNumber.map((num)=>num+10) // Modifies all the element present in the array

// console.log(resNum);


// Chaining

// Always remember result of first chaining will always pass in next chaining

const resNum1 = myNumber.map((num)=>num*10).map((num)=>num+10).filter((num)=>num>100)


console.log(resNum1);