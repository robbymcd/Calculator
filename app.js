// DOM Elements
const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
const sign = document.querySelector('#sign');
const modulus = document.querySelector('#modulus');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const subtract = document.querySelector('#subtract');
const add = document.querySelector('#add');
const equals = document.querySelector('#equals');
const decimal = document.querySelector('#decimal');
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const smallDisplay = document.querySelector('.small-display');

// Event Listeners
clear.addEventListener('click', clearDisplay);
sign.addEventListener('click', changeSign);
modulus.addEventListener('click', addModulus);
divide.addEventListener('click', addDivide);
multiply.addEventListener('click', addMultiply);
subtract.addEventListener('click', addSubtract);
add.addEventListener('click', addAdd);
equals.addEventListener('click', calculate);
decimal.addEventListener('click', addDecimal);
zero.addEventListener('click', addZero);
one.addEventListener('click', addOne);
two.addEventListener('click', addTwo);
three.addEventListener('click', addThree);
four.addEventListener('click', addFour);
five.addEventListener('click', addFive);
six.addEventListener('click', addSix);
seven.addEventListener('click', addSeven);
eight.addEventListener('click', addEight);
nine.addEventListener('click', addNine);
document.addEventListener('keydown', onKeyPress);

// Functions
function clearDisplay() {
    enableNumbers();
    disableOperands();
    sign.disabled = true;
    display.value = '';
    smallDisplay.textContent = display.value;
}

function changeSign() {
    display.value = display.value * -1;
    smallDisplay.textContent = display.value;
}

function addModulus() {
    disableOperands();
    enableNumbers();
    sign.disabled = true;
    display.value += '%';
    smallDisplay.textContent += '%';
}

function addDivide() {
    disableOperands();
    enableNumbers();
    sign.disabled = true;
    display.value += '/';
    smallDisplay.textContent += '÷';
}

function addMultiply() {
    disableOperands();
    enableNumbers();
    sign.disabled = true;
    display.value += '*';
    smallDisplay.textContent += '×';
}

function addSubtract() {
    disableOperands();
    enableNumbers();
    sign.disabled = true;
    display.value += '-';
    smallDisplay.textContent += '-';
}

function addAdd() {
    disableOperands();
    enableNumbers();
    sign.disabled = true;
    display.value += '+';
    smallDisplay.textContent += '+';
}

function addDecimal() {
    enableOperands();
    sign.disabled = true;
    display.value += '.';
    smallDisplay.textContent += '.';
}

function addZero() {
    enableOperands();
    display.value += '0';
    smallDisplay.textContent += '0';
}

function addOne() {
    enableOperands();
    display.value += '1';
    smallDisplay.textContent += '1';
}

function addTwo() {
    enableOperands();
    display.value += '2';
    smallDisplay.textContent += '2';
}

function addThree() {
    enableOperands();
    display.value += '3';
    smallDisplay.textContent += '3';
}

function addFour() {
    enableOperands();
    display.value += '4';
    smallDisplay.textContent += '4';
}

function addFive() {
    enableOperands();
    display.value += '5';
    smallDisplay.textContent += '5';
}

function addSix() {
    enableOperands();
    display.value += '6';
    smallDisplay.textContent += '6';
}

function addSeven() {
    enableOperands();
    display.value += '7';
    smallDisplay.textContent += '7';
}

function addEight() {
    enableOperands();
    display.value += '8';
    smallDisplay.textContent += '8';
}

function addNine() {
    console.log(display.value)
    enableOperands();
    display.value += '9';
    smallDisplay.textContent += '9';
}

function calculate() {
    disableNumbers();
    sign.disabled = false;
    let result = Function(`'use strict'; return (${display.value})`)();
    display.value = result;
    smallDisplay.textContent = display.value;
}

function onKeyPress(e) {
    if (e.key === 'Enter' && equals.disabled === false) {
        calculate();
    } else if (e.key === 'Backspace' && clear.disabled === false) {
        clearDisplay();
    } else if (e.key === 'Escape' && sign.disabled === false) {
        changeSign();
    } else if (e.key === '%' && modulus.disabled === false) {
        addModulus();
    } else if (e.key === '/' && divide.disabled === false) {
        addDivide();
    } else if (e.key === '*' && multiply.disabled === false) {
        addMultiply();
    } else if (e.key === '-' && subtract.disabled === false) {
        addSubtract();
    } else if (e.key === '+' && add.disabled === false) {
        addAdd();
    } else if (e.key === '.' && decimal.disabled === false) {
        addDecimal();
    } else if (e.key === '0' && zero.disabled === false) {
        addZero();
    } else if (e.key === '1' && one.disabled === false) {
        addOne();
    } else if (e.key === '2' && two.disabled === false) {
        addTwo();
    } else if (e.key === '3' && three.disabled === false) {
        addThree();
    } else if (e.key === '4' && four.disabled === false) {
        addFour();
    } else if (e.key === '5' && five.disabled === false) {
        addFive();
    } else if (e.key === '6' && six.disabled === false) {
        addSix();
    } else if (e.key === '7' && seven.disabled === false) {
        addSeven();
    } else if (e.key === '8' && eight.disabled === false) {
        addEight();
    } else if (e.key === '9' && nine.disabled === false) {
        addNine();
    } else {
        return;
    }
} 

function disableOperands() {
    divide.disabled = true;
    multiply.disabled = true;
    subtract.disabled = true;
    add.disabled = true;
    equals.disabled = true;
}

function enableOperands() {
    divide.disabled = false;
    multiply.disabled = false;
    subtract.disabled = false;
    add.disabled = false;
    equals.disabled = false;
}

function disableNumbers() {
    zero.disabled = true;
    one.disabled = true;
    two.disabled = true;
    three.disabled = true;
    four.disabled = true;
    five.disabled = true;
    six.disabled = true;
    seven.disabled = true;
    eight.disabled = true;
    nine.disabled = true;
    decimal.disabled = true;
}

function enableNumbers() {
    zero.disabled = false;
    one.disabled = false;
    two.disabled = false;
    three.disabled = false;
    four.disabled = false;
    five.disabled = false;
    six.disabled = false;
    seven.disabled = false;
    eight.disabled = false;
    nine.disabled = false;
    decimal.disabled = false;
}


