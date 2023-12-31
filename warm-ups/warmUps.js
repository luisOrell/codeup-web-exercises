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


// const favMovies = ['goodfellas', 'casino', 'apollo13', 'starWars', 'gladiator' ];
//     favMovies.sort()
//
//     favMovies.forEach(movie => console.log(`Here is one of my favorite movies: ${movie}`))
//
//     // favMovies.forEach (movie =>{
//     //     console.log(movie)
// })

// const cars = [
//     {
//         make: "Honda",
//         model: "Civic",
//         color: "Black"
//     },
//     {
//         make: "Toyota",
//         model: "Supra",
//         color: "Silver"
//     }
// ]
//
// cars.forEach((car) => {
//     console.log((`Car Make: ${car.make}`))
//     console.log((`Car model: ${car.model}`))
//     console.log((`Car color: ${car.color}`))
// })


//using a for of loop
// for (let car of cars) console.log(`Here is an awesome ${car.make} ${car.model} in ${car.color}`)

// Objective: Create a function that takes in an array and returns an array of the names of people who know JavaScript.
//
//     Data Structure/Example Input:
//     let developers = [
//         {
//             name: "Jonathan",
//             languages: {
//                 frontend: ["HTML", "JavaScript", "CSS"],
//                 backend: ["Java"]
//             }
//         },
//         {
//             name: "Bonnie",
//             languages: {
//                 frontend: ["JavaScript"],
//                 backend: []
//             }
//         },
//         {
//             name: "Raj",
//             languages: {
//                 frontend: [],
//                 backend: ["C#", "Java", "Python"]
//             }
//         },
//         {
//             name: "Carmen",
//             languages: {
//                 frontend: ["JavaScript", "HTML", "CSS", "React"],
//                 backend: ["C#", "Java", "Python", "TypeScript"]
//             }
//         },
//     ]

// function jsDevs (arr) {
//     let devs = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i].languages.frontend.includes("JavaScript")) {
//            devs.push(arr[i].name);
//         }
//     }
//     return devs
// }
// console.log(jsDevs(developers));


// const knowsJavaScript = (arr) => {
//     let javaScriptDevs = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].languages.frontend.length; j++) {
//             if(arr[i].languages.frontend[j] === "Javascript") {
//                 javaScriptDevs.push(arr[i].name)
//             }
//         }
//     }
//     return javaScriptDevs;
// }

// function newFunction (arrOfElements, bgColor, textColor) {
//     for (let i = 0; arrOfElements.length; i++) {
//         arrOfElements[i].style.backgroundColor = bgColor;
//         arrOfElements[i].style.color = textColor;
//     }
//     return arrOfElements;
// }
//     console.log(newFunction(elements, "purple", "gold"));

//     return {
//         element: arrOfElements[0],
//         style: bgColor,
//         color: textColor
//     }
// }

// let elements = [
//     {
//         el: "button",
//         style: {
//             backgroundColor: "white",
//             color: "black"
//         },
//         content: "Submit"
//     },
//     {
//         el: "p",
//         style: {
//             backgroundColor: "white",
//             color: "black"
//         },
//         content: "Our company is better at doing company things than your company."
//     },
//     {
//         el: "h2",
//         style: {
//             backgroundColor: "white",
//             color: "black"
//         },
//         content: "Welcome Back!"
//     }
// ];


    // for (let i = 0; i <= 100; i++) {
    //     if(i % 5 === 0 && i % 3 === 0) {
    //         console.log("FizzBuzz");
    //     }
    //     else if( i % 3 === 0) {
    //             console.log("Fizz")
    //     }
    //     else if (i % 5 === 0) {
    //         console.log("Buzz");
    //     }
    //     else {
    //         console.log(i)
    //     }
    // }

//  let countFunc = () => {
//     for (let i = 0; i <= 100; i++) {
//         if (i % 5 === 0 && i % 3 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
// countFunc()

// fetch('https://pokeapi.co/api/v2/pokemon/blastoise')
//
// .then(res => res.json())
//
// .then(data => createPokemonImg )

function diagonalDifference(arr) {
    // Write your code here
    LRarray = [];
    RLarray = [];
    LRtotal = 0;
    RLtotal = 0;
    arr.map ((num, index) => {
        // console.log(num)
        // console.log(index)
        // console.log(num[index])
        LRarray.push(num[index]);
    })
    // console.log(LRarray)

    arr.reverse().map((num, index) => {
        // console.log(num[index])
        RLarray.push(num[index])
    })

    LRarray.forEach((num) => {
        LRtotal += num;
    })

    RLarray.forEach(num => RLtotal += num)
    // console.log(RLtotal)

    console.log(Math.abs(RLtotal - LRtotal));

}

diagonalDifference([
                        [11, 2,4 ],
                        [4, 5, 6],
                        [10, 8, -12]
                                    ])


//const incremented = numbers.map( n => n + 1 );
// console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


//***Hacker Rank Exercise***
function getDiagonal(arr) {
    // Write your code here
    // INITIALIZING AN EMPTY ARRAY THAT WILL STORE MY LEFT TO RIGHT VALUES
    let LeftToRightArr = [];
    // INITIALIZING A VARIABLE THAT WILL STORE THE *TOTAL* OF MY LEFT TO RIGHT VALUES
    let LRTotal = 0;
    // INITIALIZING AN EMPTY ARRAY THAT WILL STORE MY RIGHT TO LEFT VALUES
    let RightToLeftArr = [];
    // INITIALIZING A VARIABLE THAT WILL STORE THE *TOTAL* OF MY RIGHT TO LEFT VALUES
    let RLTotal = 0;

    //vv num IS REPRESENTING THE VALUE OF THE ELEMENT AT THE CURRENT INDEX FOR EACH ITERATION/MAPPING,
    //vv IN THIS CASE num REPRESENTS EACH NESTED ARRAY IN OUR arrOfNums ARRAY WE ARE PASSING AS AN ARGUMENT TO OUR getDiagonal FUNCTION.
    arr.map((num, index) => {
        // ^^ index REPRESENTS THE CURRENT INDEX OF EACH ELEMENT (EACH NESTED ARRAY) WHICH
        // IN THIS CASE HAPPENS TO CORRELATE/MATCH UP WITH THE ELEMENT IN THE NESTED ARRAY THAT WE WANT TO EXTRACT.
        // console.log(num);
        // console.log(index);
        // console.log(num[index]);
        // vv PUSHING MY EXTRACTED VALUES TO MY EMPTY LeftToRightArr ARRAY.
        LeftToRightArr.push(num[index]);
    })
    //vv BY USING .reverse() ON THE arr PARAM WE ARE REVERSING THE ORDER OF THE NESTED ARRAYS IN THE PARAM.
    //vv AFTER REVERSING WE CAN USE .map() JUST LIKE BEFORE, IT WILL STILL EXTRACT THE VALUE FROM LEFT TO RIGHT, BUT
    //BECAUSE arr IS NOW REVERSED WE GET CORRECT VALUES.
    arr.reverse().map((num, index) => {
        // console.log(num);
        // console.log(num[index]);
        // vv PUSHING MY EXTRACTED VALUES TO MY EMPTY RightToLeftArr ARRAY.
        RightToLeftArr.push(num[index]);
    })
    // console.log(rightArr);
    // console.log(leftArr);
    //LOOPING THROUGH NEW POPULATED LeftToRightArr ARRAY OF NUMBERS
    LeftToRightArr.forEach((num) => {
        // ON EACH ITERATION IM ADDING THE VALUE OF num TO MY LRTotal VARIABLE.
        LRTotal += num;
    })
    //LOOPING THROUGH NEW POPULATED LeftToRightArr ARRAY OF NUMBERS
    //vv ON EACH ITERATION IM ADDING THE VALUE OF num TO MY RLTotal VARIABLE.
    RightToLeftArr.forEach((num) => RLTotal += num)
    // console.log(Math.abs(LRTotal - RLTotal));
    // vv USING Math.abs() TO RETURN THE ABSOLUTE VALUE OF THE DIFFERENCE OF MY TWO TOTALS.
    return Math.abs(LRTotal - RLTotal)
}

let arrOfNums = [
    [ 11, 2, 4 ],
    [ 4, 5, 6],
    [ 10, 8, -12]
];

// getDiagonal(arrOfNums);
console.log(getDiagonal(arrOfNums));


