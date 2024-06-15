# Project - BMI Calculator

## Code 

```javascript

const form = document.querySelector('form')


form.addEventListener('submit',(event)=>
{
    event.preventDefault();
    


const height = parseInt(document.querySelector('#height').value); 
const weight = parseInt(document.querySelector('#weight').value); 


const resultElement = document.querySelector('#results')

if(height===''||height<0 || isNaN(height))
    {
resultElement.innerHTML =  `Enter a valid height : ${height}`
    }

    else if(weight===''||weight<0 || isNaN(weight))
        {
    resultElement.innerHTML =  `Enter a valid weight : ${weight}`
        }
    

else
{
   
    let BMI = height/(weight*weight);
    BMI = BMI.toFixed(2);


    resultElement.innerHTML=`<span>${BMI}</span>`;
}

}) 
```