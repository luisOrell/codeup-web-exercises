"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(strColor) {
   if(strColor === "red") {
       console.log("Lava is red")
   } else if(strColor === "green") {
       console.log("Grass is green")
   } else if(strColor === "blue") {
       console.log("The sky is blue")
   } else if(strColor === "yellow") {
       console.log("The sun is yellow")
   } else
    console.log("Your color is not available")
}

analyzeColor("red");

//*****Class Solution******
//can use Return keyword or console.log




// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// const randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// console.log(colors)
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

function analyzeColor(color) {

    switch (analyzeColor) {
        case ("red"):
            return "Lava is red"
            break
        case ("green"):
            return "The grass is green"
            break
        case ("yellow"):
            return "The sun is yellow"
            break
        default:
            return "That color is unavailable"
    }
}
console.log(analyzeColor("red"))

//***************class comments************
//Return keyword-after Return statement, Javascript will end program
//Using console.log -> You need to use the Break keyword


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let selectColor = prompt("Select a color")
console.log(analyzeColor(selectColor));
alert(`You selected ${selectColor}`)

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calculateTotal (luckyNumber, totalAmount) {

    if (luckyNumber === 0) {
        return totalAmount + ". Sorry, no discount."
    } else if (luckyNumber === 1) {
        return totalAmount - (.10 * totalAmount);
    } else if (luckyNumber === 2) {
        return totalAmount - (.25 * totalAmount);
    } else if (luckyNumber === 3) {
        return totalAmount - (.35 * totalAmount);
    } else if (luckyNumber === 4) {
        return totalAmount - (.50 * totalAmount);
    } else if (luckyNumber === 5) {
        return totalAmount - totalAmount
    } else {
        return "Invalid lucky number. Please enter a lucky number between 0-5"
    }
}

console.log(calculateTotal(1, 90));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// const luckyNumber = Math.floor(Math.random() * 6);

let totalBill = prompt("What is your bill total");
let priceAfterDiscount = calculateTotal(luckyNumber, totalBill)
alert(`Your lucky number was ${luckyNumber}`);
alert(`You price before the discount was ${totalBill}`);
alert("Your price after the discount is " + priceAfterDiscount)

//*********Class Solution**************
// alert(`Your lucky number is: ${luckyNumber},
// your total before discount is: $${totalBill},
// you total after the discount is: ${calculateTotal(luckyNumber, totalBill)}`)
// //Research parseFloat
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
let askForNumber = confirm("Would you like to enter a number?")
let pickNumber = prompt("Pick a number")
if(pickNumber % 2 === 0) {
    alert("Your number is even")
} else if(pickNumber % 2 !== 0) {
    alert("Your number is odd")
} else {
    alert("You've entered invalid data")
}

let addNum = parseInt(pickNumber) + 100
    alert(`Your number plus 100 is ${addNum}`)
if(pickNumber > 0) {
    alert("Your number is positive");
} else alert("Your number is negative")


//**************Class Solution: Refactor***************

let userConfirm = confirm("Would you like to enter a number?")

if(userConfirm) {
    let userInput = parseFloat(prompt("Enter any number")))
    if(!userInput) {
        alert("You didnt input a number")
    } else {
        return `${num} is an odd number`
    }
}

//Even or Odd Function
function isEvenOdd(num) {
    if(num % 2 === 0) {
        return ${num} "is neither even or odd number"
    } else if(num % 2 === 0){
        return `${num} is an odd number!`
    } else if(num % 2 === 1)
}

// add 100
function addOneHundred(num) {
    return `${num} + 100 is ${num + 100}`
}


// pos or neg
function posNeg(num) {
    if(num > 0) {
        return `${num}`
    }
}






