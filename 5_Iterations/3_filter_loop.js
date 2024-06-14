/*

- The main difference between forEach and filter is that forEach just loop over the array and executes the callback
but filter executes the callback and check its return value. If the value is true element remains in the resulting array 
but if the return value is false the element will be removed for the resulting array.

- With the help of the filter, we can return value in call back function but it is not possible in forEach loop

*/


const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.filter((nums)=> nums>4);

console.log(newNums)


// By using filter ,we can decode the array of objects.

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// find all the books with genereas History
  const reqBooks = books.filter((book)=> book.genre==='History'); // This means that all the book object in array which has genre as 'History' will
  // only be present in the inside 'reqBooks'.

//   console.log(reqBooks);

  // Find all the books that published after year 2000
const resBooks = books.filter((book)=>book.publish>1999);

// console.log(resBooks);

// Find the books that pulished after year 1995 and have genre as 'History'

const resBooks1 = books.filter((book)=> book.genre==='History' && book.publish>1995)

console.log(resBooks1)
  