/*
Concept - 

- Promises object is like real world future promise to do some task in future.
- The task can be completed in future or not can not be completed on future.

- There are two part in promise :

1. Create Promise
2. Consume Promises

1. Create Promise

*  Promise object constructor takes a call back function as a parameter, which promises to do task in future

2. Consuming Promise

* '.then()' function of promise is directly related to resolve() functional parameter in call back function of Promise object.
In order to connect resolve to .then(), we have to call resolve() function in async task of Promise 
* '.then()' function contains a callback function. This callback function of 'then()' function executes or returns some value only when async promise task is completed or resolved

* '.catch()' function of promise is directly related to reject() functional parameter in call back function Promise object.
In order to connect reject to .catch(), we have to call reject() function in async task of Promise 
* '.catch()' function contains a callback function. This callback function of 'catch()' function executes or returns some value only when async promise task is not completed or rejected



- Always remember Promise object always return something , either to then() function (using resolve())
or to catch() function (using reject())



*/

// 1st Promise 

// - Create Promise

// Remember 'Promise' is an object and it's constructor takes call back function as parameter

const promise = new Promise(function(resolve,reject)
{

// Do all the async task here

// DB calls, cryptography, network calls

setTimeout(() => {
    console.log('Async task is completed')
    resolve();
}, 2000);


}) 


// //- Consuming Promises

promise.then(function()
{
    console.log('Promised is consumed');
})

// ------------------------------------------ 1st Promise ends here ------------------------------------------------------

// ------------------------------------------ 2nd Promise ends here ------------------------------------------------------


new Promise((resolve,reject)=>
{

     // Here always perform async task only
    setTimeout(()=>
    {
        console.log("Async Task 2 is completed")
        resolve(); 
    },4000)

}).then(()=>
{
    console.log('PROMISE 2 is consumed');
})


// ------------------------------------------ 2nd Promise ends here ------------------------------------------------------


// ------------------------------------------ 3rd Promise starts here ------------------------------------------------------


const promiseThree = new Promise((resolve,reject)=>
{

// Perform async task

setTimeout(()=>
{

console.log('Async Task 3 executed')
resolve({username:'javascript', email:'javascript@gmail.com'})

},2000)


})


promiseThree.then((obj)=>
{
console.log(`name : ${obj.name}, email : ${obj.email}`);
console.log('Promise 3 is consumed')
})


// ------------------------------------------ 3rd Promise ends here ------------------------------------------------------


// ------------------------------------------ 4th Promise starts here ------------------------------------------------------

//Created Promise
const promiseFour = new Promise((resolve,reject)=>
{

setTimeout(()=>
{
    let error="false"
    if(error)
        {
            console.log('Async Task 4 is completed')
            resolve({name:'javascript',email:'javascript@gmail.com'})
        }
        else
        {
            reject('Error in executing Async Task 4')
        }
},2000)

})


// Consumed Promise

// In this promise utilization, we have use chaining method. In this chaining method what ever er return
// in then will passover to next chained then as parameter.

promiseFour
.then((obj)=>
{
    console.log(obj)

    return obj.name
})
.then((username)=>
    {
        console.log(username)
        console.log('Promise 4 has been completed')
    })
.catch((string)=>
{
    console.log(string)
})
.finally(()=>
{
console.log('Promise is either resolved or rejected')
})


// ------------------------------------------ 4th Promise ends here ------------------------------------------------------


// ------------------------------------------ 5th Promise starts here ------------------------------------------------------




const promiseFive = new Promise((resolve,reject)=>
{
//Execute Async Tasks using timeInterval or timeOut

setTimeout(()=>
{

let error=false;

if(!error)
    {
        console.log('Async Task 5 has been completed')
        resolve({username:'javascript',email:'javascript@gmail.com'})
    }

    else
    {
        reject('Error in executing task 5')
    }

},2000)

})

/*

Async await functions are like .then / .catch function . It waits for a period of time till the work gets
executed fully then executes other wise error

'setInterval' function used inside callback function of 'Promise' is async function so we use async in declaration of function
'then' act as await or waiting for return value
*/





async function consumePromiseFive()
{
    try {
        const response = await promiseFive
    console.log(response)
    } catch (error) {
        console.log(error)
    }
    
}

consumePromiseFive()

// ------------------------------------------ 5th Promise ends here ------------------------------------------------------


// ------------------------------------------ Fetch API ------------------------------------------------------


// Sytax 1: Using async and await

async function getAllUsers() // We are performing async task so keyword async is used
{

/* A Promise is an object representing the eventual completion or failure of an asynchronous operation.
Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them.*/


try {
    

    const response =  await fetch('https://api.github.com/users/harsh-kh08')

    // fetch method returns promise ot it is itself an promise object
    // we have consumed promise by assigning it to a const 

    // It can now return a value or error
const data = await response.json() // .json() method also takes a lot time to perform task
console.log(data)

} catch (error) {
    

    console.log(error)
}




}

// getAllUsers();


// 2nd Syntax using .then() and .catch() method

fetch('https://api.github.com/users/harsh-kh08')
.then((response)=>
{
    console.log(typeof response)
return response.json()
})
.then((data)=> // this then will wait till the response is converted to json
{
console.log(data)
})
.catch((error)=>
{
    console.log(error);
})

