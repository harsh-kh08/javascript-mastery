/*

- Scope comes with function and if-else statements

- All the variables declared inside scope are called local scope.

- All the variables declared outside the scope are called global scope.

- We wil not use var because var is functioned scope while let is block scope

- Global scope in browser console is different than global scope in node.

- Variables declared in global scope can be accessed inside local scope

- But variables declared inside local scope cannot be accessed outside.

*/


// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}

console.log(a);
// console.log(b);// Will not print


// Nested Functions Scopes
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



/*------------------------- Hoisting in Javascript ------------------------------*/

console.log(addone(5)) // This function will be executed

function addone(num){
    return num + 1
}



addTwo(5) // This function call will not be executed as it is declared in differently manner

const addTwo = function(num){
    return num + 2
}