// Javascript Execution Context

/*

-------------------- Global Execution Context -------------------------------------

- When java file is executed, global execution context is built .
And this global execution context is referenced through 'this' keyword.

- Interview Question

- Difference between JEC in browser environment and JEC in Node environment

* In JEC of browser, the 'this' refers to window object
* In JEC of Node environment , the 'this' refers to empty object

-------------------- END ----------------------------------------------------------------

------------------------- Functional Execution Context -------------------------------
- 
------------------------- END ----------------------------------------------------------

- Javascript code is executed two phases :

1st phase - Memory creation phase (Creeation Phase)

2nd phase - Execution phase


Steps to execute js code - 

1. Global Execution (Global environemnt) - The code is run through this global execution and global execution is allocated to 'this' keyword.

2. Memory creation phase - All the variables from the code is picked and memory is assigned to them and value is given as undefined to them.
In this phase, we also define function.

3. Execution Phase - Assign values to the variables and for every execution of function, we have to run Memory creation and Execution phase.



*/

