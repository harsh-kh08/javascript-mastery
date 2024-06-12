/*

- To understand functions, we need to understand memory managemwnt in js first.

- Function means packaging the lines of codes in one place

- When we are defining the function, the variables which we pass are called parameters

- 

*/

// Function declaration and defination

function print()
{
    console.log("javascript");
}

console.log(print) // This is function reference (Only the name of function is function reference)
print() // To execute function we use paranthesis



function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result)


function userLoggedIn(user)
{
    return `${user} logged in`
}

const message = userLoggedIn("jsUser");

console.log(message);

// To pass default value in function, when user does not input anything inside function :

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}


// If we have multiple arguments inside a function, we use rest operator(same as spread but use case different

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))


// Object as a parameter inside the function
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


