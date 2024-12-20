// Function :- Direct meaning of functions is to bundle all the lines of code we have written into a single package so that we can reuse its copies anywhere. Basically it means group(or combine) multiple things(or lines of code) together into a single unit(or package).
// Example:-

// suppose we need to print these code almost 5 to 10 times or more, so it is very time consuming and lengthy process to print all this code again and again:-
// console.log("H");
// console.log("A");
// console.log("R");
// console.log("S");
// console.log("H");

// so, we can use function for reduce repeatations, and use it anywhere easily:-

// This is called Function definition/Declaration :-
function MyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}    
// MyName   // This is called function reference, It does not give any output bcz, we does not execute the function only tell that a function which name is MyName live there or here. but we did not execute it.

// Now, come on the Function execution:-
MyName()     // It execute the function. show the output of the function.

// Majorly, we use functions to perform a useful task or action. And than resue it anywhere it needed.
// For example:- A function for adding two numbers:-

// Program No.1
function addTwoNum(num1, num2){    // In js, we don't need to specify type of the parameters(In this eg. num1, num2). bcz js is a dynamically typed lang, means it detrmines the type of the variables and arguments at runtime, not during compilation.
    console.log(num1 + num2);   
}

 //  function call :- for print ouput.
 addTwoNum(5, 10)  // Output: 15. // (5, 10)This is called arguments( These are the values which is pass to the function's parameters).

 // Concept of return:- In program no.1 we only prints the values return nothing for ex:-
 const result = addTwoNum(5,10) // Output: 15 // store it in a variable to see that is the function return somthing or not???
 console.log(result);   // Output comes undefined bcz, in this program no.1 we only print the values not return anything.


 // return :- lets make a program which returns something.
//  program no.2
 function AdditionTwoNum(n1, n2){
     
     console.log("harsshh");       // This will execute bcz, this code is before the return.
    let theresult = n1 + n2       // we create a variable, this code process, n1 + n2 = 10
    return theresult              // it return the output of the process, return theresult which store 10.
    console.log("harsshh");       // after return, we can not do any further code. The code which is after the 'return' was never executed.
 // return n1 + n2;    // instead of 'line no.46' we can use this way. it give the same ouput. And the advantage of using this, is, we don't need to create a variable under the function scope. we can get our output only by making a one varible outside {} this. In this ex. that is 'theresult'
 }

  let theresult = AdditionTwoNum(3, 7) // we pass the values 3,7 to the parameters(n1, n2)
 console.log(theresult);   // here, we print our returned output. so output comes 10.
 
 // How many ways to pass the arguments:-

 // Passing arguments which are string:-
 // let's make a function that shows the user logged in or not. when the user eneter the name.
// program No.3
 function loggedIn(UserName){

    return `${UserName} is logged in`    
 }
 loggedIn("harsh")    // it give nothing output bcz, we only return the output not print it so, we need to use console.log to print the returned output.
 console.log(loggedIn("rahhul"));  //it prints the output.

 // what if the user do not enter his name, let's check :-
 console.log(loggedIn()); // Output comes:- Undefined is logged in.

 // if we want when user not enter his name while logged in than display show 'please enter the name' instead of undefined is logged in, so what we can do, let's do by program:-  
// this is only possible by if else conditions or statements let's take an example:-
function USerloggedIn(UserName){  // UserName = "writeanything", if we does not pass any argument, by this method userName take a default value that we write in it and execute. And when we pass the arugument it autm0tticaly overwrite it.
    if(undefined === UserName){       // we can use !UserName instead of 'undefined === UserName'. 
        console.log(`please enter the name !!!`); 
        return  
    }
    return `${UserName} is logged in`    
 }
 console.log(USerloggedIn());
 /// ..............................................//////

 
 // Important & common situation:- some times we don't know how many parameters will come, so what we can do to get those all arguments:-
 // => ... this called rest operator its look like similar to spread method but the use case of both is different.
 // => ... it  bundle or combine all the given arguments in single array.
 // => basically, it is used to get multiple agruments.

//  function UseOfrestOper(thevalues){        
//     return thevalues
//  }

//  console.log(UseOfrestOper(200,300,4000,"harsh"));  // output comes only 200, bcz a signle parameter capabale to take a single argument.

 // so here is the simple solution or way to solve it:-
  function UseOfrestOper(...thevalues){        // now it store and take all the arguments in a form of array.
    return thevalues
 }

 console.log(UseOfrestOper(200,300,4000,"harsh")); 

 // we can also use some addition ways to that type of problems:-
 function Nuserofrest(val1, val2, ...theval){ // val1 takes first agrume., val2 take second agrume., and rest all arguments go to in ...theval.
    return val2
 }
 console.log(Nuserofrest(20,40,100,300,200,600,70));
 

 // Give argument which are Objects :-

 const MyDetail = {      // Instead of this we can use another way to pass the objects. the way another way is given in line no.121
    name: "harsh",
    myAge: 18,
 }
 function UsingObj(information){
    console.log(`My name is ${information.name} and age is ${information.myAge} and I'm a ${information.skill}`);
    
 }
// UsingObj(MyDetail) // Output come accurately.

 UsingObj({                             // It is the another way to pass the obj.,we can pass an object directly without making a object variable.
    name: "Coder harsh",
    age: 18,
    skill: "quick learner",
 })

 
 // Give argument which are arrays :-

 const MyArryIs = [200,300,"harsh",400]  // Instead of this we can use another way to pass the objects. the way another way is given in line no.137

 function UsingArr(Theinfo){
    return Theinfo[1]
 }
//  console.log(UsingArr(MyArryIs)); //Output come accurately.

 console.log(UsingArr([200,9000,5000,200]));  // It is the another way to pass the array., we can pass an array directly without making a array variable.

