// We can check all the methods of string in browswer console to apply on it. And also use mdn for understanging.

const Myname = "Harsh" //This is the way of declaring a string.
const tca = 237

console.log(Myname + tca); // It is a old method and try to avoid used it.

// Here is the good method for same process:-
// Use backtics(``) In this method, We inserting variables or values into a string using placeholders like ${}.
// This method called String Interpolation.
// ex:-
let theName = "Harsh Saini";
let thetca = 237
console.log(`Hello my name is ${theName}`);
console.log(`${theName} ${thetca}`);

// Here is the another way of declaring a string by using keyword 'new'. new creates a new object to use the class's methods and properties.
// Syntax :- 
const MyId = new String('Harsh008') // Use this syntax on browser console to see the functions or methods that we use on it.
// How to use ? Ans:- Firstly enter this type of syntax on console than enter than write your variable name to see protypes.

// Here are some methods example:-

// when we want to access the key value :- // indexing start from 0
console.log(MyId[0]); // H key is in the position of 0
console.log(MyId[3]);
console.log(MyId[7]);  


// In js By using variableName.property , we can access or use an object's properties.
//ex:-

console.log(MyId.length); // lenght of the string
console.log(MyId.bold());
console.log(MyId.toLocaleUpperCase()); //Remember, it does not change our original string becz it is a copy that store in stack.
console.log(MyId.indexOf('r')); // it show the position of the character.
console.log(Myname.length);
console.log(theName.toLocaleUpperCase());
console.log(MyId.charAt(3)); // which character is the position 3


//let's make a new variable to apply more methods.
let anotherId = "IMharsh-Hs"
console.log(anotherId.substring(0,4)); // we have output IMha, the reason behind it does not include the last value. It only take 0-3 not 4 in indexing.
console.log(anotherId.length);

console.log(anotherId.slice(-8)); // In slice method we can use negative indexing , which start counting from the last.

// Important note for Slice and substring:-

// Slice() support negative indexing for counting from the end. 
// Negative indexing:- Start from -1(from the end element) not 0.

//Substring() converts any negative index to 0 and always counting from the starting 
// Positive indexing:- Start from 0(From the start element).

// trim() property
const NewString = "   Harsh    " // some times we don's want to that type of extra white spaces.
console.log(NewString); // Output show the extra spaces it is a issue , so how can we solve it:-

// We can use trim property to remove that type of extra white spaces 
console.log(NewString.trim());


// replace() property
const url = "http://harshsaini.com%10saini"
console.log(url);
console.log(url.replace('harshsaini', 'CODEharsh')); // For replace a single same word.
console.log(url.replace('harshsaini', 'CODEharsh').replace('%10', '---')); // For replace multiple different-2 words.


// split() property -> Used for converting a string into an array.
const marvels = "IronMan-Captain-Superman"
const convert = marvels.split('-');  // Basically whereever it find the seperator(In this eg -), it breaks the string at that point.
console.log(convert);

// let's see another example:-
const hero = "We01I01Us"
console.log(hero.split('01'));



/* So these are only some object's properties or methods, But there are more property we can use *///MDn references.