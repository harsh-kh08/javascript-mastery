let reference = null

document.querySelector('#start').addEventListener('click',(event)=>
{
    reference=setInterval(changeTime,1000)
})

document.querySelector('#stop').addEventListener('click',(event)=>
    {
        clearInterval(reference)
    })


function changeTime()
{
    const date = new Date()
    const time = date.toLocaleTimeString('en-US');
document.querySelector('h1').innerHTML=time
}

