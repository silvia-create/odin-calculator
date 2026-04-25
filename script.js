const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNum = '';
let secondNum = '';
let operator = '';
let result = '';
let hasOperatorBeenPressed = false;
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

const numContainer = document.getElementById('num-container');
const dot = document.getElementById('.');
const num0 = document.getElementById('0');
const num1 = document.getElementById('1');
const num2 = document.getElementById('2');
const num3 = document.getElementById('3');
const num4 = document.getElementById('4');
const num5 = document.getElementById('5');
const num6 = document.getElementById('6');
const num7 = document.getElementById('7');
const num8 = document.getElementById('8');
const num9 = document.getElementById('9');

const operatorContainer = document.getElementById('operator-container');
const addOperator = document.getElementById('+');
const subtractOperator = document.getElementById('-');
const multiplyOperator = document.getElementById('*');
const divideOperator = document.getElementById('/');
const equalOperator = document.getElementById('=');

const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');

numContainer.addEventListener("click",(e) => {  
  if(e.target.textContent === '.'){
    dotCount++;  
    if(dotCount >= 1) dot.disabled = true; 
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

operatorContainer.addEventListener("click",(e) => {
  hasOperatorBeenPressed = true;
  dotCount = 0;
  dot.disabled = false;
  
  if(firstNum.length !== 0 && secondNum.length === 0){
    operator = e.target.textContent;
    console.log('operator is '+ operator);
  }
  
  if(firstNum.length !== 0 && secondNum.length !== 0){
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
})

backspace.addEventListener("click",(e) => {
  if(firstNum.length !== 0 && secondNum.length === 0){
    if(firstNum.slice(-1) === '.'){
      dotCount = 0;
      dot.disabled = false;
    }
    firstNum = firstNum.slice(0,-1);
    display.textContent = firstNum;
  }
  if(secondNum.length !== 0){
    if(secondNum.slice(-1) === '.'){
      dotCount = 0;
      dot.disabled = false;
    }
    secondNum = secondNum.slice(0,-1);
    display.textContent = secondNum;
  }
})

clear.addEventListener("click",(e) => {
  firstNum = '';
  secondNum = '';
  result = '';
  display.textContent = '';
  hasOperatorBeenPressed = false;
})

window.addEventListener('keydown', function(e) {
  const numbers = document.querySelectorAll('.number');
  for(let number of numbers){
    const numText = number.innerText;       
    if (e.key === numText){
      number.click();
    }
  } 
  if(e.key === '.') dot.click();
  if(e.shiftKey === true && e.key === '+') addOperator.click();
  if(e.key === '-') subtractOperator.click();
  if(e.shiftKey === true && e.key === '*') multiplyOperator.click();
  if(e.key === '/') divideOperator.click();
  if(e.key === '=' || e.key === 'Enter') equalOperator.click();
  if(e.key === 'Escape') clear.click();
  if(e.key === 'Backspace') backspace.click();
  
})
