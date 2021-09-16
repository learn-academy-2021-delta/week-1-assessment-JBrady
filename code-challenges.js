// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// I'm renaming the variable 'temp' to 'temperature' for clarity and readability.
var temperature = 35
// var temperature = 350
// var temperature = 212

// I can write a basic 'if-else' statement that will compare the current value with the number 212, and return the expected output based on wether the current value is greater or less than 212. This works. There's probably a cleaner way though.

if (temperature == 212) {
    console.log("212 is boiling point")
} else if (temperature == 350) {
    console.log("350 is above boiling point")
} else if (temperature == 35) {
    console.log("35 is below boiling point")
} else {
    console.log("Those are your only choices")
}

// This version doesn't work yet, and is probably more complicated than it needs to be. But it would be fun to get it working.

// var temperature = {
//     boiling: 212,
//     above: 350,
//     below: 35
// }

// var message = `${temperature.boiling} is boiling point`
// var message = `${temperature.above} is above boiling point`
// var message = `${temperature.below} is below boiling point`

// if (temperature.above === 350) {
//     console.log(`${temperature.above} is above boiling point`)
// } else if (temperature.below === 35) {
//     console.log(`${temperature.below} is below boiling point`)
// } else {
//     console.log(`${temperature.boiling} is boiling point`)
// }

// console.log(message)





// --------------------2) Create the code that will combine two arrays and return the length using the variables provided below. Expected output: 10

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

// I can combine the 2 arrays using the accessor method concat(). Then I can use the length property to return the length.
console.log(myNumbers1.concat(myNumbers2).length)






// --------------------3) Create the code that will reverse the letters of a string using the test variables provided below. Expected output: "eilrahc", "atled"

var myString1 = "charlie"
var myString2 = "delta"
// First I thought I would create a variable that contains an array and add myString1 and myString2 into it.
// var myArray = [myString1, myString2]

// But I ran into problems. I tried to use the split() and join() methods, but that returned  [ 'charlie', 'delta' ] because split() and join() methods leave the original array unchanged. Now I think I should combine the 2 variables into a single string first, then use split(), then use reverse(). Finally I'll need to convert it back into a string with join() to get the expected output.
var myString3 = myString2 + ' ,' + myString1
console.log(myString3.split("").reverse().join(""))

// This gives me the expected output. There's probably a cleaner way though.






// --------------------4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12

// var number1 = 42
// var number2 = 27

// I'm going to use an if statement to find out it number1 is greater than number2. If it is, then I'm going to console.log the result of number1 minus number2. If it's not, then I'm going to console.log the result of number2 minus number1.

var number1 = 7
var number2 = 19

if (number1 > number2) {
    console.log(number1 - number2)
} else {
    console.log(number2 - number1)
}

// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable is not a number using the two sets of test variables provided below. Expected output: "Your input is not a number", 3

var numberRefactor1 = 42
var numberRefactor2 = "hello"

// var numberRefactor1 = 27
// var numberRefactor2 = 24

// This is similar to what I have above. I'm using an if statement to find out it number1 is greater than number2. If it is, then I'm going to console.log the result of number1 minus number2. I'm adding else-if to the evaluation to check if number1 is less than number2. If it's less, then I'm going to console.log the result of number2 minus number1. If neither of those can be true (because there's a string instead of a number) then I'll print out "Your input is not a number".
if (numberRefactor1 > numberRefactor2) {
    console.log(numberRefactor1 - numberRefactor2)
} else if (numberRefactor1 < numberRefactor2) {
    console.log(numberRefactor2 - numberRefactor1)
} else {
    console.log("Your input is not a number")
}