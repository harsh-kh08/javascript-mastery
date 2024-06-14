/*

- If we do not include break statement in any case, then all the cases below the valid cases codes will get executed.

- In JavaScript, values are considered either "truthy" or "falsy" depending on how they behave in boolean contexts (e.g., conditions in if statements). This behavior is essential to understand for controlling flow in programs.

- Falsy Values
These are values that are considered false when encountered in a boolean context:

* false: The boolean value false.
* 0: The number zero.
* -0: Negative zero.
* 0n: The BigInt zero.
* "" (empty string): A string with no characters.
* null: Represents the absence of any object value.
* undefined: Indicates that a variable has not been assigned a value.
* NaN: The "Not-a-Number" value, representing an invalid number.


- Truthy Values


Any value that is not falsy is considered truthy. This includes, but is not limited to:

* Non-zero numbers: Any number other than 0 or -0, including negative numbers.
* Examples: 1, -1, 3.14
* Non-empty strings: Any string with at least one character.
* Examples: "hello", "0", "false"
* Objects: Any JavaScript object, including empty objects ({}) and arrays ([]).
* Symbols: The new primitive type introduced in ES6.
* Functions: All functions are truthy.
* BigInts: Any BigInt value other than 0n.
* Examples: 1n, -1n

*/


const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

// To find whether the object is empty or not 

const obj = {}

if(Object.keys(obj).length==0)
    {
        console.log("Object is Empty")
    }

    /*

    Nullish Coalescing Operator

    The nullish coalescing operator (??) in JavaScript is used to provide a default value when dealing with null or undefined. It is particularly useful when you want to distinguish between null/undefined and other falsy values like 0 or "".
    
    Syntax: 
    
    let result = expression1 ?? expression2;
    
    * expression1: The value to be checked.
    * expression2: The default value to be returned if expression1 is null or undefined.
    
    Null Coalescing is used when we call something from database, so there are times when we get the null values so we used default values instead.

*/




let username = null; let displayName = username ?? "Guest"; console.log(displayName); // "Guest" 
    
    username = "John"; displayName = username ?? "Guest"; console.log(displayName); // "John"

