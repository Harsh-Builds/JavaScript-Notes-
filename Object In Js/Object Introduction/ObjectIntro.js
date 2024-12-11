/// Object :- ////
// => In Js, an object is a collection of key-value pairs that can store data and methods(functions).
// => It is used to represent Real-world entities(things) or group related information together.

    /* Key points of an object */
// -> Keys(or properties) :- Name that identify values, that hold data about the object.
// -> values :- Can be data(like strings,numbers,arrays,also objects) Or functions(called methods).
// -> Methods(Or functions) :- Perform actions with the object's data.
// -> Objects are written using curly braces {}, with key-value pairs.

// Example of an Object :-

let person = {
  Username: "Harsh",  // Key -> name , value -> "Harsh"     // Property

  age: 18,  // key -> age , value -> 18                  // Property

  greeting: function(){                                 // Method
    console.log("Hello I'm Harsh");  // key-> greeting , value -> function  
  }
};

// Accessing properties
// There are mainly Two methods for accessing a property:-

console.log(person.Username);   // Normal method, but in some cases it is not good.
console.log(person["Username"]);   // Best way for access a object's property of any type of data.


/// Singleton :- 
// It is a design pattern in Js. singleton ensures there is only one copy of an object or class instance in your program, and everyone uses that same copy. It's like having one shared resource used by all parts of your application.


/// There are Two ways of Creating or declareing An Object :-

// 1):-  Creating Object using object literals. ( It is not Singleton)
// 2):-  Creating Object using object Constructors. (By default No, but we can implement singleton in it.)

// 1) Creating Object using object literals :-

// => It is a direct way to create an object using {}. It create Independent objects each time. Not a singleton.
// Ex:- let obj = { key: value};


// 2)  Creating Object using object Constructors :-

// => Basically, it is a function or class that define an object blueprint.We can use it to create object.
// => It can be made a singleton by ensuring only one instance is created.
// Ex:-  Use logic like, If(Singleton.instance)  to resuse the same instance.