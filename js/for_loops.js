"use strict"


//--------First Attempt-------
// function showMultiplicationTable(num, i) {
//     return num * i
// }
//
// let num = 1
//
// for(let i = 0; i <= 10; i++) {
//     console.log(showMultiplicationTable(i * num))
// }


//----------Exercise# 2---------
//
// Create a function named showMultiplicationTable that accepts a number and console.logs
// the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

// function showMultiplicationTable (num) {
//     for(let i = 0; i <= 10; i++) {
//         // console.log(`num: ${num}`)
//         // console.log(`i: ${i}`)
//             console.log(`${num} x ${i} = ${num * i}`)
//     }
// }
// showMultiplicationTable(8);


//console.log needs to be declared inside the "for" loop
//Can use template literals for to calculate expression for created variables
//

//-------Exercise 3--------


// let randomNum = (Math.floor(Math.random() * 200))
//
// console.log(randomNum)
//
// for(let i = 20; i < randomNum.length; i++) {
//     if(randomNum % 2 === 0) {
//         console.log(`${randomNum} is even`)
//     } else {console.log((`${randomNum} is odd`))
// } }

//------Working Solution
// for(let i = 0; i < 10; i++) {
//     let random = (Math.floor(Math.random() * ((200-20)+1) + 20)
//     if(random % 2 === 0) {
//         console.log(`${random} is even`)
//     } else {
//         console.log(`${random} is odd`)
//     }
// }





// //------Exercise 4------------
// for(let num = 1; num <= 9; num++) {
//     console.log(num.toString().repeat(num))
// }

// .toString will convert to string
//.repeat will repeat element between parenthesis



//--------Exercise 5----------

// for(let i = 100; i >= 5; i = i - 5) {
//     console.log(i);
// }



//---------Second Attempt for exercises----
// ------Exercise 2

// function showMultiplicationTable (num) {
//     for(let i = 1; i <= 10; i++) {
//         // console.log(`${i}`);
//         // console.log(`${num}`);
//         console.log(`${num} x ${i} = ` + `${num * i}`)
//     }
// }
// showMultiplicationTable(7)

//  -----Exercise 3

// for(let i = 0; i < 10; i++) {
//     let randomNum = Math.floor(Math.random() * ((200-20) + 1) + 20)
//     if(randomNum % 2 === 0) {
//         console.log(`${randomNum} is even`)
//     } else if(randomNum % 2 !== 0) {
//         console.log(`${randomNum} is odd`)
//     }
// }

// ------Exercise 4

for(let num = 0; num < 10; num++) {
    console.log(num.toString().repeat(num))
}

// ------Exercise 5

for(let i = 100; i >= 5; i = i - 5) {
    console.log(i)
}









