// "Curly braces `{}` define a scope when used with functions or `if-else` statements, but when used in objects, they represent the object itself, not a scope."

// "In JavaScript, the concepts of scope mainly revolve around three keywords: `var`, `let`, and `const`."  

// const & let :- these both are block-level scope. Its means they work only within the {} (scope) where they are declared. 
// var:- var has function or global scope.

// Ex-1
var c = 456

if (2===2) {            // "An `if` statement executes its block of code only when the condition is true." 
    let a = 100
    const b = 200
    var c = 300 //  (var c = 300 )equivelent to (c = 300), problem occur same in both ways.
}

// console.log(a);  // there is no output comes it shows a error that the 'a' is not defined which is correct.  
// console.log(b);  // same aplly on b, b also not defined.

console.log(c);    // but c give ouput bcz variable `c` has a var keyword it means it is a global variable.
                   // And change into a global variable aplicable throughout the everywhere in the program.
                // It is a very major problem that's why always avoid to use var keyword while declaring a variable.


// Ex-2   // they both are different bcz of scope{}. 
let a = 20

if(true){                           // This `a` variable tottaly different from the outer `a`, bcz it declared under the scope and have let type of variable.
    let a = 30
    console.log(`inner value :`,a);
    
}
console.log(`Outer value :`,a);     


// **Important noted point** :- "The global scope in the browser console is different from the global scope in code environments like Node.js." it means it behave differently depends on where we use it browser console or code environment.


// Let's discuss how scope works in a nested functions :-

// Important note:- A child function can access the parent function's variable. But a parent functon not.

function first(){            // This is called `Parent Function `
    const Myname = "Harsh"
    // const MyId = "haaa"
    function Second(){      // This is called our `child function` bcz its create under the parent function.
        const MyId = "Coding"   // Declare a variable of const type.
        console.log(Myname);  // A child function can access the parent function's variable.
    }
    // console.log(MyId);   // It will give error bcz, we can not access a block-level scope variable outside it's scope. It means, also a parent function can not access the block-level child function's variable. But a child function can access the variable of the parent function.
    Second()   // Here, we call our child function.
}
first()  // here we call our main or parent function to see the outputs.



// Let's discuss how scope works in a nested if conditons :-
// All same conditions apply on it like as function.

if (true) {                         // parent if .
    const myName = "Harshsaini"
    if(true){
        const MyId = " Coder"
        console.log(`${myName}${MyId}`);    // Child if scope can access the parent.
    }
    // console.log(MyId);  // we can not access the local scope(block scope) variable outside its scope.
    
}
// console.log(myName);  // we can not access the local scope(block scope) variable outside its scope.



// ************************************************************************************


// A small overview of declaration of functions in 2 different ways:-

// let create a function in both ways that perform a task which is, when we enter a number it gives the next number of that value(eg. the no. is 10 it gives 11.) 

// Fisrt method :- 
//=> In this method we see that we can access the values or function before declaring the function.

console.log(FisrtAddNum(10)); // here we access the func. before declaring it.

function FisrtAddNum(num){   // here we declare the function.
    return num + 1
}

// Second method :-
// => In this method, we stored  Function into a variable. And try to access it before declaration and initialization.
// => It shows error bcz we can not acces a variable before initialization.

    console.log(SecondAddNum(10)); // here we access the func. before declaring it.

    let SecondAddNum = function(num){   // here we declare the function and store it into a variable.
        return num + 1
    }  
    // console.log(SecondAddNum(10));  // After initialization we can access it.