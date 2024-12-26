// map() :- It similar to forEach(), but the good thing in this is, it also returns the array automatically:-
// its very good practice to use map(), instead of forEach, but both are do same work and good to use .

// example:-

// const myarr = [1, 2, 3, 4, 5]

// yourArr = myarr.forEach( (items) => {
//     return items <= 5
    
// })
// console.log(yourArr);   // it returns undefined.


// map():- it returns the values.

// const myarr = [1, 2, 3, 4, 5]

// yourArr = myarr.map( (items) => {
      
//         return items ;  
// })
// console.log(yourArr);


// lets add 10 in each element:-
const myarr = [1, 2, 3, 4, 5]

let yourArr = myarr.map( (items) => {
      
        return items + 10;  
})
// console.log(yourArr);



// methods Chaining:- the term refers we can use multiple methods one by one in a single array.

const Bigarr = [1, 2, 3, 4, 5]

let NewBigArr = Bigarr                // here every method execute one by one in a loop.
                .map( (items) => {  return items + 10 }) 
                .map((items)=> { return items - 1})
                .filter( (items) => { return items < 12})
console.log(NewBigArr);
