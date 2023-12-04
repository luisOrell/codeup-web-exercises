"use strict"

import {randomGreeting} from "./greeting-logic.js";


document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    console.log(event);
    document.querySelector('p').innerText = `${randomGreeting()} ${event.target[0].value}`;
    event.target[0].value = '';
})




//form will take an event - review event listener lesson

//button will take a click


//event listener set to form and not button
// let form = document.querySelector('form');
//
// form.addEventListener('submit', function (event) {
//     event.preventDefault()
//     // let inputText = document.querySelector('p').innerText = event.target[0].value + " " + randomGreeting()
//
//     let inputText = document.querySelector('p').innerText = event.target[0].value
//     event.target[0].value = '';
//
//     inputText + greet
//
// })