"use strict"

//*****arrays******

// [] // an empty array
//
//     [1] // an array with one element
//
//     [1, 2, 3, 4, 5] // an array with 5 elements
//
//     ["one", 42, [8, 9, 10]] // an array with 3 elements all of different types
// // notice that the array above does *not* have 5 elements, rather the last
// // element is itself an array with 3 elements in it

// Storing arrays in variables
// const shapes = ['square', 'rectangle', 'circle', 'triangle'];

//counting element of an array using .length

// console.log(shapes.length); // 4
//
// // accessing array element values using the index number
//
// const numbers = [1, 2, 3, 4];
//
// console.log(numbers[0]); // 1
// console.log(numbers[1]); // 2
// console.log(numbers[2]); // 3
// console.log(numbers[3]);
//
// console.log(`There are ` + shapes.length + ` shapes in the array`)
//
// console.log(`The first shape is: ` + shapes[0]);
// //The first shape is: square





//using for loops to iterate through an array
//loop through the array and log the values
// for(let i = 0; i < shapes.length; i++) {
//     console.log(`The shape at index ` + `is ` + shapes[i]);
//}

//-----using for of loop to iterate through an array----//
// const iterable = [1, 2, 3, 4, 5];
//
// for(let element of iterable) {
//     console.log(element)
// }
//
// for(let num of numbers) {
//     console.log(num)
// }



//---using for each loop to iterate through an array---//
// shapes.forEach(shape => console.log(`Here is a lovely shape:${shape}`));
//
// numbers.forEach(num => console.log(`This is a number in my numbers array: ${num}`));



//------using spread operatr to add element to one array----//
// const arr = [3, 5, 7];
// function randomNumber(min, max) {
//     Math.floor(Math.random() * )
// }











//-----using spread opeartor to
// const someNums = [20, 5]
//
// function multiply(num1, num2) {
//     return num1 * num2
// }
//
// console.log(multiply(...someNums));




// function add (...args) {
//     let total = 0
//     for (let i = 0; i < args.length; i++) {
//         total += args[i];
//     }
//     return total
// }
//
// //passing a variosu # of arguments
// const randNumArr1 = [55, 1, 58, 66, 65];
// console.log(add(...randNumArr1));

const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday']

console.log(daysOfTheWeek)

//Adding elements to an array
//lets add Sunday
daysOfTheWeek.unshift('Sunday')

console.log(daysOfTheWeek);

//add Friday and Saturday

daysOfTheWeek.push('Friday', 'Saturday')

console.log(daysOfTheWeek);



//Removing elements from an array
const todoList = ['Take out the trash', 'Clean the car', 'Pay the bills'];

console.log(todoList)

const removedItem = todoList.pop();
console.log('Completing the last item: ' + removedItem)




let slice = colors.slice(2, 4)
//first parameter will be included, second parameter will be excluded
