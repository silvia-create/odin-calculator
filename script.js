const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNum = '';
let secondNum = '';
let operator = '';
let result = '';
let dotCount = 0;

const operate = function(operator,num1,num2){
    switch(operator){
        case "+": 
            return add(num1,num2);
            break;
        case "-": 
            return subtract(num1,num2);
            break;
        case "*": 
            return multiply(num1,num2);
            break;
        case "/": 
            return divide(num1,num2);
            break;
    }
}

const display = document.getElementById('display');
const btns = document.getElementById('btns');

const numContainer = document.createElement('div');
for(i = 0; i <= 9; i++){
    const num = document.createElement('button');
    num.textContent = i;
    num.id = 'i';
    num.classList.add('number');
    numContainer.appendChild(num);
}
const dot = document.createElement('button');
dot.textContent = '.';
numContainer.appendChild(dot);
btns.appendChild(numContainer);

const operatorContainer = document.createElement('div');
const addOperator = document.createElement('button');
addOperator.textContent = '+';
const subtractOperator = document.createElement('button');
subtractOperator.textContent = '-';
const multiplyOperator = document.createElement('button');
multiplyOperator.textContent = '*';
const divideOperator = document.createElement('button');
divideOperator.textContent = '/';
const equalOperator = document.createElement('button');
equalOperator.textContent = '=';
const clear = document.createElement('button');
clear.textContent = 'clear';
operatorContainer.appendChild(addOperator);
operatorContainer.appendChild(subtractOperator);
operatorContainer.appendChild(multiplyOperator);
operatorContainer.appendChild(divideOperator);
operatorContainer.appendChild(equalOperator);
operatorContainer.appendChild(clear);
btns.appendChild(operatorContainer);