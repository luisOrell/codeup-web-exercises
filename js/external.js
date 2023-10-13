"use strict";

// console.log("Hello from external Javascript")
//
// //Exercise 1
// alert("Welcome to my website!");
//
// //Exercise 2
// let color = prompt("What is your favorite color?")
//     alert(`Great, ${color} is my favorite color too!`)
//
//Exercise 3
//Part A
//*****My Solution******
// let movieRental = prompt("Which movie would you like to rent?")
//     let day = parseInt(prompt(`How many days would you like to rent ${movieRental}?`))
//     let pricePerDay = day * 3
//     alert(`That will be $${pricePerDay}`)

//******Class Solution*******
// let rentalMermaid = parseInt(prompt("How many days do you want to rent The Little Mermaid"));
//     alert(`You have selected ${rentalMermaid}`);
//
// let brotherBear = parseInt(prompt("How many days do you want to rent Brother Bear"));
// alert(`You have selected ${brotherBear}`);
//
// let hercules = parseInt(prompt("How many days do you want to rent Hercules"));
// alert(`You have selected ${hercules}`);
//
// let total = (rentalMermaid + brotherBear + hercules) * 3;
//
// alert(`Your total is: $${total.toFixed(2)}`)



//Part B
//***My Attempt*****
// let companyWorkedFor = prompt("What company did you work with this week")
//     let companyHours = prompt(`How many hours did you work for ${companyWorkedFor}?`)
//     let googleHours = companyHours * 400
//     alert(`Your check will be ${googleHours}`)
//
//     let amazonHours = companyHours * 380
//     alert(`Your check will be ${amazonHours}`)
//
//     let facebookHours = companyHours * 350
//     alert(`Your check will be ${facebookHours}`)

// let googleRate = 400
// let amazonRate = 380
// let facebookRate = 350
// let googleHours prompt("How many hours did you work for Google")
// let amazonHours prompt("How many hours did you work for Amazon")
// let facebookHours prompt("How many hours did you work for Facebook")
// let totalPayment = googleRate * googleHours
// let totalPayment = amazonRate * amazonHours
// let totalPayment = facebookRate * facebookHours
// console.log(googleRate * googleHours + amazonRate * amazonHours + facebookRate * facebookHours)
//
//
//****Class Solution*****
//Payment Logic Problem

let googlePay = parseInt(prompt("How much does Google pay you per hour?"));

let facebookPay = parseInt(prompt("How much does Facebook pay you per hour?"));

let amazonPay = parseInt(prompt("How much does Amazon pay you per hour?"));

let googleHours = parseInt(prompt("How many hours did you work for Google this week"));

let facebookHours = parseInt(prompt("How many hours did you work for Facebook this week"));

let amazonHours = parseInt(prompt("How many hours did you work for Amazon this week"));

let totalPay = (googlePay * googleHours) + (amazonPay + amazonHours) + (facebookPay + facebookHours);
alert(`Your payment for this week totals to: $${totalPay.toFixed(2)}`)










