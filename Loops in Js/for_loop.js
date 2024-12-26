// Loop :- The main purpose of a loop is to repeat a block of code until a certain condition becomes false.


// for loop :- 

// syntax :
//  for (initialization; Condition; increment/decrement){
        // code to be executed.
// }

// Explanation of the for loop process step by step:

//1. Initialization:- The loop variable is set once at the start.

//2. Condition:- Before each iteration, the condition is checked. If true, the loop runs. If false, it stops.

//3. Code Execution:- If the condition is true, the code inside the loop runs.

//4. Increment Or Dicrement/Update :- After the code executes, the loop variable is updated, and the process repeat from the condition check.

// This cycle continues until the condition becomes false.


// Example:- Lets print the number from 0-10

for(let num = 0; num <= 10; num++){
    // console.log(num);

}

// Example:- lets use conditions like if else into the loop.

for(let i = 0; i <= 5; i++){
    let result = i;
     if(result == 3){
        // console.log(`3 is Good`);
        
     }
    //  console.log(result);
     
}

// Example:- lets use loop inside the loop, means loop's nesting.


for(let i=1; i <= 10 ; i++){     // Outer loop
    for( let j=3; j <= 5; j++){   // Inner loop
        
        // console.log(j);
    }
    
}
//**  Rule of Nested Loops: **

//-> The inner loop runs fully for every single iteration of the outer loop.
//-> Think of it as a process where the outer loop controls how many times the inner loop executes its full cycle.



// Example:-  Using loop on Array.
// Basically lets breakdown how it is work. 
// Firstly declare an array. now to access it elements the condition we can use, the initialized value is less than the length of array.

let vehicle = ["Car", "Bike", "Train", "AirPlane"]
// console.log(vehicle.length);

for (let index = 0; index < vehicle.length; index++) {
    const element = vehicle[index];
    // console.log(element);
    
}


// lets discuss on two keywords:-
//1. break;
//2. continue;

//1. break :- It break or stop the loop whenever we want.
// Example:-

for (let i = 0; i <= 10; i++) {
    if(i == 6){
        console.log(`Break the loop here`);
        break;
        
    }
    // console.log(`Value of i is ${i}`);
    
    
}

//2. continue :- It ignore the specific iteration or loop when the condition true and than continue the cycle of the loop.
// Example:-

for (let i = 0; i <= 10; i++) {
    if(i == 6){
        // console.log(`Ignore 6 , and continue the loop`);
        continue;
        
    }
    console.log(i);
    
    
}
