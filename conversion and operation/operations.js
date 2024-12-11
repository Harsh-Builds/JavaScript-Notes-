/* operation means do plus, minus, multiply, addition of two numbers or more....etc.  */

let value = 8
let negativeValue = -value    // in this we convert our number into a neg number by using - operator
console.log(negativeValue);

// here are some examples of operations :-
console.log(2+2); //addition
console.log(2-2); //subtraction
console.log(2*2); //multiplication
console.log(2**4); // it represent (2 to the power of 4) ans:- 16
console.log(5/2); // Divide
console.log(5%2); // it gives the remainder

//Adding the strings
let name1 = "hello"
let name2 = " Harsh"

let add = name1 + name2
console.log(add);


// Now discuss on some complex situations

console.log("1" + 2); 
console.log(1 + "2"); 
console.log(1 + 2 + "2"); // In this type of case firstly , perform the operation than add the string("2") side by side
console.log("1" + 1 + 2); // But in this case where string at the first , it treat all the operation as the string.

// Increments(++)
// these are two types postfix and prefix.

/* start learning prefix increment */
let score = 100
++score;
console.log(score);  // this method called prefix. The increment operator increments and return the value after incrementing.

// Now here is the detailed example of prefix increment:-
let a = 2
let b = ++a
console.log(a);
console.log(b);
/* END HERE */

/* start learning postfix increment */
let score2 = 100
score2++;
console.log(score2); // this method called postfix. The increment operator increments and return the value before incrementing.

// lets take the same example of prefix
let p = 2
let q = p++
console.log(p);
console.log(q);
/* END HERE */
