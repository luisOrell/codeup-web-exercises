// const box1 = document.querySelector(".box1")
//
// const parent = box1.parentElement;
// console.log(parent.parentNode);

//element is just an element -opening tag, content, closing tag
// node is a whole object of an HTML element. that can have relationships with other elements

const stateParksUL = document.getElementById("state-parks-texas");
stateParksUL.parentElement.style.backgroundColor = "tan";


//to change all elements in a list. Will iterate through a list.
//note: cannot use a forEach loop
const stateParksLIs = document.querySelector("#state-parks-texas").children;
for(let i = 0; i < stateParksLIs.length; i++) {
    stateParksLIs[i].style.color = "darkred"

    //can select individual index to style
    stateParksLIs[2].style.fontWeight = "bold";
    stateParksLIs[4].style.visibility = "hidden";
}


//To select the first element of the parent element
const nationalParkUL = document.querySelector("#national-parks");
nationalParkUL.firstElementChild.style.color = "green"
nationalParkUL.lastElementChild.style.color = "orange"

const nationalParksHeading = document.querySelector("#national-parks-heading");

nationalParksHeading.nextElementSibling.style.background = "salmon";