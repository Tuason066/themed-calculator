"use strict";
/* setting up the theme */
let themeIndex = 1;
const themes = ['theme-1', 'theme-2', 'theme-3'];
const themeBtn = document.querySelector('[data-theme-btn]');
const htmlElement = document.documentElement;
themeBtn.addEventListener('click', () => {
    /* adding class theme to the html element */
    htmlElement.classList.remove('theme-1', 'theme-2', 'theme-3');
    themeIndex = themeIndex++ < themes.length ? themeIndex++ : 1;
    htmlElement.classList.add(themes[themeIndex - 1]);
});
/* setting the functionalities */
/* elements */
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const keyNumbers = document.querySelectorAll('[data-number]');
const operations = document.querySelectorAll('[data-operation');
const deleteBtn = document.querySelector('[data-delete]');
const resetBtn = document.querySelector('[data-reset]');
const equalsBtn = document.querySelector('[data-equals]');
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.operator = null;
        this.previousOperand = '';
        this.currentOperand = '';
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
    clear() {
        this.previousOperand = '';
        this.currentOperand = '';
        this.operator = null;
    }
    delete() {
        this.currentOperand = this.currentOperand.slice(0, -1);
    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.'))
            return;
        this.currentOperand = this.currentOperand + number;
    }
    chooseOperation(operation) {
        if (this.currentOperand === '')
            return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operator = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }
    compute() {
        let current = parseFloat(this.currentOperand);
        let previous = parseFloat(this.previousOperand);
        // if (isNaN(current) && isNaN(current)) return;
        if (isNaN(previous) && !isNaN(current)) {
            let computation = current;
            switch (this.operator) {
                case '+':
                    computation = previous + current;
                    break;
                case '-':
                    computation = previous - current;
                    break;
                case 'x':
                    computation = previous * current;
                    break;
                case '/':
                    computation = previous / current;
                    break;
                default:
                    break;
            }
            this.currentOperand = computation.toString();
            this.previousOperand = '';
            this.operator = null;
        }
        else {
            let computation = 0;
            switch (this.operator) {
                case '+':
                    computation = previous + current;
                    break;
                case '-':
                    computation = previous - current;
                    break;
                case 'x':
                    computation = previous * current;
                    break;
                case '/':
                    computation = previous / current;
                    break;
                default:
                    break;
            }
            this.currentOperand = computation.toString();
            this.previousOperand = '';
            this.operator = null;
        }
    }
    getDisplayNumber(number) {
        const integerDigits = parseFloat(number.split('.')[0]);
        const decimalDigits = number.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        }
        else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0,
            });
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        }
        else {
            return integerDisplay;
        }
    }
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operator != null) {
            this.previousOperandTextElement.innerText =
                this.getDisplayNumber(this.previousOperand).toString() + this.operator;
        }
        else {
            this.previousOperandTextElement.innerText = '';
        }
    }
}
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);
/* actions */
resetBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});
deleteBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});
equalsBtn.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});
keyNumbers.forEach((key) => {
    const btn = key;
    btn.addEventListener('click', () => {
        calculator.appendNumber(btn.innerText);
        calculator.updateDisplay();
    });
});
operations.forEach((key) => {
    const btn = key;
    btn.addEventListener('click', () => {
        calculator.chooseOperation(btn.innerText);
        calculator.updateDisplay();
    });
});
