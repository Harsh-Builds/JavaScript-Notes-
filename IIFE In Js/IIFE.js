// Immediately Invoked Function Expression (IIFE).

// IIFE is a way of writing code. It ia a Js pattern where a function is defined and immediately invoked.
// An IIFE  is used to execute a function immediately and prevent global scope pollution by keeping variables inside its own scope.

// Syntax :- 

// this syntax also called 'Named IIFE'. Bcz it has a name which is MyName that's why it is called Named IIFE.

(function MyName(){
    console.log(`IIFE executed`);   
})();  // ; it is medetory to use for end the execution of the function. Otherwise if we write any other function or code after it we phase error.

// In this above syntax the first () parenthesis used --> Where we write our function definition. And second () used --> Function Call for immediate execution.


// There is also a 'Unnamed IIFE' Ex:-
// An Arrow function without a function name.

((Greet) => {
    console.log(`I am UnNamed IIFE, ${Greet}`); 
})('Welcome Harsh');
