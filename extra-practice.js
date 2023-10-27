// function isEqualNumber (value1, value2) {
//     if(parseInt(value1) === parseInt(value2)) {
//         return true
//     } else return false
// }
//
// console.log(isEqualNumber(9.3, 7.4));            // false
// console.log(isEqualNumber(3.14, 3.14));      // true
// console.log(isEqualNumber(7.4, 9.3));           // false
// console.log(isEqualNumber(-9.3, 7.4));           // false
// isEqualNumber(-3.14, 3.14)         // false
// isEqualNumber(-7.4, 9.3)           // false
// isEqualNumber(9.3, -7.4)           // false
// isEqualNumber(3.14, -3.14)         // false
// isEqualNumber(7.4, -9.3)           // false
// isEqualNumber(-9.3, -7.4)          // false
// console.log(isEqualNumber(-3.14, -3.14));        // true
// isEqualNumber(-7.4, -9.3)          // false
// isEqualNumber(null, null)          // false
// isEqualNumber('Seven', 'eight')    // false

// function isEqual (value1, value2) {
//     return value1 === value2;
// }
//
// console.log(isEqual("Bill", "Bill"));    // true
// console.log(isEqual(9, 9));              // true
// console.log(isEqual(null, null));        // true
// console.log(isEqual(false, false));      // true
// console.log(isEqual("Codeup", "time"));  // false
// console.log(isEqual("James", Jimmy));    // false
// console.log(isEqual(null, true));        // false
// console.log(isEqual(true, false));       // false
// console.log(isEqual('4', 4));            // false

// function isNot (argument) {
//     if(argument === null)
//     {return false}
//     else if(arguments) {
//         return !argument
//     }
// }
// console.log(isNot(false));            // true
// console.log(isNot(true));             // false
// console.log(isNot("Bob"));            // false
// console.log(isNot(null));             // false

// function calcAbs (numberArg) {
//     if(numberArg === null || isNaN(numberArg)) {
//         return 0
//     } else if(numberArg) {
//         return Math.abs(numberArg)
//     }
// }
//
// console.log(calcAbs(10));              // 10
// console.log(calcAbs(-17.3));           // 17.3
// console.log(calcAbs(2.7 - 3.8));       // 1.1
// console.log(calcAbs("Bob"));           // 0
// console.log(calcAbs(null));            // 0

// function calcCube (numberArg) {
//     if(numberArg === null || isNaN(numberArg)) {
//         return 0
//     } else {
//         return Math.pow(numberArg, 3);
//     }
// }
//
// console.log(calcCube(10));         // 1000
// console.log(calcCube(3));          // 27
// console.log(calcCube(-4));         // -64
// console.log(calcCube("Bob"));      // 0
// console.log(calcCube(null));       // 0

// function isTypeMatch (arg1, arg2) {
//     return typeof arg1 === typeof arg2;
// }
//
// console.log(isTypeMatch(16.3, -84));                // true
// console.log(isTypeMatch("Hello", " stranger"));     // true
// console.log(isTypeMatch("Hello", 1984));            // false
// console.log(isTypeMatch(true, "stranger"));           // false
// console.log(isTypeMatch(null, 27));                 // false

// function findLongestString(str1, str2) {
//     if (typeof str1 === "string" && typeof str2 !== "string") {
//         return str1;
//     }  else if (typeof str1 !== "string" && typeof str2 === "string") {
//         return str2;
//     } else if (typeof str1 !== "string" && typeof str2 !== "string") {
//         return "";
//     } else if(str1.length > str2.length) {
//         return str1;
//     } else {
//         return str2;
//     }
// }

// console.log(findLongestString("Jethro", "Tull"));         // "Jethro"
// console.log(findLongestString("Hello", " stranger"));     // " stranger"
// console.log(findLongestString("Hello", 1984));            // "Hello"
// console.log(findLongestString(true, "stranger"));         // "stranger"
// console.log(findLongestString(null, 27));                 // ""

function isFactor (num1, num2) {
   if(typeof num1 !== "number" || typeof num2 !== "number" || num1 === 0) {
       return false;
   } else return num2 % num1 === 0
}

console.log(isFactor(3, 9));         // true
console.log(isFactor(-4, 16));       // true
console.log(isFactor(9, 3));         // false
console.log(isFactor(true, 2));      // false
console.log(isFactor(null, 13));     // false
console.log(isFactor(0, 8));;        // false