// Firstly, we will get hold of element in a variable

const form = document.querySelector('form')

// Whenever a form gets submitted, is it wither submitted by post method or get method
// SOo when gets submitted, its value goes into url or goes to server

// But we have to intercept the form before it send values to the server or through url

// To do this, there is a method in events.

form.addEventListener('submit',(event)=>
{
    event.preventDefault();
    
    // To get the value from input feild

const height = parseInt(document.querySelector('#height').value); // Convert string to int, use parse method
const weight = parseInt(document.querySelector('#weight').value); //Convert string to int, use parse method



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
    BMI = BMI.toFixed(2);// For precision after decimal

    // # Method 1

    // const prevElement = document.querySelector('#results');
    // const newElement = document.createElement('div')
    // newElement.setAttribute('id','results')
    // const node = document.createTextNode(BMI);
    
    // newElement.appendChild(node);
    
    // prevElement.replaceWith(newElement);


    // #Method 2
    resultElement.innerHTML=`<span>${BMI}</span>`;
}







})

