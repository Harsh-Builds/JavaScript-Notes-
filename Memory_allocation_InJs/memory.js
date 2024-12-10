// There are 2 types of memory:-
// 1-> Stack memory (All primitive values in Js are stored in the stack)
// 2-> Heap  memory (All Non-primitive values in Js are stored in the Heap)

// Stack=> In JavaScript, variables stored in the stack hold a copy of the value. If we change the copy, it does not affect the original value.
    // Example:-
let Name = "Harsh"

let AnotherName = Name
AnotherName = "Sumit"

console.log(Name);
console.log(AnotherName);
  // In this example, because we give the copy of the Name to the Anothername variable , that's why the change into AnotherName is not affect the original name.


// Heap=> In Js, objects and arrays are stored in the heap.variables stored in the heap hold references(not copies).that's why If we change or modify the object or array through one reference, the change is refelected in all references pointing to it.
      // Example:- by object
let Myinfo = {
    name: "HarshSaini",
    age: "18"
}
let Broinfo = Myinfo
    Broinfo.name = "SumitSaini"   // it is the way of access the variable in objects.
    Broinfo.age = "22" 

    console.log(Myinfo);
    console.log(Broinfo);    
    console.log(Myinfo.name);
    console.log(Broinfo.name);
     // In this example, because we give the reference of the Myinfo object to the Broinfo object , that's why the change into name and age variable in Broinfo affect the Myinfo name and age. And we get same output in both.