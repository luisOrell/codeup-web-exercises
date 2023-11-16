// 1.Create a button that, when clicked, makes the last li in each ul have a yellow background.
//Button to make last item yellow
const lis = document.querySelectorAll("li")

document.querySelector("#yellow-background").addEventListener("click", function () {
    const uls = document.querySelectorAll("ul");
    for(const ul of uls) {
        ul.lastElementChild.classList.add("highlighter");
    }
})

//***Button to make first item green***
//target all h3 elements and storing in a variable
const allH3s = document.querySelectorAll("h3");

//creating a listener function called listColorGreen
function listColorGreen () {
    //using a forEach loop to find first sibling and then first element in the siblings, change to green
    allH3s.forEach((eachIndividualH3) => {
        eachIndividualH3.nextElementSibling.firstElementChild.style.backgroundColor = "green"
    })
}
//target the Green button
let greenButton = document.getElementById("make-green");
//add event listener. CLick event will call the ListColorFunction
greenButton.addEventListener("click", listColorGreen)


//***************************

const h3s = document.querySelectorAll("h3");
const listItems = document.querySelectorAll("li");



//When any h3 is clicked, the lis underneath it should have a fontWeight of "bold". Hint: you should use this in the event listener to access the next sibling of the h3 that is clicked. You can get to the corresponding ul by traversing to the h3's sibling and then it's children.
//Using a forEach loop
for (const h3 of h3s) {
    h3.addEventListener("click", function () {
        const lis = this.nextElementSibling.children;
        for(const li of lis) {
            li.style.fontWeight = "bold"
        }
    })
}

//using forOf to iterate through the h3 elements, make font italic
for (const h3 of h3s) {
    //add an event listener for a click event
    h3.addEventListener("click", function () {
        //targeting the ul item's children. "This" keyword used to target
        const lis = this.nextElementSibling.children;
        //iterate through each li to change the font style to italic
        for(const li of lis) {
            li.style.fontStyle = "italic"
        }
    })
}

//5. When any list item is clicked, the first li of that list item's parent ul should have a font color of blue. Hint: you should again rely on this in the li event handler.

//using the listItems variable to select all li elements
for (const listItem of listItems) {
    //listen for click event
    listItem.addEventListener("click", function () {
        //create function using the "this" keyword
        //Will grab parent element and then first element child
        this.parentElement.firstElementChild.style.color = "blue"
    })
}

//When any list item is clicked, the last li of that list item's parent ul should have a font color of orange. Hint: you should again rely on this in the li event handler.
for (const listItem of listItems) {
    listItem.addEventListener("click", function () {
        this.parentElement.lastElementChild.style.color = "orange"
    })
}





