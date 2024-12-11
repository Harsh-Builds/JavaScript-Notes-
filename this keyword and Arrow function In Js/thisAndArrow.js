//Firstly lets discuss on 'this' keyword:-

// Basically, In JavaScript, the this keyword refers to the current context in which it is used.
// Example:-
// Using this keyword in Objects:-
const Info = {              // the current context is the information and values wrriten within the scope.
    userNAme: "Harsh",
    id: 123456,

    welcomeMsg: function(){                             // create a function to welcome the user.
        console.log(`Hello ${this.userNAme} , welcome to the website`);  
        // console.log(this); --> it clearly show that the this keyword talk about the current context.
        
    }
}

Info.welcomeMsg()    // Here we access the function
Info.userNAme = "Raghav"  // here we change the current context., current context refers the values etc.
Info.welcomeMsg()  // so now the output comes according to the new value.

// it gives ouput {} a empty object. But, In browser it give a window object.
// Note:- In Node.js or any other code environment, 'this' in the global scope is an empty object {}. In the browser, it points to the window object, which is the global object there.
console.log(this);


// Using 'this' in a function directly:-
// => we can not access the variable directly inside a function using this keyword.

function detail(){
    let UserName = "Harsh"
    console.log(this);
    console.log(this.UserName);
      
}
 
// detail()

// let's check if we declare the function by another, the this keyword work or not:- 
const mydetail = function(){
    let UserName = "Harsh"
    console.log(this);
    console.log(this.UserName);
}

// mydetail()    // It give same output. means we can't access the variable through this method.




// Now discuss the arrow function :-  () => {}    // this the basic syntax of a arrow function.
// so, now check is we can access 'this' throw arrow function.
const arrow = () => {
let user = "harsh"
console.log(this);
console.log(this.user);

} 

arrow()  // we can not access the value directly through arrorw function.


// Now, let's more discuss about the arrow function:-
// Example:- Add two numbers

// Basic arrow function:- 
const Addnum = (num1, num2) => {
    return num1 + num2
}
console.log( Addnum(4,6));


// Implicit arrow function :- An implicit arrow function typically refers to an arrow function with a concise body, where the function implicitly returns the expression without using the return keyword.

// the both sytax give the same result. 
// const AddTwo = (num1, num2) => num1 + num2  
const Addtwo = (num1, num2) => (num1 + num2) // Instead of above synatx we can also use this syntax (num1 + num2)

console.log(Addtwo(3,5));

// let's take another example if we want the return the value as an object:-
// const ObjVAlue = () => {UserName: "Harsh"} // It gives an undefined output. 
const ObjVAlue = () => ({UserName: "Harsh"})
console.log(ObjVAlue());

// Noted point :- () => {} if we use this syntax we need to use retrun keyword to perform the task. But if we use () => () this syntax we does not need to use return keyword to perform the task.