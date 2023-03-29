let operator = null;
let firstOperand = null;
let currentOperand = '';

const display = document.querySelector('.container__calc-display');
const buttons = document.querySelectorAll('.container__calc-button');

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const target = e.target;
    const value = target.innerText;
    if (target.id == 'clear') {
      operator = null;
      firstOperand = null;
      currentOperand = '';
      display.innerText = '';
    } else if (target.id == 'plus-minus') {
      display.innerText = -1 * display.innerText;
    } else if (target.id == 'percentage') {
      display.innerText = parseFloat(display.innerText) / 100;
    } else if (target.id == 'divide' || target.id == 'multiply' || target.id == 'add' || target.id == 'substract') {
      operator = value;
      currentOperand = '';
      firstOperand = parseFloat(display.innerText);
    } else if (target.id == 'equal') {
      if (operator) {
        const secondOperator = parseFloat(display.innerText);
        if (operator == '+') {
          firstOperand = firstOperand + secondOperator;
        } else if (operator == '−') {
          firstOperand = firstOperand - secondOperator;
        } else if (operator == '÷') {
          firstOperand = firstOperand / secondOperator;
        } else if (operator == '×') {
          firstOperand = firstOperand * secondOperator;
        }
        operator = null;
        currentOperand = firstOperand.toString();
        display.innerText = firstOperand;
      }
    } else {
      if (value === '.' && currentOperand.includes('.')) {
        return;
      }
      currentOperand += value;
      display.innerText = currentOperand;
    }
  })
});