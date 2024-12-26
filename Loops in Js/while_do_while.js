// While loop:- A while loop is a control structure that repeatedly executes a block of code as long as a specified condition is true.
// it Used when the number of iterations depends on a condition. Only the condition is part of the Syntax; initialization and increment are handeled separately.
// Syntax :-

// while (condition) {
//    // code to execute
// }

// Example:-
// lets print the number from 0 to 10

let Num = 0
while (Num <= 10) {
    // console.log(Num);
    Num = Num + 1     // Equivelent to Num++
}

// Using while loop on an Array.

let TheArray = ["Water", "Air", "Fire"];

let Indexing = 0;
while (Indexing < TheArray.length) {
    // console.log(TheArray[Indexing]);
    Indexing++ ; 
    
}



// do-while loop :- The do-while loop always executes the code block at least once, then check the condition. If condition is true, it repeats the process.

// Syntax:-

// do {
//     // code to execute
// } while (condition);

// Example :- 
let value = 12

do {
    console.log(`The value is ${value}`);   
    value = value + 2;  // Here the value increment by 2
} while (value <= 8);
    