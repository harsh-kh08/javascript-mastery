/*

Q. Suppose we are given a string and we want a property whih gives length of the string.
Note that we want true-length in which there is no space
 
Solve it by injecting function in String object through prototype

*/

// let myName= "javascript   "

// console.log(myName.trueLength)


let myHeroes = ["spiderman","thor"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function()
    {
console.log(`Spider Power is ${this.spiderman}`) // we have use this in order to tell function that it is refering to username variable of the object
// If we don't use 'this' then it will search for spiderman variable inside the function scope

    }
}

// Now we want our own special functionality to be added inside myHeroes.
// So we will use Object.prototype to add functionality

Object.prototype.hero = function ()
{
    console.log('All heroes are good');
}

heroPower.hero()


// We can apply this injection of function thorugh prototype on other objects like Arrays, Strings, Objects,


//  --------------------------------------------- 'new' Keyword -----------------------------------------

/* 

Here's what happened behind the scenes when the new keyword is used:

- A new object is created: The 'new' keyword initiates the creation of a new javascript object

- A prototype is linked: The newly created object gets linked to the prototype property of the constructor 
function. This means that it has access to propertirs and methods defined on the constructor's prototype

- The construcotr is called: The constructor function is called with the specified arguments nd this is bound to
the newly created object. If no explicit return value is specified from the constructor , Javascript resumes this,
the newly created object,  to be the intended return value

- The new object is returned: After the construction function has been called , if it doesn't return a non-primitive value,
(object,array,function,etc), the newly created object is returned.









*/