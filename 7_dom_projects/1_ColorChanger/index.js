const buttons = document.querySelectorAll('.button');
console.log(buttons);




const body = document.querySelector('body');
console.log(body);

// We can click an event and take it ina function 


buttons.forEach((button)=>{
    console.log(button)

// We will put event listener at each of the button to listen the events which are being performed
// Whenever a event is performed a objected is created which will be passed over a function
button.addEventListener('click',(event)=>
{
console.log(event.target);
body.style.backgroundColor=event.target.getAttribute('id');
})

});

// Target means from which taget this event comes.

