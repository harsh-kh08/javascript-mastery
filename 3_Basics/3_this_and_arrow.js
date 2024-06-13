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


user.welcome();// Till this call, username in  this current context (current scope) is "Tom"
user.username="Sam"
user.welcome() // Now our username for current context (current scope)is "Sam"

// console.log(this) => We are in node environment now, so the current context is empty



// In earlier days, javacript engine which was present only in the browser which was used to execute js code.

//But now, we have taken out that engine from the browser and named it differently like node or bun etc.

// Whenever the engine that runs in the browser has global object as Window object. That why we are able to capture all the event happening inside browser. We can get it by 'console.log(this)' inside browser console.

// But whenver the engine that runs outside the browser or on your local computer, the global object is null '{}'


// Remember, we can use 'this' to get key value pairs for current context only for objects

// But, we cannot  use 'this' to find the current  context of function. For example 

function ftn()
{
let userName = "Tom";
console.log(this.userName); //  Will return undefined value as 'this' is not used to find current context for a function.
}

// ftn(); 


/*----------------------------------- Arrow Function ---------------------------------------------*/


// Defining Arrow Function

const newUser = ()=>
    {
       let username="Jacks"
    }

    const newUser1 = ()=>
        {
           let username="Jacks"
           console.log(this); // 'This' will not work because it is not used to find current context variables of function
        }

        newUser1();

        // Arrow function with parameters
const addNum =(num1, num2)=>
    {
return num1+num2
    }


    console.log(addNum(4,5));

    // Arrow function with implicit return
const addNum1 = (num1,num2)=> num1+num2;


// In Arrow function if we use curly braces we have to write return keyword otherwise if we use bracket then we don't have to write return keyword


// Implicit Arrow function to return object


const techUser = (name)=>({username:name}); // functiom to return an object using implcit arrow.

const techUser1 = (name)=>({username:this.name}); // username value will be undefined because because name is not present in the current context of object rather it is a variable defined inside a function

console.log(techUser("TOM"));

