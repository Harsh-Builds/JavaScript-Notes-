// Defining a number:-
const score = 200  // In this method js autometticaly treat it as a number. Bcz Js is a dynamically typed language, so it determine a type of a value at runtime.
console.log(score);
console.log(typeof score);


// But in this method by using new number() , it create a number object. Basically new is a object that provide methods or properties. we can see it on browser console.

//Noted point:- If chrome browser console not supported that use another like edge browser console.To see outputs and methods.

const a = new Number(100); // It specially define that the given value(100) is a number. But In this case the data type of a variable is object not number.
console.log(a);
console.log(typeof a); // type of a is an object. But the entered value which is 100 is a number datatype.


// variableName.toString() this method convert the number into a string.

console.log(a.toString());  //The value has been converted into a string which is 100, But it is still treted as an object. It is a method of new number object. There are more that we can use.


// The benefit of using it that we can now use string properties or methods in it. For example:-
const Mynum = 4401349;
console.log(Mynum.toString().length);
console.log(Mynum.toString().indexOf('3')); //Output->  Check the position of number(3). Which is 4 through indexing.

// In this value we have three 4 , each are in different positon so how we can check the positon of other occurrence of that character. Ex:-
const convert = Mynum.toString(); // Sepratly convert Mynum into a String.

 const First4 = convert.indexOf('4') // It means at the fisrt occurrence of 4, which is 0.
console.log(First4);


const Last4 = convert.indexOf('4', First4+2); // +2 refers --> the third occurrence of 4. which is at the 5th position on indexing
console.log(Last4);

const second4 = convert.indexOf('4', First4+1); // +1 refers --> the second occurrence of 4. which is at the 1st position on indexing.
console.log(second4);

//So, basically that +1,+2,+3,.....and so on. are used to search for the next occurrence of a charcater after previous one.


// Here are some examples of using the methods of number.

// Use of toFixed method or property:-
// tofixed() method used to specify the number of digits after decimal point.

const Value = 3456.1412
console.log(Value.toFixed(2));

// Use of toPrecision method:-
// toPrecision() method used to specify the total length of the number(including digits before and after the decimal point) .

console.log(Value.toPrecision(3));
// Output: 3.46e+3 (Scientific notation). It is used for represnting very large or very small number in a compact, readable way.
console.log(Value.toPrecision(4));

// Use of toLocaleString method:-
// It is used to formate number or dates based on regional style for better readability.
const amount = 10000000
console.log(amount.toLocaleString('en-IN')); // according to india.


/* These are only some methods of number but there are more that we can use . */
