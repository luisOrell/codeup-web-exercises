(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            return Math.PI * Math.pow(circle.radius, 2); // TODO: return the proper value
            //reminder: Math.radius will take in two parameters
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            let area = circle.getArea();

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if(doRounding) {
                area = Math.round(area)
                console.log("Area of a circle with radius: " + circle.radius + ", is: " + Math.round(circle.getArea()));

            } else {
                console.log("Area of a circle with radius: " + circle.radius + ", is" + circle.getArea());
            }
        }

    };


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
