let numbersBtn = document.querySelectorAll('.number');
let operatorBtn = document.querySelectorAll('.operator');
let clearBtn = document.querySelector('.clearBtn');
let equalBtn = document.querySelector('.equalBtn');
let prevDisplay = document.querySelector('.prev-display');
let currDisplay = document.querySelector('.curr-display');

let storedNumber = '';
let prevNumber = '';
let clickedOperator = '';

numbersBtn.forEach(number => {
    number.addEventListener('click', () => {
        storedNumber += number.textContent;
        currDisplay.textContent = storedNumber;
    })
})

operatorBtn.forEach(operator => {    
    operator.addEventListener('click', () => {
        //prevNumber = storedNumber;
        if (prevNumber && storedNumber) {
            displayResult();
        }
        prevNumber = storedNumber;
        clickedOperator = operator.textContent;
        prevDisplay.textContent = prevNumber + clickedOperator;
        storedNumber = '';
    })
})

equalBtn.addEventListener('click', displayResult);

function displayResult() {
    let result = operate(clickedOperator, parseInt(prevNumber), parseInt(storedNumber));
    prevDisplay.textContent = prevNumber + clickedOperator + storedNumber;
    currDisplay.textContent = result;
    storedNumber = result;    
}

clearBtn.addEventListener('click', () => {
    prevDisplay.textContent = '0';
    currDisplay.textContent = '0';
    storedNumber = '';
    prevNumber = '';
})

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let operate = (operator, a, b) => {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}