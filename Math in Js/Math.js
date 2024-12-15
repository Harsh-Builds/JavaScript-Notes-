// In Js, Math is a built-in object. It provides mathemetical constants, functions, and methods to perform calculations.
// It used to perform complex calculations like finding square roots, trigonometric functions, etc.
// It is used to generate Random Numbers.
// It is used to work with constants like Pi(3.14) or Euler's number(e).


console.log(Math);  // Use console.log(Math); in the browser console to see all available methods and properties of Math Object.
console.log(typeof Math);

// So, Here are some method that are mostly used Of Math :-

// Math.abs() :-
// It is used to return the absolute value of a number(eg., The number without it sign.)
console.log(Math.abs(-5));
console.log(Math.abs(3));


// Math.round() :-
// It is used to round a number to the nearest whole number.
console.log(Math.round(6.3));
console.log(Math.round(6.7));
console.log(Math.round(4.2));


// Math.ceil() :-
// It rounds the number towards the next higher integer. In this the number after decimal point not metter.
console.log(Math.ceil(1.2));
console.log(Math.ceil(2.9));
console.log(Math.ceil(5.3));


// Math.floor():-
// It rounds the number towards the next lower integer. In this the number after decimal point not metter.
console.log(Math.floor(1.2));
console.log(Math.floor(2.9));
console.log(Math.floor(5.3));

// Math.min() and Math.max()
// min used for finding minimum value. Max for maximum value.
console.log(Math.min(2,6,9,4,1));
console.log(Math.max(2,6,9,4,1));


// Math.random() :- This ia very usefull and important method.
// It generate a random floating-point number between 0 to 1. But the nubmer can be 0, but it cannot be 1. 
// 0, 0.1, 0.2,........0.9.

console.log(Math.random());

// So here is a formula that we can use to generate a random value between any numbers :-
// Let's take an example:-

// Suppose we want to roll a dice, A dice can give a random number between 1 to 6. So how we can generate number between 1 to 6 by using Math.random().

let minimum = 1;  // A Dice have minimum no. 1
let maximum = 6;  // And maximum 6.

console.log(Math.floor(Math.random()*((maximum-minimum)+1)+minimum));

// Output:- Now it generate a number between 1 to 6. 

// Let's breakdown how it is work:-

// Firstly, Math.floor():- Convert the result or output towards the lower number without any decimal point. Ex:- If the output comes 3.7, than it returns 3.

// second, Math.random():- it only generate a random number between 0, 0.1 to 0.9.
    // Ex:- Number is 0.1

// third, * it is used for multiplication. :- random number multiply by ((maximum-minimum)+1).
    // Ex:- 0.1 * [(6-1)+1]  => 0.6

// fourth, ( 0.6 +  minimum ) 
    // Ex:- 0.6 + 1  => 1.6

// finally, Math.floor convert this number :- Math.floor(1.6) => 1. 

   // S0, Output comes 1.