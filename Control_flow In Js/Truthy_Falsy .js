// In JavaScript, truthy and falsy values refer to how different values behave when evaluated in a boolean context, such as in an if statement.

 // Ex:-
// So in this example we did not give any condition for considering true or false , so how it is evalalute.Now, this type of situation the concept comes Truthy and falsy values. 
 const userEmail = '123harsh@.com'

 if(userEmail){
    console.log("User logged in");   
 } else{
    console.log("User logged out"); 
 }


 // falsy values :- These are the falsy values which are always consider as a false.

 // false, 0, -0, BigInt 0n, ""(empty string), null, undefined, NaN


// Truthy values :-

// All Values are truthy except for the falsy values listed above.
// Some common truthy values:- some values make confusion because they look like falsy values but actually they are truthy values.

// "0", 'false', " "(blank space in the string), {}, [], function(){} empty function.


// How to check Empty array[] in conditions:-

// let marks = []
// if(marks.length === 0){
//     console.log("Array is Empty");
// }

// How to check Empty Object{} in conditions:-

let score = {}

if(Object.keys(score).length===0){    // Now our object convert into an array.
    console.log("Object is empty");
    
}