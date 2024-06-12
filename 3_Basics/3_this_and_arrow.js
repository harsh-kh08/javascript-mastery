/*

- This keyword tells us about current context

- This is used to access variables of current context or current scope

*/


const user = {
    username : "Tom",
    price: 1000,
    welcome: function()
    {
        console.log(`${this.username}, welcome to website`);
        console.log(this) // We are inside user object so it will print key value pair for current context
    }
    
}


user.welcome();// Till this call, username value till this current context (current scope) is "Tom"
user.username="Sam"
user.welcome() // Now our username for current context (current scope)is "Sam"

// console.log(this) => We are in node environment now, so the current context is empty



// In earlier days, javacript engine which was present only in the browser which was used to execute js code.

//But now, we have taken out that engine from the browser and named it differently like node or bun etc.

// Whenever the engine that runs in the browser has global object as Window object. That why we are able to capture all the event happening inside browser.

// But whenver the engine that runs outside the browser or on your local computer, the global object is null '{}'


// Remember, we can use 'this' to get key value pairs for current context only for objects

// But, if we cannot  use 'this' inside the context of function. For example 

function ftn()
{
let userName = "Tom";
console.log(this.userName); //  Will return undefined value as 'this' is not used to find current context for a function.
}

// ftn(); 


/*----------------------------------- Arrow Function ---------------------------------------------*/


// Defining Arrow Function

