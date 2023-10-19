// let num = 1;
//
// while(num < 65536) {
//     num = num * 2;
//     console.log(num)
// }

// Do while

//Working Solution
// let allCones = Math.floor(Math.random() * 50) + 50;
// //creates a random number of available cones between 50-100, wrapped in a variable
// let numSold;
// //numSold is the variable for the number of cones sold
//
// do {
//     numSold = Math.floor(Math.random() * 5) + 1;
//     //create a random number between 1 and 5 for number of cones sold to a customer
//     if (allCones < numSold) {
//         //if # of available cones is less than the number of cones sold
//         console.log('Cannot sell you ' + numSold + 'cones, I only have' + allCones);
//         //Cannot sell you numSold (random#) number of cones, I only have numSold(random#) number of cones left
//         continue;
//         //"Continue" keyword jumps over one iteration of loop // as opposed to "Break", which breaks out of the loop
//     }
//     allCones = allCones - numSold
//     // allCones -= numSold
//     //Subtract number of cones sold from the number of available cones
//
//     console.log(numSold + " comes sold.")
//     //Number of sold cones is
// } while(allCones > 0)
// // While I have 1 or more cones
// console.log("Yay, they've all sold)")


// ----------Alternative----------
let allCones = Math.floor(Math.random() * 50) + 50;
let numSold;

do {
    numSold = Math.floor(Math.random() * 5) + 1;
    if (allCones < numSold) {
        console.log('Cannot sell you ' + numSold + 'cones, I only have' + allCones);

    } else (allCones -= numSold)
    console.log(numSold + " comes sold.")

} while(allCones > 0)
console.log("Yay, they've all sold)")


//------Class Solution
// This is how you get a random number between 50 and 100

// let allCones = Math.floor(Math.random() * 50) + 50;
//
//
// do {
//     let soldCones = Math.floor(Math.random() * 5) + 1;
//     console.log(allCones)
//
//     if(soldCones <= allCones) {
//         console.log(`${soldCones} cones sold.....`)
//         allCones -= soldCones
//     } else {
//         console.log(`Cannot sell you ${soldCones} cones. I only have ${allCones} left`)
//     }
//
//
// } while (allCones !== 0)
// console.log("Yay! I sold them all!")

//-----Working Solution------
let allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;

do {
    let conesSold = Math.floor(Math.random() * 5) + 1;
    if(conesSold <= allCones) {
        console.log(`${conesSold} have been sold`);
        allCones = allCones - conesSold;
    } else {
        console.log(`Cannot sell you ${allCones}, I only have ${conesSold} left`)
    }

} while (allCones !== 0);
console.log('Yay, I sold them all!')
