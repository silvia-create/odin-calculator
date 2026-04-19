const add = function(a,b){
    return a+b;
}
const subtract = function(a,b){
    return a-b;
}
const multiply = function(a,b){
    return a*b;
}
const divide = function(a,b){
    return a/b;
}

const firstNum = 0;
const secondNum = 0;
const operator = null;

const operate = function(operator,num1,num2){
    switch(operator){
        case "+": 
            add(num1,num2);
            break;
        case "-": 
            subtract(num1,num2);
            break;
        case "*": 
            multiply(num1,num2);
            break;
        case "/": 
            divide(num1,num2);
            break;
    }
}

const container = document.getElementById('container');

for(i = 0; i <= 9; i++){
    const num = document.createElement('button');
    num.textContent = i;
    container.appendChild(num);
}

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
container.appendChild(addOperator);
container.appendChild(subtractOperator);
container.appendChild(multiplyOperator);
container.appendChild(divideOperator);
container.appendChild(equalOperator);
container.appendChild(clear);