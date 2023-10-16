// console.log("Hello World")

// let age = 17;

// if(age >= 16) {
//     console.log("You're eligible to drive")
// }
//
// if(age < 16) {
//     console.log("You can't drive yet")
// }

//same example with if/else conditional

// if (age >= 16) {
//     console.log("You can drive")
// } else {
//     console.log("You need to grow up")
// }

// let currentDay = prompt("What day is today?").toLowerCase()
//
// if(currentDay === 'monday' ||
//     currentDay === 'tuesday' ||
//     currentDay === 'wednesday') {
//     console.log("I love " + currentDay);
// } else {
//     console.log(currentDay + " is not a valid day")
// }

// let letsPlay = confirm("Do you want to play?")
//
// if(letsPlay) {
//     console.log("Great lets play xyz")
// } else {
//     console.log("Maybe next time")
// }

// const username = "user";
// const password = "password";
//
// //prompt the user to enter a username and a password
// const inputedUsername = prompt("Please enter a username")
// const inputedPassword = prompt("Please enter a password")

//next I want to console.log("You're logged in") if username, inputedUsername && password, inputedPassword match)
// if(username === inputedUsername && password === inputedPassword) {
//     console.log("You're logged in!")
// } else if(username !== inputedUsername && password !== inputedPassword) {
//     console.log("Incorrect username and password")
// } else if (username !== inputedUsername) {
//     console.log("Incorrect username")
// } else if (password !== inputedPassword) {
//     console.log("Incorrect password")
// } else {
//     console.log("Unexpected error")
//}

// Nested Conditional example
// if(username === inputedPassword) {
//     if(password === inputedPassword) {
//         console.log("Logged in")
//     } else {
//         console.log("Incorrect password")
//     }
// } else {
//     console.log("Invalid username")
// }

// Ternary Operator
// ? represents the true condition(if)
// : represents the false condition(else)
// let name = "Cat";
// let greeting = (name === "Bob") ? ("Hello, " + name) : ("Hello stranger!");
// console.log(greeting)
//
// let currentCurrentDay = currentDay === 'monday' || currentDay === 'tuesday' || currentDay === 'wednesday' ? "I love" + currentDay : currentDay + " is not a valid day"
// console.log(currentCurrentDay);

// Switch Statement example
let daysOfWeek = 'Thursday';

switch(daysOfWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It's a weekday.");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's a weekend day")
        break;
    default:
        console.log("Invalid day of the week");
}


// using function and if/else
function sayHello(name) {
    if(name.length <= 20) {
        return `Hello, ${name}`
    } else {
        return "That is way too long of a name"
    }
}

alert(sayHello("Lasso"))