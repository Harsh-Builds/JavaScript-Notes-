// Reduce:- The reduce() method in JavaScript is used to iterate over an array and reduce it to a single value (e.g., sum, product, concatenated string, etc.) based on a callback function. It processes each element of the array and accumulates a result.

// Example:-

// const numbers = [1, 2, 3, 4];
// const initialvalue = 0;
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialvalue);
// console.log(sum); 

// accumulator: The result from the previous callback function.BAsically it refers the previous value.
// currentValue: The current element being processed
// initial value: where from the accumulater start, in this examle the initial value is 0. it alway write after (,)

// Example 2:- lets take another example.

const theArr = [1, 2, 3, 4, 5, 6, 7, 8];

const initialization = 10
const Addition = theArr.reduce((Previousvale , iteams) => {
      console.log(`The previous value: ${Previousvale}, The Current Element: ${iteams}`);
    
    return Previousvale + iteams
}, initialization)
console.log(Addition);

// USing this same example without using {}

// const Addition = theArr.reduce((Previousvale , iteams) =>     Previousvale + iteams , 10)
//   console.log(Addition);

