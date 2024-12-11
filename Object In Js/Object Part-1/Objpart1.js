// Object Literals //  -> Declaration

// Declaration of Symbol:-  (Symbols are often used to create as a unique key for object properties.)
let MySymbol = Symbol("ThisIs-Key1")
console.log(MySymbol);
console.log(typeof MySymbol );


const TheUser = {
    name: "Harsh",
    "Full-Name": "Harsh Saini",
    age: 18,
    [MySymbol]: "HHSSSS1234",  // Syntax of using a symbol as an object's key.
    location: "UP",
    email: "harshcode@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Sunday","Tuesday"]
    
}
//// Accesseing the properties:-

console.log(TheUser.location);
//Another way to access
console.log(TheUser["location"]);
console.log(TheUser["LastLoginDays"]);

//console.log(TheUser.Full-Name); // In These type of cases this method of accessing object's key not working!!!
console.log(TheUser["Full-Name"]);  // ** That's why this is the best way **

//console.log(TheUser.MySymbol); // This method is not work for accesing a symbol key!!!!
console.log(TheUser[MySymbol]);
console.log(typeof [MySymbol] );


//// Methods /////

// Object.freeze() :- It is used to make an object immutable. Means We can not add , remove or modify property. It only freezes the object itself, not nested objects, means work only the first level of properties not deeper.

TheUser.email = "sumitcode@google.com"
console.log(TheUser); // change the email of object.
// Object.freeze(TheUser)  // freeze the object

TheUser.email = "ChangeItcode@google.com"
console.log(TheUser); // not changed bcz of freeze method.


// function() :- An object method is simply a function that is defined as a property of an object. It is used to perform operations or return values related to the object and objects's properties. We can treat it as an variable in Js.
TheUser.Salution = function(){
    console.log("hello JS User");
    
}
console.log(TheUser.Salution());     // It also give undefined in output Ignore it!!

// 'this.property' :- it is an keyword in object method refers to the object itself, It allowing the method to access the object's property. For Ex:-

TheUser.SalutionAgain = function(){
    console.log(`Hello, ${this.name}`);
    
}
console.log(TheUser.SalutionAgain());

console.log(TheUser); // Output :- [Function (anonymous)] 
// It occurs, because we are difining the salution or salutionAgain method outside the object(TheUser) But using this.name inside the function. That's why the value of 'this' is not referring to the user object as expected, so the this.name does not have access to the name property of the TheUser object.
