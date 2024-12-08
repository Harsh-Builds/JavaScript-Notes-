// General question asked in interview --> JavaScript is a Statically typed language or dynamically typed ?
// Ans:- javaScript is a dynamillay typed language, which means we don't need to specify the type of a variable     when  we declare it. The type is determined autometically at runtime based on the value we assign.



/*const, var, let these are keywords */

const accountName = "harsh" 
var accountpassword="1237" // var is  globally scoped. while let and const are block scoped
let accountEmail = "harsh@123"
const accountId = 123456789
cityName = "moradabad"
let StateName //if we do not give a value then it gives undefined output.

//accountName = Sumit // change into a const variable is not allowed
accountpassword = "000111"   
accountEmail = "saini@999000"
// accountId = 14445// change into a const variable is not allowed
cityName = "Delhi"

console.log(accountName);

// important note : //

/* it is good to not use var
   because of issue in block scope and functional scope. 
*/

//another way to use console.log for multiple variables in tabular form.//

console.table([accountName, accountpassword, accountEmail, accountId, cityName, StateName])