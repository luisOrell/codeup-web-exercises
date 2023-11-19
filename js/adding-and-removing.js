//*****Variable to add reference parent element****
const newContent = document.querySelector("#newContent")


//*********Creating an Element*******
const myNewP = document.createElement("p")

myNewP.innerText = "I am a paragraph";
//to add an ID to p
myNewP.id = "myNewP";
//to add a new class and modify content using Bootstrap
myNewP.classList.add("fs-2", "fw-bold", "text-center");

//**********Must append to add to HTML************
//Add element to our dom. If you dont append it, it wont be visible
newContent.appendChild(myNewP);


const myOtherP = document.createElement("p");
myOtherP.innerText = "I'm a paragraph too!";
myOtherP.classList.add("text-center");
newContent.appendChild(myOtherP);


//***********Removing an element***********
//remove an element by using the .removeChild method. Which you need to specify a parent element and the child element you want to remove
document.querySelector("#newContent").removeChild(myOtherP);

//remove an element using the .remove() method which you can simply call whatever element you are trying to delete and call the .remove on that element
// document.querySelector("#newContent").remove(myNewP);
//or//
// myNewP.remove();


//**********Replacing one element with another***********
const myAwesomeP = document.createElement("h1");
myAwesomeP.innerText = "I'm an EVEN BETTER paragraph";
myAwesomeP.classList.add("fs-1", "text-center")

//first you enter the new element, then the one being replaced
document.querySelector("#newContent").replaceChild(myAwesomeP, myNewP)



//**********Adding Elements at Specific Places in the DOM*********
const three = document.querySelector("#two");

const twoAndAHalf = document.createElement("li");
twoAndAHalf.innerText = "Two and a half";
three.after(twoAndAHalf);


//************ get references to the to-do input and its parent form******
const toDoInput = document.querySelector("#to-do");
const toDoForm = toDoInput.parentElement;

// declare a callback to handle the user input
const handleUserInput = (event) => {
    event.preventDefault()
    console.log(toDoInput.value);
    toDoInput.value = ""
}

// output user input to the DOM
toDoForm.addEventListener('submit', handleUserInput);


//**********
// // obtain reference to the button that will trigger div creation
// const createButton = document.querySelector("#create-a-div");
// // function to create new divs
// // within each div there is a button with the class `event-trigger`
// const createDiv = () => {
//     const newDiv = document.createElement("div");
//     newDiv.classList.add("dynamic-div");
//     newDiv.innerHTML = "<p>I'm a new div!</p>" +
//         "<button class='event-trigger'>Click Me!</button>";
//     document.querySelector("#new-div-section").appendChild(newDiv);
// }
// // add the click handler to the button
// createButton.addEventListener('click', createDiv);

const createButton = document.querySelector("#create-a-div");
const createDiv = () => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("dynamic-div");
    newDiv.innerHTML = "<p>I'm a new div!</p>" +
        "<button class='event-trigger'>Click Me!</button>";
    document.querySelector("#new-div-section").appendChild(newDiv);
    // add event handler to button
    newDiv.lastChild.addEventListener('click', () => console.log('Clicked!'));
}
createButton.addEventListener('click', createDiv);

