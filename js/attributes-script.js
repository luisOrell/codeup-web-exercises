
//**********//Use setTimout to create these behaviors*************

// setTimeout ( function () {
//     let newPic = document.getElementById('profile-pic');
//     newPic.src = "img/background_orange.jpeg"
// }, 2000)
//
// setTimeout ( function () {
//     let profileName = document.getElementById("profile-name");
//     profileName.innerHTML = "<h2>John Smith</h2>"
// }, 4000)
//
// setTimeout( function () {
//     textFontColor = document.getElementById("profile-desc")
//     textFontColor.style.color = "red";
//     textFontColor.style.fontSize = "25px";
// }, 6000)
//
// setInterval( function () {
//     let profileCard = document.getElementById("profile-card");
//     profileCard.classList.toggle("new-background");
// }, 2000);

setTimeout( function() {
    let changeProfilePic = document.getElementById("profile-pic");
    changeProfilePic.src = "data:image/jpeg;base64,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"
}, 2000)

setTimeout( function () {
    let changeProfileName = document.getElementById("profile-name")
    changeProfileName.innerHTML = "<h2>Ron Swanson</h2>"
}, 4000)

setTimeout ( function () {
    let changeFontColor = document.getElementById("profile-desc");
    changeFontColor.style.color = "red";
    changeFontColor.style.fontSize = "2em";
}, 6000)

setInterval( function () {
    let altBackground = document.getElementById("profile-card")
    altBackground.classList.toggle("altBackground")
}, 2000)



//****
const delay = 5000; // delay time in milliseconds
let htmlElement = document.getElementById(" ")

const timeoutId = function setTimer (variableName, htmlElement, delay) {
    (`${variableName} = ${htmlElement}`)

}, delay);

// to cancel the timeout, you can call
// clearTimeout(timeoutId);
// prior to the delay expiring

function timer (timeout) {

}

// program to get a random item from an array

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const array = [1, 'hello', 5, 8];

const result = getRandomItem(array);
console.log(result);






