
//*********Creating an Element*******
const myNewP = document.createElement("p")

myNewP.innerText = "I am a paragraph";
//to add an ID to p
myNewP.id = "myNewP";
//to add a new class
myNewP.classList.add("fs-2", "fw-bold", "text-center");


//Add element to our dom. If you dont append it, it wont be visible
document.querySelector("#newContent").appendChild(myNewP);


const myOtherP = document.createElement("p");
myOtherP.innerText = "I'm a paragraph too!";
myOtherP.classList.add("text-center");
document.querySelector("#newContent").appendChild(myOtherP);

//remove an element by using the .removeChild method. Which you need to specify a prent element and the child element you want to remove
document.querySelector("#newContent").removeChild(myOtherP);

//remove an element using the .remove() method which you can simply call whatever element you are trying to delete and call the .remove on that element
// document.querySelector("#newContent").remove(myNewP);
//or//
// myNewP.remove();



//Replacing one element with another
const myAwesomeP = document.createElement("h1");
myAwesomeP.innerText = "I'm an EVEN BETTER paragraph";
myAwesomeP.classList.add("fs-1", "text-center")

//first you enter the new element, then the one being replaced
document.querySelector("#newContent").replaceChild(myAwesomeP, myNewP)

