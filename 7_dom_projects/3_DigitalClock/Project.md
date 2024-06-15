# Project - Digital Clock

## Code 

```javascript

const clock = document.querySelector('#clock');

console.log(clock)


let interval = setInterval(()=>
{
    let date = new Date();
    let time = date.toLocaleTimeString('en-US')   
    clock.innerHTML=time    
},1000);

```
