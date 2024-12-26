// forEach :- 
// => The forEach method is a built-in function of arrays in JavaScript. It iterates through each element in an array and executes a callback function you provide for every element.
// => forEach is an array method that runs a function on each element, simplifying iteration without managing indexes or loops.

//Example:-

const theArray = ['car', 'bike', 'train', 'air', 'water', 'fire']

// Note:- we does not need to specify the function name.
theArray.forEach( function (value) {          // (  function(value){}  ) this area called 'Call back function'.
    // console.log(`value of the each element is : ${value}`); 
      
})

// lets use this through Arrow function:-
// Example-
theArray.forEach( (value) => {     //( (value) => {}) this area called 'Call back function'.
// console.log(value);

})

// We can also pass the function as an argument to the forEach.
// Example-
function vehicles(value) {   // Here we declare a function. It this situation we need to specify the name of the function.
    console.log(value);
    
}
//  theArray.forEach(vehicles)  // Here we call the function.

 
// Here: in callbackfunction
// item, refers the values of each index.
// index, refers the indexes of the array
// array, refers actual array

 theArray.forEach( (items, index, array) => {  // through this parameter we can accesss the values, index and also the all array.
    // console.log(items, index, array);
    
 })

 
 // scenario :- if the array contains objects{} as an each element of the array. So how we can aplly loop on it:-
// This is most important and common situation. Bcz the information which comes from the database always come in the form of array's object.

 const Marvels = [
    {
        MarvelName: "Iron-Man",
        TeamNumber: 1,

    },
    {
        MarvelName: "Thor",
        TeamNumber: 2
    },
    {
        MarvelName: "Captain-America",
        TeamNumber: 3
    }
 ]

 Marvels.forEach( (keys) => {
    // console.log(keys);
    console.log(keys.MarvelName);
   const rt = keys.TeamNumber
   console.log(rt);   

    if (rt == 1) {
        console.log(`got it`);
        
    }
    
    
 })
