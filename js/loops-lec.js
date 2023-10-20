// let i = 0;
//
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// do while loop
// let i = 12;
//
// do {
//     console.log(i);
//     i++;
// } while (i < 10)

// -------- mini exercise-----------
// Create a variable called num that is equal to 0;
// Write a while loop that increments "num" by 5 so long as num is less than 100
// Do the same thing with a do-while

// let num = 0;
//
// while (num <= 100) {
//     console.log(num = num + 5);
// }

// do while

// do {
//     console.log(num);
//     num += 5;
// } while (num < 100);

// const secretNumber = 7;
// let guess;
// let attempt = 0
//
// // do-while
//
// do {
//     guess = parseInt(prompt('Guess the secret number (1-10):'));
//     attempt++
//     if(guess === secretNumber) {
//         console.log("You have guessed the lucky number")
//     } else {
//         if(guess < secretNumber) {
//             console.log("Try a higher number.")
//         } else {
//             console.log("Try a lower number")
//         }
//         console.log("Incorrect guess! " + attempt + " total attempt" )
//     }
//
// } while (guess !== secretNumber)

//for (/*initialization*/; /*condition*/; /*increment*/) {
    // body
//}

// for(let i = 10; i <= 20; i++) {
//     console.log(i);
// }

// for (let num= 0, num < 100; num += 5) {
//     console.log(num);
//}

// let hello = "hello"
// for(let i= 0; i <= hello.length; i++) {
//     console.log(hello.charAt(i))
//     // console.log(hello[i])
// }

// for(let i = 0, j = 9; i < 10; i++, j--) {
//     console.log("for loop iteration#" + ` i= ` + i + ' j= ' + j);
// }


// Break
// for(let i = 0; i < 100; i += 5) {
//     console.log(i)
//     break;
//     console.log('snippet never reached')
// }


// for(let i = 0; i < 100; i += 5) {
//     console.log(i)
//     if(i ===50) {
//         break;
//     }
// }
// console.log('Trying to break out of the loop')
//console.log is outside of For Loop

// Continue
// for(let i = 1; i <= 5; i++) {
//     if(i === 3) {
//         continue
//     }
//     console.log(i)
//}
// In this example, the Continue keyword skips iteration 3(condition specified) and continues with the loop
// Break will stop at the condition, exclusive of the specified condition

for(let i = 1; i < 100; i++) {
    if(i % 2 === 0) {
        continue;
    }
    console.log(i)
}
// Here, Continue will skip over all the even numbers