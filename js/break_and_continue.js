while(true) {
    let userNumber = parseInt(prompt("Please enter an odd number between 1 and 50"))
     if( userNumber >= 1 && userNumber <= 50 && userNumber % 2 === 1) {
         console.log(`Number enter ${userNumber}`)

         for(let i = 1; i <= 50; i = i + 2) {
             if(i === userNumber) {
                 console.log(`Yikes! Skipping number: ${userNumber}`)
                 continue;
             }
             console.log(`Here is an odd number ${i}`)
         }
         break;
     } else {
         alert("Invalid input. Please enter a odd number between 1 and 50")
     }
}


// let num = prompt(`Pick a number between 1 and 50`)
// for(let num = 0; num < 50; num++) {
//
//     if(num < 1 && num > 50) {
//         console.log("Invalid number selected. Please try again");
//     } else if(num % 2 !== 0) {
//         console.log(`Here is an odd number: ${num}`);
//     }
//
//
// }
