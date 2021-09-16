// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
console.log(cohort.length)

// a) Your answer: This will return the answer of 10.
// b) Verify and explain: I was correct. The length of the variable cohort is 10. The variable cohort has 10 characters, and the console.log is instructing to return the length of the variable.


// --------------------2) What will this log?

var greeting = "Hello World!"
console.log(greeting[3])

// a) Your answer: This should print out "Hello World" 3 times in a row
// b) Verify and explain: I was wrong. It's actually telling console.log to return the character located in the index of 3, which is the letter 'l'.


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
console.log(languages[index])

// a) Your answer: This should return Ruby.
// b) Verify and explain: I was correct. It returns Ruby because Ruby is located in the index of 1 within the languages array.


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())
console.log(weekendDays.join(", ").toUpperCase())

// a) Your answer: This will return the entire array converted to uppercase letters.
// b) Verify and explain: This returns the TypeError "weekendDays.toUpperCase is not a function". That's because the .toUpperCase() method is suppossed to be used on strings, not arrays. If you use .join(", ") first, then use .toUpperCase() it returns the output I described in my answer above.


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: This should return the output "number" 
// b) Verify and explain: I was correct. The console.log statement is telling us its going to return the dataType of dataTypes.length. Length will always be a number, so the output is "number".
