// Symbol data type example

let id = Symbol('234')
let secondId = Symbol('234')
console.log(id===secondId);  // both are have uniqe symbol that's why the answer is False.


// Number data type example
console.log(typeof 5);

// String data type example
const FruitName= "Mango"
console.log(typeof FruitName);

// Bollean data type example
const score = 1
const score2 = 1
console.log(score===score2);
 
//BigInt data type example
const BigNumber = 234567864n
console.log(BigNumber);
console.log(typeof BigNumber);



//null data type example
const temp = null
console.log(temp);
console.log(typeof null);

//undefined data type example
let age;
console.log(age);
console.log(typeof age);

//Array example :- array are the type of variables that hold multiple values.
const marks = [20,30,40,50];

// Object example :- An object is a collection of properties. Basically it store the propertie's name like(name, age). And also store the data of that property like("Harsh", 18).
let MyObj = {
    name: "Harsh",
    Myage: 18,
}

//function example:- It is a reusable block of code designed to perform a specific task. We can define it once and use it multiple times by calling it.
function greet() {
    console.log("hello, I'm Harsh");   
}