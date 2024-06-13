// Immediately Invoked Function Expression (IIFE)

/*



Suppose we have a file that has database connection. We want as our appliction starts, our database connection also gets started immediately so for that we need IIFE.


Sometimes when we declare some variables in function , we don't want our global variables to pollute our code present inside our function, so we need IIFE.



*/

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // Semicolon needed to end or stop execution of IIFE at certain point

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Postgresql')

// Now using iife we protect our function to get polluted from global scope.

