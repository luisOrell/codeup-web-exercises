/**
 * Write your solutions here
 */

//Problem 1
const dblClick = document.querySelector('.dbl-click-box');

dblClick.addEventListener('click', function () {
    alert('BOX DOUBLE-ClICKED!')
})

//Problem 2
const dblClkBtn = document.getElementById('dark-mode-btn');
const pageBody = document.querySelector('body')

dblClkBtn.addEventListener('click', function () {
    pageBody.classList.toggle('dark-mode');
})

//Problem 3
const uppercaseSec = document.getElementById('uppercase')
uppercaseSec.addEventListener('mouseover', function () {
    uppercaseSec.style.textTransform = 'lowercase';
})
uppercaseSec.addEventListener('mouseout', function () {
    uppercaseSec.style.textTransform = '';
})

//Problem 4
const timer = document.getElementById('counter');

let count = 0;

function updateTimer() {
    count++;
    timer.innerText = count;
}

setInterval(updateTimer, 1000);


//problem 5
const outputBtn = document.getElementById('list-chars-btn');

outputBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const inputText = document.getElementById('characters').value;
    const textArray = inputText.split('');

    const ul = document.getElementById('characters-list');
    ul.innerText = '';

    textArray.forEach((letter) => {
        const newLi = document.createElement('li');
        newLi.innerText = letter;
        ul.appendChild(newLi);
    })

    document.getElementById('characters').value = '';
})

//Problem 6

const btn = document.getElementById('clean-animal-list-btn')
btn.addEventListener('click', function () {
    const classItems = document.querySelectorAll('#animals-list li.animal-list-item');

// Loop through the selected elements
    classItems.forEach(function (classItem) {
        // Get the next sibling <li> element
        var siblingItem = classItem.nextElementSibling;

        // Check if the sibling exists and doesn't have a class
        if (siblingItem && !siblingItem.classList.contains('animal-list-item')) {
            // Combine the text content of both elements
            var combinedText = classItem.textContent + ' ' + siblingItem.textContent;

            // Replace the text content of the classItem
            classItem.textContent = combinedText;

            // Remove the sibling element
            siblingItem.remove();
        }
    });

})


//Problem 7

document.addEventListener('DOMContentLoaded', function() {
    // This event listener ensures that the JavaScript code runs
    // after the HTML document has been fully loaded.

    var letterContainers = document.querySelectorAll('.hidden-letters div');
    // This line selects all div elements that are children of an element
    // with the class 'hidden-letters' and stores them in the variable letterContainers.

    letterContainers.forEach(function(container) {
        // This forEach loop iterates over each element in letterContainers.
        container.addEventListener('mouseover', function() {
            // This line adds an event listener for the 'mouseover' event to each div.

            var hiddenLetter = container.querySelector('span');
            // This line finds the span element inside the current div and stores it in hiddenLetter.

            hiddenLetter.style.visibility = 'visible';
            // This line sets the visibility of the span element to 'visible' when the mouse is over the div.

        });
        container.addEventListener('mouseout', function() {
            // This line adds an event listener for the 'mouseout' event to each div.

            var hiddenLetter = container.querySelector('span');
            // This line finds the span element inside the current div and stores it in hiddenLetter.

            hiddenLetter.style.visibility = 'hidden';
            // This line sets the visibility of the span element to 'hidden' when the mouse leaves the div.

        });
    });
});

//Problem 7


const hiddenLetters = document.querySelectorAll('.hidden-letters div');

hiddenLetters.forEach(div => {
    div.addEventListener('mouseover', () => {
        div.querySelector('span').style.visibility = 'visible';
    });

    div.addEventListener('mouseout', () => {
        div.querySelector('span').style.visibility = 'hidden';
    });
});

// ****Extra Practice
let count = 15;
let max = 5;
let interval = 1000; // interval time in milliseconds

const intervalId = setInterval( () => {
    if (count <= max) {
        clearInterval(intervalId);
        console.log('All done');
    } else {
        count--;
        console.log('Repeating this line ' + count);
    }
}, interval);



    document.querySelectorAll(".numbers").forEach(number => {
        number.innerHTML = 1;
    })

// Get the main heading h1 by id
// const mainHeading = document.getElementById('main-heading');
//
// console.log(mainHeading.innerHTML); // Prints Hello World!

// Assign a new value to the inner HTML of the main heading
// mainHeading.innerHTML = "Hello Codeup!";

// console.log(mainHeading.innerHTML); // Prints Hello Codeup!

// Get the main section div by id
// const mainSection = document.getElementById('main-section');

// console.log(mainSection.innerHTML);
// Prints
// <p>Paragraph 1</p>
// <p>Paragraph 2</p>

const header = document.querySelector("header");
console.log(header.innerHTML);
header.innerHTML = "<h1>The uses of InnerHTML!</h1>" +
    "<p>You can get and set HTML with innerHTML</p>";

