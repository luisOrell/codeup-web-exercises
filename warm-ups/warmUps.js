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


    for (let i = 0; i <= 100; i++) {
        if(i % 5 === 0 && i % 3 === 0) {
            console.log("FizzBuzz");
        }
        else if( i % 3 === 0) {
                console.log("Fizz")
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i)
        }
    }





