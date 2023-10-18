"use strict";

console.log("Hello from external Javascript")

//Exercise 1
alert("Welcome to my website!");

//Exercise 2
let color = prompt("What is your favorite color?")
    alert(`Great, ${color} is my favorite color too!`)


//Exercise 3
//***Part A***

let rentalMermaid = parseInt(prompt("How many days do you want to rent The Little Mermaid"));
    alert(`You have selected ${rentalMermaid}`);

let brotherBear = parseInt(prompt("How many days do you want to rent Brother Bear"));
alert(`You have selected ${brotherBear}`);

let hercules = parseInt(prompt("How many days do you want to rent Hercules"));
alert(`You have selected ${hercules}`);

let total = (rentalMermaid + brotherBear + hercules) * 3;

alert(`Your total is: $${total.toFixed(2)}`)



//********Part B*********

//Payment Logic Problem

let googlePay = parseInt(prompt("How much does Google pay you per hour?"));

let facebookPay = parseInt(prompt("How much does Facebook pay you per hour?"));

let amazonPay = parseInt(prompt("How much does Amazon pay you per hour?"));

let googleHours = parseInt(prompt("How many hours did you work for Google this week"));

let facebookHours = parseInt(prompt("How many hours did you work for Facebook this week"));

let amazonHours = parseInt(prompt("How many hours did you work for Amazon this week"));

let totalPay = (googlePay * googleHours) + (amazonPay + amazonHours) + (facebookPay + facebookHours);
alert(`Your payment for this week totals to: $${totalPay.toFixed(2)}`)

