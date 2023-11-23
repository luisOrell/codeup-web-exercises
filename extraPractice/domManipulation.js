//problem 1

const box = document.querySelector('.dbl-click-box');

box.addEventListener('click', function () {
    alert('Box double-clicked!')
})

//problem 2

const btn = document.querySelector('#dark-mode-btn');

btn.addEventListener('click', function () {
    const darkMode = document.querySelector('body');
    darkMode.classList.toggle('dark-mode');
})

//problem 3

const upperCase = document.getElementById('uppercase');

upperCase.addEventListener('mouseover', function () {
    upperCase.style.textTransform = 'lowerCase';
})

upperCase.addEventListener('mouseout', function () {
    upperCase.style.textTransform = '';
})

//problem 4

const timer = document.getElementById('counter');

let count = 0;

function updateTimer () {
    count++;
    timer.innerText = count;
}

setInterval(updateTimer, 1000);


