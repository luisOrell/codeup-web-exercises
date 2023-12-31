let a = 1;
let b = a++;
let c = ++a;
// what is the value of a, b, and c?
//a=1 b=1 c=3

let d = "hello";
let e = false;

d++;
e++;
// d = NaN
// e = 0

let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
//NaN

let price = 2.7;
price.toFixed(2);
//2.70

let price = "2.7";
price.toFixed(2);
//NaN

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
false
isNaN(Number.MAX_VALUE)
//true
isNaN(Infinity)
//false
isNaN("true")
//true
isNaN(true)
//false
isNaN("false")
//true
isNaN(false)
false
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
//0
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


let hercules = 1 * p
let brotherBear = 5 * p
let littleMermaid = 3 * p
let p = 3
total = hercules + brotherBear + littleMermaid

let googlePerHour = 400;
let amazonPerHour = 380;
let facebookPerHour = 350;

let googleHours = 6
let amazonHours = 4
let facebookHours = 10

let totalPay = (googleHoursWorked * googlePerHour) +
 (amazonHoursWorked * amazonPerHour) +
 (facebookHours * facebookPerHour);

console.log(totalPay)

//*********Question 4********

let username = 'codeup';
let password = 'notastrongpassword';

let pwLength = password.length >= 5;
console.log(pwLength);

let passwordCheck = password !== username;
console.log(passwordCheck);

let usernameLength = username.length <= 20;
console.log(usernameLength);

//only solution
let notInclude = !password.includes(username);
console.log(notInclude)

let whiteSpace = (username.trim() == username) && (password.trim() == password);







