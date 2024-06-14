/*


- The for-each loop is used in Java to iterate over an array or collection of elements. 
It is a more concise and readable way to iterate over a collection than using a traditional for loop.


- The for...in loop in JavaScript is used to iterate over the properties of an object. 

- We cannot use for in loop over maps because Maps are a collection of key-value pairs, and they are not objects. 
Therefore, you cannot use a for...in loop to iterate over the elements of a map. 


*/





const obj ={
    js:"javascript",
    cpp:"C++",
    rb:"ruby"
}


// Iterate through object - To interate through object we use 'for-in' loop


for (const key in obj) {
    
    // console.log(key)// Print key inside object
    // console.log(obj[key])// Print corresponding value for key
    console.log(`key:${key} value:${obj[key]}`)//This line prints key and corresponding objects
}


// Iterate through array - To interate through array we use 'for-in' loop

const programming=["javascript","ruby","python"];

for (const key in programming) {// Here key works as index
    console.log(programming[key])
}

