// let a = 1;
// let b = a++;
// let c = ++a;
// // what is the value of a, b, and c?
// //a=1 b=1 c=3
//
// let d = "hello";
// let e = false;
// d++;
// e++;
// // d = NaN
// // e = 0
//
// slet perplexed; // perplexed is undefined (no value is assigned)
// perplexed + 2;
// //NaN
//
// let price = 2.7;
// price.toFixed(2);
// //2.70
//
// let price = "2.7";
// price.toFixed(2);
// //NaN

//***************************
isNaN(0)
//false
isNaN(1)
//false
isNaN("")
//false
isNaN("string")
//true
isNaN("0")
//false
isNaN("1")
//false
isNaN("3.145")
//false
isNaN(Number.MAX_VALUE)
//false
isNaN(Infinity)
//false
isNaN("true")
//true
isNaN(true)
//false
isNaN("false")
//true
isNaN(false)
//false
// to illustrate why the isNaN() function is needed:
NaN == NaN
//false

!true
//false
!false
//true
!!true
//true
!!false
//false
!!0
//false
!!-0
//false
!!1
//true
!!-1
//true
!!0.1
//true
!!"hello"
//true
!!""
//false
!!''
//false
!!"false"
//true
!!"0"
//true

//*************************Question 2***********

let sample = 'Hello Codeup';
console.log(sample.length);

// Uppercase
console.log(sample.toUpperCase());

// Lowercase
console.log(sample.toLowerCase());

//concatenate sample to add students
// sample = sample + " Students"
sample += " Students"
// +=  shorthand method for sample = sample + "students"
console.log(sample);

// replace students with class
console.log(sample.replace("Students", "Class"))

//**************************Question 3*****************
//****part A********
let p = 3
let hercules = 1 * p
let brotherBear = 5 * p
let littleMermaid = 3 * p
console.log(totalFees = hercules + brotherBear + littleMermaid)

//*******part B*******
let googlePerHour = 400;
let amazonPerHour = 380;
let facebookPerHour = 350;

let googleHoursWorked = 6
let amazonHoursWorked = 4
let facebookHoursWorked = 10

let totalPay = (googleHoursWorked * googlePerHour) +
    (amazonHoursWorked * amazonPerHour) +
    (facebookHoursWorked * facebookPerHour);
console.log(totalPay)

//************************Question 4************
let username = ' codeup ';
let password = ' notastrongpassword ';

//password at least 5 characters
let pwLength = password.length >= 5;
console.log(pwLength);

// //password must not include the username - incorrect solution
// let passwordCheck = password !== username;
// console.log(passwordCheck);

//correct solution
let notInclude = !password.includes(username);
console.log(notInclude);

let usernameLength = username.length <= 20;
console.log(usernameLength);

let noWhiteSpace = (username.trim() = username) && (password.trim() = password);

