/*

Types of high order loops



- The for-each loop is used in Java to iterate over an array or collection of elements. 
It is a more concise and readable way to iterate over a collection than using a traditional for loop.


- The for...in loop in JavaScript is used to iterate over the properties of an object. 
Maps are a collection of key-value pairs, and they are not objects. 



*/



// for-or loop

// for-or loop on array
const arr = [2,30,40,12]

for(const num of arr)
    {
console.log(num)
    }


// for or loop on strings

const str = "Hello World!"

for(const itr of str)
    {
        console.log(itr);
    }


// Map Data structure
    const map = new Map()

    map.set('In',"India")
    map.set('FR',"France")
    map.set('BN',"Bangladesh")

    //Iteration through Map
    for(const [key,value] of map)
        {
            console.table(`${key} :- ${value}`);
        }
    