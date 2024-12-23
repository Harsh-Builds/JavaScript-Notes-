// In, JavaScript, Conditional statements are used to run certain parts of the code only if a specific condition is true or false.

// In, Js, There are four main conditional statements :- 
// 1. if statement
// 2. if...else statement
// 3. if...else if...else statement
// 4. switch statement

//1. if statement:- "If the condition is true, the code inside the if block runs. If it's false, the code is skipped."
// syntax:-
// if(condition){
       // code
// }

// Examples :-

if(4 != 3){
 console.log(`Executed`);
 
}

const myname = 'Harsh'

if(myname == 'CodeHarsh'){
 console.log(`Your name is CodeHarsh`);
}


//2. if...else statement:- It lets you run one block of code if a condition is true and another block if the condition is false.

const points = 20

if(points < 15){
 console.log('You are not selected');
} else{
    console.log('You are selected');
}

// short way to run a if statement:- this way is a not a good practice to use, it is only for knowledge.
// if(2==2) console.log('Right'), console.log('bad');

 
//3. if...else if...else statement :- it used to tests multiple conditions and executes different blocks of code for each true condition. It is nesting of if else statements.

const marks = 1000

if(marks == 500){
    console.log(`Equals to 500`);   
} else if (marks > 2000){
    console.log(`greater than 2000`); 
} else if (marks < 1500){
    console.log(`less than 1500`); 
} else{
    console.log(`No marks`);
}


//4. switch satatement :- Executes one block of code out of many options, based on a specific value.

// syntax:-
// switch(key) {
//        case value :

//             break;  
        
//         default:
//             break;

// }

// Example :-
const Day = 'Wednesday'

switch(Day) {
       case 'Monday' : 
       console.log(`Today is Monday`);
       break;
       case 'Tuesday' : 
       console.log(`Today is Tuesday`);
       break;
       case 'Wednesday' : 
       console.log(`Today is Wednesday`);
       //break;
       case 'Thursday' : 
       console.log(`Today is Thursday`);
       break;

       default:
              console.log(`Holiday`);
              break;
              
}
// Note :- In this switch example bcz I comment out the break; that's why after the key match it execute the all code except dafault.  