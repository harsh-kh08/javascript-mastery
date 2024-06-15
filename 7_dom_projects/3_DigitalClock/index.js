/*

- The setInterval method in JavaScript is used to repeatedly call a function or execute a code snippet with a fixed time delay between each call.
- This method continues to call the function until clearInterval is called with the interval ID returned by setInterval.


Code:

function greet() {
    console.log("Hello, world!");
}

// Set interval to call greet every 1000 milliseconds (1 second)
let intervalID = setInterval(greet, 1000);

// To stop the interval after some time, use clearInterval
setTimeout(() => clearInterval(intervalID), 5000); // Stops after 5 seconds



*/




const clock = document.querySelector('#clock');

console.log(clock)

/* Remeber the syntax of setInterval 

* Syntax : let intervalID = setInterval(function, delay, arg1, arg2, ...);
* function: The function to execute.
* delay: The time, in milliseconds (thousandths of a second), the timer should wait before the specified function is executed.
* arg1, arg2, ...: Additional arguments which are passed through to the function being executed (not supported in Internet Explorer).

*/

let interval = setInterval(()=>
{
    let date = new Date();
    let time = date.toLocaleTimeString('en-US')   
    clock.innerHTML=time    
},1000);

