// //Luis Orellana
// //"Daily Warmups"
// let name = "Luis Orellana"
// let year = "2006"
//
// console.log(`My name is ${name} and I graduated high school in ${year}`
// )
//
// function capitalizeFirstLetter(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
//
// console.log(capitalizeFirstLetter("codeup"));
//Reminder to put logic on the "return" line of the function, and run the function using the console.log
//charAt method uses the index to select the position of the character in the string
//Slice method selects the character and removes the prior characters


//******Alternative Solutions*******
// const capitalizeFirstLetter = (str) => {
//     console.log(str)
//     let firstLetter = str.substring(0, 1);
//     let capitalizedFirstLetter = firstLetter.toUpperCase();
//     let restOfWord = str.substring(1)
//
//     return capitalizeFirstLetter + restOfWord;
// }

//
// }
//
// capitalizeFirstLetter("testString")

// const capitalizeFirstLetter = str => str.substring(0, 1).toUpperCase() + str.substring(1);
//
// console.log(capitalizeFirstLetter("testString"));

// Largest Number
// function largestNum (num1, num2, num3) {
//     return Math.max(num1, num2, num3)
// }
//
// console.log(largestNum(46, 67, 13));

// let num = 100

// while (num > 0) {
//     num = num - 5;
//     if(num % 2 === 0) {
//         console.log(num + " even")
//     } else console.log(num)
//
// }

// function evenNum() {
//     for(let num = 1; num <= 100; num++) {
//         // console.log(num);
//         if(num % 2 === 0) {
//             console.log(num);
//         }
//     }
// }
//
// evenNum();
//*****Oct 23 -> Create an array of at least 5 of your favorite movies. Create a for each loop to console log all of your movies in alphabetical order.


const favMovies = ['goodfellas', 'casino', 'apollo13', 'starWars', 'gladiator' ];
    favMovies.sort()

    favMovies.forEach(movie => console.log(`Here is one of my favorite movies: ${movie}`))

    // favMovies.forEach (movie =>{
    //     console.log(movie)
})



