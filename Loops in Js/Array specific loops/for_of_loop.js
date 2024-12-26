// In this folder I'll discuss on some methods and loops which are mainly used for applying loop on an Array.
// [{}, {}, {}]  , In this folder also discuss how we can apply loop on array where each element is an object.

// for of :-  In this we does not need to use increment and a specific declaration variable.
// =>It automatically iterates(means repeatation for each item) through all the elements of an iterable, such as an array, without needing to manually access each index.

// syntax:-
// for (const var_name of object) {   // the term object doesn't refer to a JavaScript object ({}); instead, it refers to any iterable (e.g., arrays, strings, maps, sets) over which the loop iterates.
    
// }

//Example:-
let Arr = [2,3,4,5,6,7]

for (const elements of Arr) {
    // console.log(elements);
    
}


// lets aplly for of loop on a string:-
let Myname = "Harsh"

for (const keys of Myname) {
    console.log(keys);
    
}