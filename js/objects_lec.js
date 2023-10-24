(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            return Math.PI * Math.pow(circle.radius, 2)  // TODO: return the proper value
            //reminder: Math.radius will take in two parameters
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            let area = circle.getArea()

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if(doRounding === true) {
                area = Math.round(area)
            }
            console.log("Area of a circle with radius: " + circle.radius + ", is: " + area);
        }
    };


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();







let calculator = {
    color: "black",
    add:function(num1, num2) {
        return num1 + num2;
    },
    showAnswer: function(num1, num2) {
        console.log(`${num1} + ${num2} = ${this.add(num1, num2)}`);
    }
}

// console.log(calculator.add(5, 10));
// console.log(calculator.add(5, 10));
// console.log(calculator.add(5, 10));
// console.log(calculator.add(5, 10));

calculator.showAnswer(5, 10)