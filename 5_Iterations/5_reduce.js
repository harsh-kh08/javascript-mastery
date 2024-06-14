/*

Reduce


*/

// Reduce is used to add total of given numbers

// It is used at the time of calculating total price of products in the cart

const num = [1,2,3];



const myTotal = num.reduce((accumulator, currentValue)=>{
    console.log(`acc: ${accumulator} and currValue: ${currentValue}`);
    return accumulator+currentValue
},0);


console.log(myTotal);

// rewriting using arrow function
const myTotal1 = num.reduce((accumulator, currentValue)=>accumulator+currentValue,0);
console.log(myTotal1);



const shoppingCart = [

{
    itemname: "jsCourse",
    price:999
},
{
    itemname: "pythonCourse",
    price:2999
},
{
    itemname: "rubyCourse",
    price:3999
}

]


let totalValue = shoppingCart.reduce((acc,item)=>(acc+item.price),0);

console.log(totalValue)