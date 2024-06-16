document.addEventListener('keypress',(event)=>
{

document.querySelector('#insert').innerHTML=`key: ${event.key} ,
keyCode: ${event.keyCode}, code:${event.code} `
})