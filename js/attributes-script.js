
//**********//Use setTimout to create these behaviors*************

setTimeout ( function () {
    let newPic = document.getElementById('profile-pic');
    newPic.src = "img/background_orange.jpeg"
}, 2000)

setTimeout ( function () {
    let profileName = document.getElementById("profile-name");
    profileName.innerHTML = "<h2>John Smith</h2>"
}, 4000)

setTimeout( function () {
    textFontColor = document.getElementById("profile-desc")
    textFontColor.style.color = "red";
    textFontColor.style.fontSize = "25px";
}, 6000)

// let count = 0;
// let max = 10
// let interval = 2000; // interval time in milliseconds
//
// const intervalId = setInterval( () => {
//     if (count % 2 !== 0) {
//         clearInterval(intervalId);
//
//     } else {
//         count++;
//         backgroundColor = document.querySelector("body")
//         backgroundColor.style.backgroundColor = "black";
//     }
//
//     // backgroundColor = document.querySelector("body")
//     // backgroundColor.style.backgroundColor = "black";
//
// }, interval);

// to cancel the timeout, you can call
// clearTimeout(timeoutId);
// prior to the delay expiring



