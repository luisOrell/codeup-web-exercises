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

const capitalizeFirstLetter = str => str.substring(0, 1).toUpperCase() + str.substring(1);

console.log(capitalizeFirstLetter("testString"));


