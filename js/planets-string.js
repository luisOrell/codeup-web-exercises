(function(){
    "use strict";


    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    // var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
        //since the | is used as a seperator the | will be used as the delimiter, if comma use comma, if space, use space

    let planetsArray = planetsString.split('|');
    console.log(planetsArray);


    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */



// let brPlanetString = "Mercury<br> Venus <br> Earth <br> Mars <br> Jupiter <br> Saturn <br> Uranus <br> Neptune";
//
// console.log(brPlanetString);

let planetString1 = planetsArray.join(`<br>
`);
    console.log(planetString1)



let planetString2 = `<ul>
<li>${planetsArray.join(`<li>
</li>`)}</li>
</ul>`;

    console.log(planetString2)



})();
