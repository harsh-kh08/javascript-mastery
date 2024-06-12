/* Object Destructure and API Introdution */


// Object Destructure

const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "Tom"
}

course.courseInstructor
// In destructuring, we will use variable name same as key =>
// const{courseInstructor} = course 

// In destructuring , we can also use our own variable name as =>
const {courseInstructor: instructor} = course
console.log(instructor);


// JSON notation

//{
    //     "name": "hitesh",
    //     "coursename": "js in hindi",
    //     "price": "free"
    // 
//}

// Difference between JSON and js object is that in JSON keys are  written in form of string.

