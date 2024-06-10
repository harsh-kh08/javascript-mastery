/*

- How does memory work in javascript?

In older languages, it was our responsibility to reserve the memory as well as free the memory.

- There are two types of memory used in javascript - Stack and Heap
- In Primitive data types, js uses stack memory
- In Reference(Non Primitive) data types, js uses heap memory

Primitive data type variable always return copy of the value
Reference data type (Non Primitive Datatype) always return reference to the object.


*/

// Primitive
let languageName="javascript"

// Reference
let langyageObject = {
    name:"javascript",
    age:8
}

