// Basically, Both singleton or non- singleton objects give Same output. There is no any difference of the output of both. 
//const NewUser = {}  // This is Non-singleton Object.

// Creating Object using constructors:-

const TheUser = new Object() // It is the representation of declaring an object as a Singleton. In this Object is a by default built-in object constructer provided by Js. We can not modify it, but you can achieve the effect of having a "custom constructor" by defining your own constructor function or class,
// => It is  Equivalent to {}  // new Object() === {}


// const coder = {}  -> If we use this it give same output, So there is no difference between outputs of both types. We can use any .

// TheUser.name = "Harsh"
// TheUser.age = 18
// console.log(TheUser);
// console.log(TheUser.name);

/// Now, lets use objects under the object (nesting).
////// the above information give an main overview of non-singleton///////

// Move on to methods or discussion on objects :-

const TheInfo = {
    email: "harshcode@gmail.com",
    FullName: {
        firstName: "Harsh",
        lastName: "Saini",
    }
}
// Now access the information:-
console.log(TheInfo);
console.log(TheInfo.FullName);
console.log(TheInfo.FullName.firstName);
console.log(TheInfo.FullName.lastName);

// Here are some ways or methods to combine two or more objects:-

const obj1 = {1:"Harsh", 2:"Sumit"}
const obj2 = {3:"Fire", 4:"water"}

const obj3 = {obj1,obj2}       // Output:- It store two object seperatly in one object, which is not our desire output.
const obj4 = Object.assign({},obj1,obj2) // It combine both objects in a single object. both object are assigned into {}-> this targeted object. {}, It is not neccesary to use but it is a Good practice, so use it.
const obj5 = {...obj1,...obj2} // It is best method, like we used that same method for combineing teo or more arrays.

// Now, check the output one by one of each method both are different
console.log(obj5);

// ->  obj4, obj5 both give same output.

///// Basic Concept, Array of Objects /////// 

// => In Js, an array of objects is a collection where each element is an object. It is often used to store structured data. It allows to store multiple objects in a single array. 
// For Ex:- Data of 3 students in an array of objects.
const Students = [
    {
        name: "Ram",
        age: 17,
        location: "Uk"
    },
    {
        name: "Shyam",
        age:18,
        location: "India",
    },
    {
        name: "Hari",
        age:19,
        location: "Singapore",
    }
]
 // We can access objects by their index and their properties by keys.
 console.log(Students[0].location);
 console.log(Students[1]);
 console.log(Students[2]);
 

// Object.keys() :-
//=> Object.keys() method turns an object's keys into an array, and it alllows you to use array methods to work with the keys. We can use various methods of array on these keys like forEach(), map(), filter(), etc.

let ThePerson = { nameIs: "Captain-America", age: 35, Industry: "Marvel", Work: "Leader" }
let convertIntoarr = Object.keys(ThePerson)
console.log(convertIntoarr); // It converts the keys of the object into array.
console.log(typeof convertIntoarr); // "Object" bcz array is typically an Object in js.

// convertIntoarr.forEach(convertIntoarr => {console.log(typeof convertIntoarr);
// });  // This representation with help of forEach(), we can perform the actions for each element of the array. forEach() is a method of array which used to oerform a action for each element of the array

// Object.values() :- similar to  Object.keys(), but gives values instead of keys.
console.log(Object.values(ThePerson)); 

// Object.entries() :- In js, it converts an objects's properties into an array of [key,value] pairs.
console.log(Object.entries(ThePerson)); 

// hasOwnProperty():- This method is used to check if a given property exists directly on the object, not on its prototype chain.
console.log(ThePerson.hasOwnProperty("Industry"));
console.log(ThePerson.hasOwnProperty("city"));


// Destructuring Of Objects :-
// => In Js, Destructuring is a way to extract values from an object easily and assign them to variables.
// => It reduce repetitive code. And used for better readability of code.


const Course = {
    courseName: "Code In Js",
    price: "1000 Rs",
    Teacher: "Harsh Saini",
}
console.log(Course.price); // This is normal method of  accessing objects. This is not destructuring.

// Now, destructure it :-

// syntax:- const {Property} = object;
const {price} = Course;
console.log(price);   // By destructuring we don't need to use 'Objectname.property' again and again. It reduce repeatetive code.

// we also use multiple properties.
const {courseName,Teacher} = Course;  
console.log(Teacher);

// We also customize the property name for destructuring:- It is very beneficial for reducing code lines by using these methods 
const {courseName: Cn} = Course; // we can write Cn instead of courseName.
console.log(Cn); // The output will we same.

console.log(Course); // Our Original Output is Not affected.


