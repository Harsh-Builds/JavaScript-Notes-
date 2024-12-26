// After gaining information from the Array specific loop folder, the question which comes in the mind can we use loop on object? lets check:-

const Myinfo = {
    MyName : 'Harsh',
    MyAge  : 18,
    email: 'codeharsh@gmail.com' 
}

// Firstly lets check with for of loop :-

// for (const items of Myinfo) {
//     console.log(items);              not working!!, bcz object is not iterable.
    
// }

// for in loop:-
// we can apply loop on objects by for in. 
// example:-

for (const key in Myinfo) {
    // console.log(`${key} -> ${Myinfo[key]}`); // here we print both key and value of the keys.
    
}

// Now, lets check can we use for in loop on array???:-

const num = ['car','bike','tarin']

for (const value in num) {
    // console.log(`${value} -> ${num[value]}`);
}

// now, lets check can we use for in loop on map:-

let myMap = new Map()
myMap.set('js', 'JavaScript')   // js --> keys, javasript --. value
myMap.set('css', 'Cascading style sheet')
myMap.set('cpp', 'C++')
myMap.set('py', 'python')
myMap.set('cpp', 'C++')

for (const keys in myMap) {
 console.log(myMap);
 
}   // it does not work!!!!

// why?? let discuss why for in loop does not work on map

//for...in :-  works on objects and iterates over keys (enumerable properties).
//for...of :-  works on iterable objects (like Arrays, Maps, and Sets) and iterates over their values.

// In short, Maps store keys differently than objects, so for...in can’t see them, but for...of works because Maps are iterable.