# Project - Color Change

# Solution Code

```javascript
const buttons = document.querySelectorAll('.button');
console.log(buttons);




const body = document.querySelector('body');
console.log(body);



buttons.forEach((button)=>{
    console.log(button)


button.addEventListener('click',(event)=>
{

console.log(event.target);

body.style.backgroundColor=event.target.getAttribute('id');

})

});

```