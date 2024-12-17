// Arrays :- //

// An array in JS is a data structure used to store multiple values in a single variable. type of array is object.
// It allows storing values of different data types and provide methods to perform operations on them.
// Indexing Start from 0.
// In Js, All built-in methods for copying arrays create only shallow copies rather than deep copies.
// Shallow copy means reference of the original array, if we change into a shallow copy it affect the original.

// Array declaration:-
let Myarray = [1,2,3,4,5]
console.log(Myarray);
console.log(Myarray[1]); // access the Element on index 1.

let Marvels = ["Iron","Captain",10,true,"Harsh"]  // Multiple data types in single variable.
console.log(Marvels);
console.log(Marvels[4]);
console.log(typeof Marvels);
console.log(typeof Marvels[4]);

// Another way of declaring an array:-
const theArray = new Array(3,4,5,6)
console.log(theArray[0]);
console.log(typeof theArray);

// We can check all the methods of array on browser console.

//// Array methods ////  :- here are only some methods of array.

let HyArray = [4,5,6,8,9]
console.log(HyArray);

// .push() :- Add elements at the end.
HyArray.push(4)
console.log(HyArray);  // add 4 at the end.

// console.log(HyArray.push(4)); // => It returns the leangth of the array which is 7. bcz-> 4,5,6,8,9,4,4
// console.log(HyArray);  // Final output.

// .pop():- Only remove the last element.
HyArray.pop()
console.log(HyArray);


// .unshift() :- add element at the starting.
HyArray.unshift(65)
console.log(HyArray);

// .shift() :- Only remove the first element.
HyArray.shift()
console.log(HyArray);

/* These all above methods from line 32 - 50 affect the orriginal array */

// Here are more methods:-

// .include() :- This method checks if a given element exists in an array. True/False.
console.log(HyArray.includes(17));

// .index() :- This method used to find the index of a specific element.
//    => return the first index of the element
//    => Return -1 if the element is not found in array.

console.log(HyArray.indexOf(6));  

// .join() :-  This method combines all elements of an array into a string, with a specified seperator(,) between each element.
    // => But it does not modify the original array. Bcz it does not create any copy of the array. It only returns a string representation.
    // => It simply create a new string.
const newarr = HyArray.join()
 console.log(newarr);
 console.log(typeof newarr);  /// which is new string.
 console.log(typeof HyArray);  // Does not affect original. 
 
 
 // Most important 2 method also asked in interview .

 // Slice and splice:- They both are used to 'Cut' or like into pices an array, but both work in different way.

 // 1. Slice :- Cuts a portion of the array and returns it, but does not modify the original array.
 //      => Start at, the index we specify (eg. 2,5)
 //      => Ends at, the second last index we specify means not include the last index.(eg. 2,5) only take 2 to 4 not include 5.
    let Firstarr = [2,3,4,5,6,7]
    console.log(Firstarr); 
    console.log(Firstarr.slice(0,4));
    console.log(Firstarr);   // Not affect in original array.


// 2. Splice :- It allows you to add, remove or cut, replace elements in the array and returns, And also modify the original array.
//       => It modify the original array.
    console.log(Firstarr.splice(0,4));
    console.log(Firstarr); // affect the original array.
    

    // More nethods:-  ...arrayName,...Anotherarray :-
 // This method is very easy method to spread out the arrays in a single array.

let Marvel = ["Iron-man", "SpiderMAn", "CAptain"]
let DC = ["Batman", "Superman","Joker"]
let spreadBoth = [...DC, ...Marvel]
console.log(spreadBoth);
console.log(typeof spreadBoth );

// .flat() method :- It is used to flatten an array.
// =>  'Flatten' refers, converting  a nested array ( nested array means ek array ke andar aur arrays) into  a single array.
// => It does not affect the original array.

let multarr = [1,2,3,[4,5,6],[7,8,9,[10,11,13,[14,15]]]]
let solvearr = multarr.flat(Infinity) // Infinity used for Full flatten.
console.log(solvearr);
let solvea = multarr.flat(2) // (default) used for specify the depth of flatten. In this case 2
console.log(solvea);
console.log(multarr);



/// Array.isArray(Value) :- This method used to check the given value is array or not.
let check = "HArsh"
console.log(Array.isArray(check));

let check2 = ["Harsh"]
console.log(Array.isArray(check2));


//// Array.from()  :- This method used to convert the given value of any datatype(eg.,object,number,string,etc) into an array.
  // => It creates an array from an iterable(eg., a string or array). eg:- Array.from('harsh')
// => Iterable :- It is a object that allows you to access its elements one by one in a sequence, typically using a loop.

let StringToArr = "HArsh" //string
console.log(Array.from(StringToArr)); // It seperet the all elements with a seperator. And convert into array.

// Noted point :-
// it returns empty array, if we does not provide an iterable value. Number and plain object are not iterable.
// Ex:-
let num = 12345678
console.log(Array.from(num));

// So, firstly we need to convert this number into a iterable form (like string and array).

let n = 12345  //number
let n2 = n.toString()  // convert into string
console.log(n2);
console.log(Array.from(n2)); // convert string into array.

// Array.of() method:- It create an array from individual values we pass to it. eg:- Array.of(11,12,1234).
console.log(Array.of(n));
console.log(Array.of(StringToArr));

