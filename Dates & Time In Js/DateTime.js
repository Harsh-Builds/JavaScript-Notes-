// In JavaScript, you can work with dates using the Date object.
// the Date object is built-in (inbuilt) in JavaScript. It comes as part of the JavaScript language, so you don't need to import or install anything to use it. Just call new Date() or any Date methods directly.

// Always remeber point:-
// In js the counting of months and days start from 0. [ 0 = Jan, 11 = Dec], [ 0 = Sunday, 6 = Saturday ]

let TheDate = new Date(); // 'Thedate' is an instance of the Date object.
                          // Instance means in js , a new version of an object.
                          // It inherit the all methods or properties of Date(). Inheritance means one class or object can use the properties and methods of another class or object.
console.log(TheDate);
console.log(typeof TheDate);

/* Here are some methods that we can use to Get Specific Parts of the Date */


// Year :  date.getFullYear()
console.log(TheDate.getFullYear());


// Month (0-11) :  date.getMonth() (0 = January, 11 = December)
console.log(TheDate.getMonth()); // Output: 10, it means november becz in js the counting of months and days start from 0.
console.log(TheDate.getMonth() + 1); // Add 1 for correct month, bcz the user does not know that 10 refers Nov, so becz of a user's point of view we reflect it in a correct form.


// Date (date of the month):  date.getDate()
console.log(TheDate.getDate());


// Day (0-6)   :  date.getDay() (0 = Sunday, 6 = Saturday)
console.log(TheDate.getDay());


// Hours  :  date.getHours()
console.log(TheDate.getHours()); // It counts the hours of the day, in current time.


// Minutes :  date.getMinutes()
console.log(TheDate.getMinutes());


// Seconds :  date.getSeconds()
console.log(TheDate.getSeconds());


// Time  : date.getTime()
console.log(TheDate.getTime());  // getTime() returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(Math.floor(TheDate.getTime()/1000)); // covert millisecond into seconds.


 /////////////////////////////////////////////////////////////


 /* Now, Use some imporatant methods of date & Time */

 let Mydate = new Date()
 console.log(Mydate); // This output does not provide a readable form.
 
 // .toString() :-
//  The .toString() method in the Date object is used to convert a Date instance into a readable string. It gives the date and time in a human-readable format, including the time zone.
// It converts day and month into human readable form. Ex:-
// 0 => Sun,  10 => Nov

console.log(Mydate.toString());

// .toDatwString() :-
console.log(Mydate.toDateString());  // It does not include the time or time zone.

// .toTimeString() :-
console.log(Mydate.toTimeString());  // It does not include the date. Useful when you only need the time and time zone.

// .toLocalString() :-
console.log(Mydate.toLocaleString()); // Basic use, covert date and time into human readable local time and formate.


// We can also create Real Dates and time:-
let CreateDate = new Date(2024,2,10,12,50,20)  //  (YY/MM//Date   Time).  => It is formate of passing values.

console.log(CreateDate.toDateString());
console.log(CreateDate.toString());
console.log(CreateDate.toLocaleString());

// we can also pass values as string 
let Cdate = new Date("03-10-2024")
console.log(Cdate.toDateString());

// .ToLocalString:- main and important Use:-

///// Basic Use /////
let Newdate =  new Date();
console.log(Newdate.toLocaleString());

///// Specify Locale /////
console.log(Newdate.toLocaleString("en-GB"));  //  British English (dd/mm/yyyy format)
console.log(Newdate.toLocaleString("en-IN"));  //  Indian English (dd/mm/yyyy format)

////// Use Options /////
// We can control the format by using options.

// Syntax:- date.toLocaleString( locale, option);

// locale: A string that specifies the language and region (e.g., "en-IN" for English - India).
// options: An object where you define the formatting rules.

let nowDate = new Date();
console.log(nowDate.toLocaleString('default', {

      weekday: "long", // Full name of the day
        year: "numeric", // Full year (e.g., 2024)
        month: "long",   // Full month name (e.g., November)
        day: "numeric",  // Numeric day of the month
        hour: "2-digit", // 2-digit hour
        minute: "2-digit", // 2-digit minute
        hour12: true      // 12-hour format
        
}));
