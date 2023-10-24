

let today = new Date();
console.log(today)


//when using commas, use the index for month value
let codeup = new Date("February 4, 2014 09:00:00");
codeup = new Date(2014, 1, 4);
codeup = new Date(2014, 1, 4, 9, 0,0);

console.log(codeup.toString())



let start = Date.now();

let end = Date.now();

let elapsed = end - start

