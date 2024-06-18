/*

- Default Javascript behaviour is a prototypal behaviour
- If javascript doesn't find what we are searching for, then it looks up layer above layer of javascript

There are certain properties which work in this way like 'this', 

- In javascript we can access prototype from array , strings and even we can access prototype from a normal function.

This implies that everything function is a function as well as object so it is also called as functional object

*/


// Example that function is a an object also -

function add5(num)
{
    return num+5
}

add5.power=2; // Here , we can access a variable as an object, this proves it.

console.log(add5(4))
console.log(add5.power)
console.log(add5.prototype) // Here, we can access prototype, which shows evidence that function in js
// is an functional object

/*

- When we execute console.log (add5.protoype), we got an empty object. This implies that the prototype is the 
'this' of that function.

- Protoype also gives property of the object on which it is applied.

- We can inject our own function inside the existing function using prototype

- Javascript never gives constructor function through classes rather it gives constructor function through 
*/


function createUser(username, score)
{
    this.username = username,
    this.score=score
}


createUser.prototype.increament = function()
{
    this.score++;
    // 'this' is used here to tell the increament function to increase the score of that function
    // which has called it..
    
}

createUser.prototype.printMe = function ()
{
    console.log(`Score is ${this.score}`)
}

//Now the functions have been injected but we have to tell the the variable that functions have been added
// We can tell it using 'new' keyword in front of function


// const var1 = createUser("javascript",25); -> This will throe error because we have not use new keyword
const var1 = new createUser("javascript",25);
const var2 = new createUser("python", 100);
var1.increament()
var1.printMe();
console.log(var1.score);

