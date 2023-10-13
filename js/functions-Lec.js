"use strict"

//Create a function named sum that takes in two numbers and returns the sum of the two numbers.


//*****Get comfortable using this type of function*******
function sum (num1, num2) {
    return num1 + num2
}

//to call a function, you need to add parenthesis to the name of the function
console.log(sum(15, 25));


// Create a function named fullName that takes in two inputs, a first name and last name, and returns the first name and last name concatenated together;
//******Using Concatenation**********

// function fullName (firstName, lastName) {
//     return firstName + " " + lastName;
// }
//
// console.log(fullName("jason", "alexander"));

//***refactor with Template Literals*******
// function fullName (firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }

//NOTE: return statement will exit out of the function. No other code will run after return statement******


// Anonymous Function / Function Expression

// const decrement = function(input) {
//     return input - 1;
// }
//
// console.log(decrement(5));

// Arrow Functions

//longer arrow function//
// function fullName (firstName, lastName) {
//      return firstName + " " + lastName;
// }

// const fullName = (firstName, lastName) => {
//     return firstName + " " + lastName;
// }
//
// console.log(fullName('Michael', 'Jordan'));

//Short Arrow Function//
//Note: The return is implied, if no curly braces are present.
const fullName = (firstName, lastName) => firstName + " " + lastName;

console.log(fullName('Michael', 'Jordan'));


//Create a function that takes in a string and transforms the string to lowercase letters.

let sampleString = "HoW oN eArTh dOeS tHis WoRk"
//
// function changeToLowerCase(str) {
//     sampleString = str.toLowerCase();
// }
//
// console.log(sampleString);
//
// changeToLowerCase(sampleString);
//
// console.log(sampleString);

// Arrow Function

// const lowerCaseString = (str) => str.toLowerCase();
//
// console.log(sampleString)
// console.log(lowerCaseString(sampleString))
// console.log(sampleString)

//function increment(num) {
//  alert(num + 1);
//  }

//Cannot log a value if nothing is returned, the result would be undefined.
//console.log(increment(5))

function greeting(greeting = 'Howdy!') {
    return greeting;
}

console.log(greeting());
console.log(greeting('Greetings!'))

let globalVar = 'Hello! My name is Globie!'

function test() {
    let localVar = 'Hello, my name is Lola'
    console.log(localVar);
    {
        let inngerCar = "Nested Var!"
    }
}

console.log(localVar)
test();