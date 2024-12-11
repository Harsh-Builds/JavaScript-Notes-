// In this topic we convert a datatype into another data type.

/* some times frontend or clien side give us some data , and we don't know that is it number or string, etc.
    because when we work in backend like in this sitauation we know that it is a number but how we know that client 
    send us is a number or not is it a another type of data ? so we use conversion methods.
*/
let age = 33 // it is a number.

console.log(typeof age);
console.log(typeof (age)); // it is a another way to use it.
// END HERE //

let score = "33" // because 33 is in "" double quotes so, it is called a string not number.
console.log(typeof score);

/* if we need to do our operations in numbers than we need to converting the data into the numbers so we can use:- */

let ValueInNumbers = Number(score)  // it sure that given value is convert into a number when we use capitalize form Number().
console.log(typeof ValueInNumbers);
console.log(ValueInNumbers);
// END HERE //


let marks = "33xyz"  
console.log(typeof marks);

let  valueInNumber = Number(marks)
console.log(typeof valueInNumber);
console.log(valueInNumber)   // it give a special type of output which is NaN(Not a Number) in this case.
// END HERE //

let height = 6
console.log(typeof height);

let heightInString = String(height)
console.log(typeof heightInString);
console.log(heightInString);
// END HERE //

/* so these are some examples of converting a value in another data type*/

let value = null
console.log(typeof value);

let valueeInNumber = Number(value) 
console.log(typeof valueeInNumber);
console.log(valueeInNumber); // it give the output value 0 in this case.
// END HERE //

// now, check what happened if we give a boolean value.
// true => 1 ;  false => 0

let bool = 4788
console.log(typeof bool);

let booleanInNumber = Boolean(bool) //convert it into a boolean data type.
console.log(typeof booleanInNumber);
console.log(booleanInNumber); // it give the output value 0 in this case.
// END HERE //