// filter:- The filter() method is used to loop through an array and return a new array containing only the elements that meet a specific condition.

// Why use this :- bcz if we want to return an array than we can use filter() method instead of forEach() , bcz forEach does not return anything.
// Example:-
const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {  // here we assign it in a new variable.
    //console.log(item);
    return item
} )

// console.log(values);  // it returns nothing bcz forEach does not return anything only perform a specifc task and print something.


// filter():-  It does not affect the orignal array, but returns.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => {    
    return num > 4
} )

// console.log(newNums);
// console.log(myNums);


// if we want do that same thing with forEach() so how we can do:- this is some complicated , so always prefer in this situation to use filter().
// let understand with a code example:-

// const theArr = [1,2,3,4,5,6,7,8,9,10]

// const newArr = []  // here we declare a empty array in which we push the values.

// theArr.forEach( (num) => {
//     if (num > 4) {
//         newArr.push(num)
//     }
// })
// console.log(newArr);


// lets use filter() with a real word code example:-
// in this exmple we have a different different books with different genres, publish year and editon year.


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (thebook) => thebook.genre === 'Science')
//   console.log(userBooks);  

// lets filter with multiple conditions:-
let Allbooks = books.filter( (bk) => {
    return bk.publish < 2000 && bk.genre === 'Fiction'
})
console.log(Allbooks);
