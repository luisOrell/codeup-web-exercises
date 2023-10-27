'use strict'

function heading (str) {
    let heading1 = '<h1>'
    heading1 += str + `</h1>`
    return heading1
}

console.log(heading('Title'))

//Function that takes an unordered list, 3 items long - Parameter to take 3 inputs and put into the li
function unorderedList (item1, item2, item3) {
    let listItems1 = '<li>'
    listItems1 += item1 + '</li>'
    let listItems2 = '<li>'
    listItems2 += item2 + '</li>'
    let listItems3 = '<li>'
    listItems3 += item3 + '</li>'

    // return "<ul>" + "\n" + listItems1 + "\n" + listItems2  + "\n" + listItems3 + "\n" + "</ul>"

    return `<ul> \n  ${listItems1} \n  ${listItems2} \n  ${listItems3}\n</ul>`
}

console.log(unorderedList('GTR','Supra', 'M3'))



