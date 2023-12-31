"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    // html += `<p>${coffee.id}</p>`;
    html += `<p class="coffee-name">${coffee.name}</p>`;
    html += `<p class="coffee-roast">${coffee.roast}</p>`;
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    const selectedRoast = roastSelection.value.toLowerCase();
    const searchTerm = searchCoffeeByName.value.trim().toLowerCase();
    //initializes an empty array to store the coffee objects that meet the filtering criteria
    const filteredCoffees = [];
    //iterates over each coffee in the original coffees array
    coffees.forEach( coffee => {
        //converts coffee name entered to lowercase for case-sensitive comparison
        const coffeeNameLower = coffee.name.toLowerCase();

        if ((coffee.roast === selectedRoast || selectedRoast === 'all') && (coffeeNameLower.includes(searchTerm) || searchTerm === '')) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeSelection.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
const coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

const searchCoffeeByName = document.querySelector('#search-coffee-by-name')
const coffeeSelection = document.querySelector('#coffees');
const submitButton = document.querySelector('#submit');
const roastSelection = document.querySelector('#roast-selection');
//reference to my Add Coffee Button, for add coffee form
const addCoffeeButton = document.querySelector('#add-coffee');

//render the coffee list shown on the right side of the page
coffeeSelection.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
//To update coffee list rendered as user types in the input field
searchCoffeeByName.addEventListener('input', updateCoffees);
//To update coffee list rendered as user selects roast type
roastSelection.addEventListener('change', updateCoffees);
//Event listener to update list upon click add coffee button
addCoffeeButton.addEventListener('click', addCoffee);

function addCoffee() {
    //target the roast type selector value
    const newCoffeeRoast = document.querySelector('#new-coffee-roast').value.toLowerCase();
    //target the coffee name input value
    const newCoffeeName = document.querySelector('#new-coffee-name').value.trim();
    //create a new coffee entry for the coffees object
    const newCoffee = {
        id: coffees.length + 1,
        name: newCoffeeName,
        roast: newCoffeeRoast,
    }
    // add the entry to the array
    coffees.push(newCoffee);
    //update the rendered coffee list
    coffeeSelection.innerHTML = renderCoffees(coffees);
    //clear the form
    document.querySelector('#new-coffee-roast').value = 'light';
    document.querySelector('#new-coffee-name').value = '';

}


