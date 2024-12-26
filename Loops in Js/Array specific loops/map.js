// maps :- 
// => In JavaScript, a Map is a collection of key-value pairs where both the keys and values can be any data type. Unlike objects, where keys are typically strings or symbols, the keys in a Map can be of any type (e.g., objects, functions, primitive values).
// => Basically map ensure that the all values are unique and in an order.
// => Maps are a special type of object designed for key-value storage.

// syntax:-
// let myMap = new Map();

// example:-

let myMap = new Map()
myMap.set('js', 'JavaScript')   // js --> keys, javasript --. value
myMap.set('css', 'Cascading style sheet')
myMap.set('cpp', 'C++')
myMap.set('py', 'python')
myMap.set('cpp', 'C++')  // here we re use a same key and value let see in output what happens.

// console.log(myMap);  // it does not take last one bcz it only takes a unique keys. But it prints the in a form of array.


// loop on maps:- by for of

// let know how to print only the keys and values of the map

for (const items of myMap) {
    // console.log(items); // This also print the all array but we only want to print keys and the values.
    
}
// here we can access only keys and values by destructuring of the array.
for (const [keys, value] of myMap) {    // first one access the keys and second one values. 
    console.log(keys, '->', value);
    
}





