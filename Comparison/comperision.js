/* Important Note :- Make sure always try to compare same data types. */

// easy comperision between same data type: - 

console.log(2>3);
console.log(2<3);
console.log(2==3);
console.log(2==2);
console.log(2!=3); // != this represent not equal to.
console.log("3"=="4"); // these are string values.


// If we compare different data types:-
   // it treats both as a number.

console.log("3"==3);
console.log("3" > 4);

// Some tricky comperision

console.log(null==0);  // basically, the null is a empety value.

/* An equality check == and comperisions >, <=, <, >=, work differently.
   comperision convert null to a number, treating it as 0. That's why ( null < 1 is true ) and (null >= 1 is false.) */

console.log(null<1);  
console.log(null>0);
console.log(null<=2); 
console.log(null>=1); 

// It gives false because undefined represent a value which is not assigned.
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined <= 0);
console.log(undefined >= 0);

// ===  // it is a strict check method. Because === is check the values also the data type.

console.log("2"==2);   // in this it only check the values that's why the output will come True.
console.log(2==="2");  // But in this case it also check the data type , that's why the output will come false.

