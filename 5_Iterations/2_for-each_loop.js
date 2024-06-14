/*


- There are some loops which are a part of the property of arrays. For example: 'forEach' loop

-Syntax for ForEach loop - 
arr.forEach(call_back function);

*/


// For each loop is a property of arr in js, which helps in to iterate over current array and have a callback function which 
// helps in to perform tasks using that values
const coding = ["javascript", "ruby", "python", "cpp"];

// coding.forEach((language)=>
// {
// console.log(language)
// })


// passing function in for each loop

function print(value)
{
    console.log(value);
}

coding.forEach(print);// Always remember while passing function in forEach loop we have to pass only the reference , otherwise if we
// pass function execution(print()) it will throw error.

//For each loop is very useful in traversing array of objects (Very useful in decoding database json response)

const myCoding = [
    {
        language:"javascript",
        languageFileName:"js"
    },
    {
        language:"python",
        languageFileName:"py"
    },
    {
        language:"ruby",
        languageFileName:"rb"
    }
]

myCoding.forEach((obj)=> //for-each loop to iterate over array
{
    for (const key in obj) { // for-in loop to iterate over key value pairs in object
        
            console.log(`Key: ${key} , Value: ${obj[key]}`);
        }
    }
)
