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