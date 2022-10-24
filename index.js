const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('.display');
const previous = display.querySelector('.prev-value');
const current = display.querySelector('.current-value');
let firstNumber, currentNumber, symbol;

numbers.forEach(num => num.addEventListener('click', (e) => {
    current.innerText += e.target.innerText;
    currentNumber = Number(current.innerText);
}))

operators.forEach(op => op.addEventListener('click', (e) => {
    if(!firstNumber){
        symbol = e.target.innerText;
        previous.innerText = currentNumber + ' ' + symbol;
        firstNumber = currentNumber;
        currentNumber = 0;
        current.innerText = '';
    } else {
        operate(e);
    }
}))

function operate(elem){
    symbol = elem.target.innerText;
    switch(symbol){
        case '+':
            firstNumber = firstNumber + currentNumber;
            break;
        case '-':
            firstNumber = firstNumber - currentNumber;
            break;
        case '*':
            firstNumber = firstNumber * currentNumber;
            break;
        case '/':
            firstNumber = firstNumber / currentNumber;
            break;
    }
    previous.innerText =  firstNumber + ' ' + symbol;
    currentNumber = 0;
    current.innerText = '';
}



