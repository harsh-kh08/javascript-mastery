const palette = ["#fadadd","#b3d9ff","#e6e6fa","#b0b0b0","#d2b48c","#f5f5dc"];
let reference=null;

document.querySelector('#start').addEventListener('click',(event)=>
{

    if(!reference)
        {
            reference=setInterval(changeColor,1000)
        }
    

})

document.querySelector('#stop').addEventListener('click',(event)=>
{

   clearInterval(reference);
   reference=null;

})

function changeColor()
{

let index = Math.floor(Math.random()*5);
document.querySelector('body').style.backgroundColor=palette[index];

}
