// Comperison Operators :- These are used to compare values and return a boolean(true or false).

// Here are some Common Comparion Operators:

// '==' :- Checks if values are equal(loose equality).
// Example-   5 == '5' // true


// '===' :- Checks if values and data types are equal(strict equality).
// Example-   5 === '5' // false.  Bcz other 5 is a string.


// '!=' :- Checks if values are not equal.(loose inequality).
// Example-   5 != '5' // false


// '!==' :- Checks if values and data types are not equal(strict inequality).
// Example-   5 !== '5' // true


// '>' :- Checks if the left value is greater than the right.
// Example-   5 > 3   // true


// '<' :- Checks if the left value is less than the right.
// Example-   3 < 5  // true


// '>=' :- checks if the left value is greater than or equal to the right.
// Example-   5 >= 5  // true


// '<=' :- Checks if the left value is less than or equal to the right.
// Example-   3 <= 5  // true


// Logical Operators :- These are used to combine or reverse conditions. 
// Here are some cpmmon logical operators:

// 1. && (Logical AND) :- Code execute if both conditions are true; otherwise, not execute or skipped.

// Example-
// let a = 5
// let b = 10

// if(a>2 && b==10){
//     console.log(`Executed`);
// }


// 2. || (Logical OR) :- Code execute if at least one of the conditions is true; otherwise not execute.

// Example:-
// let a = 5
// let b = 10

// if(a>2 || b==20){
//     console.log(`Executed`);
// }


// 3. !(Logical NOT) :- Reverses the truth value of a condition. If the condition is true, it becomes false, and if it is false, it becomes true.

// Example:-
// let a = false;
// if( !a ){
//     console.log("Executed");   
// }


// Some unique operators:-

// 1. ??(Nullish Coalescing operator) :-
// => The ?? is used to return the right-hand value when the left-hand value is 'null or undefined'. if the left-hand value is anything other than null or undefined, it returns the left-hand value.

//Example:-
// let num1 = null
// let num2 = 10

// let result = num1 ?? num2 
// console.log(result);

//=> In this type of case it only takes the value that occur first.
let val1 = null
let val2 = 20
let val3 = 30

let theoutput = val1 ?? val3 ?? val2
console.log(theoutput);



// 2. Ternary Operator :- 
//=> It also known as conditional operator. It is a shorthand way of writing an if...else statement. it takes three operands and is used to evalute a condition.

// syntax:-
// condition ? expressionIfTrue : expressionIfFalse;

//Example:-

const price = 100

price != 200 ? console.log("Get It") : console.log("Leave It");


