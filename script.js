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

const backspace = document.createElement('button');
backspace.textContent = '←';
btns.appendChild(backspace);
backspace.addEventListener("click",(e) => {
  if(firstNum.length !== 0 && secondNum.length === 0){
      firstNum = firstNum.slice(0,-1);
      display.textContent = firstNum;
    }
    if(secondNum.length !== 0){
      secondNum = secondNum.slice(0,-1);
      display.textContent = secondNum;
    }
})

let hasOperatorBeenPressed = false;
operatorContainer.addEventListener("click",(e) => {
  hasOperatorBeenPressed = true;
  dotCount = 0;
  dot.disabled = false;
  if(e.target.textContent === 'clear'){
    firstNum = '';
    secondNum = '';
    result = '';
    display.textContent = '';
    hasOperatorBeenPressed = false;
  };
  
  if(firstNum.length !== 0 && secondNum.length === 0){
    operator = e.target.textContent;
    console.log('operator is '+ operator);
  }
  
  if(firstNum.length !== 0 && secondNum.length !== 0){
    if('+-*/='.includes(e.target.textContent)){
      if(operator === '/' && secondNum === '0'){
        result = 'nice try';
      }else{
        const rawResult = operate(operator,+firstNum,+secondNum);
        result = (+rawResult.toFixed(10)).toString();
      }
      display.textContent = result;
      console.log('result = '+ result);
      operator = e.target.textContent;
      console.log('new operator is '+ operator);
      firstNum = result;
      secondNum = '';
      console.log('new firstNum = '+firstNum);
      console.log('new secondNum = '+secondNum);
    }
    
  }
})

numContainer.addEventListener("click",(e) => {  
  if(e.target.textContent === '.'){
    dotCount++;    
  }
  if(dotCount >= 1) {
    dot.disabled = true;
  }
  if(result.length !== 0){
    if(operator === '='){
      firstNum = '';
      secondNum = '';
      result = '';
      display.textContent = '';
      hasOperatorBeenPressed = false;      
    }
  }
  
  if(hasOperatorBeenPressed === false){
    firstNum += e.target.textContent;
    display.textContent = firstNum;
    console.log('firstNum =' + firstNum);
  }else if(hasOperatorBeenPressed === true){
    secondNum += e.target.textContent;
    display.textContent = secondNum;
    console.log('secondNum ='+ secondNum);
  }
})