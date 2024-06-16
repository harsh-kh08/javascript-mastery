 /*

-  setTimeout is a method which also calls api

- setInterval and setTimeout are not part of core javascript function but function of browser specifically.
So what happens it moves out of calls stack and the function goes to web api to get executed.

- setTimeout means give some time and then perform given work

- setIntervl means give some time and preform given work repeatedly.

Application of setTimeOut - whenver we visit a website, after few seconds pop up is shown. It is an 
application of setTimeOut

 */
  
  
function sayJavascript()
{
    console.log("javascript")
}

function changeheading()
{
    document.querySelector('h1').innerHTML='Best Javascript Notes'
}




// Print javascript in console after particular time
    setTimeout(sayJavascript, 2000)

// Changes heading in page
const reference = setTimeout(changeheading,5000)

// To stop changing head in page , we will use 'clearTimeOut' function

document.querySelector('#stop').addEventListener('click',()=>
{
    clearTimeout(reference);
})

// 



