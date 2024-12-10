"use strict"; // it treats JavaScript codes as newer version

//alert(4+6) // it will give no output because we are using nodejs , not browser.

console.log(4+6); // console.log is a built-in function that allows you to output messages or values to the console.it is commonly used for debugging and understanding what is happening in your code. 

/* Data types :- */
   // How the Data store and access in memory based on it chategarized into 2 types.
   // 1. Primitive,  And 2. Non-Primitive
    
   //=> primitive :- These are call by value . It means we only change into a copy not in original value.
     // 7 types --> String, Number, Boolean, null, undefined, Symbol, BigInt.

// 1. number  -> it have a specific range 2 to power of 53 approximate.
// 2. Bigint  -> eg. 368163818636n , it is used for larger value.
// 3. string  -> eg. "harsh"
// 4. boolean -> true/false
// 5. null    -> it is actually a standalone value & and also a data type
// 6. undefined -> it represent a value which is not assigned but variable is declared.
// 7. symbole -> for uniqueness

//=> Non primitive (Reference type) :- these are data types that store references to its data. Not the copy.
    // 1. Array
    // 2. Objects
    // 3. Functions

// using typeof operator :-
const FruitName= "Mango"

console.log(typeof "harsh"); // typeof is a operator which is used for checking the data type of any operand. the operand can be variable, function or anything.

console.log(typeof 5);
console.log(typeof FruitName);
console.log(typeof undefined); // output comes undefined
console.log(typeof null); // output comes object
