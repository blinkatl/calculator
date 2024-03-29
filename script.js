let operandOne;
let operandTwo;
let operator;
let displayValue = document.querySelector(".display");
let numBtn = document.querySelectorAll(".numBtn");
let operandBtn = document.querySelector(".right button");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operandOne, operator, operandTwo) {
    switch(operator) {
        case("+"):
            return add(operandOne, operandTwo);
        case("-"):
            return subtract(operandOne, operandTwo);
        case("*"):
            return multiply(operandOne, operandTwo);
        case("/"):
            return divide(operandOne, operandTwo);
    }
}
numBtn.forEach(numBtn => {
    numBtn.addEventListener("click", () => {
        displayValue.textContent += numBtn.textContent;
    });
});