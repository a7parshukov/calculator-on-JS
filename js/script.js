// переменные для ссылок на элементы
const inputNumber1 = document.getElementById('input-number-1');
const inputNumber2 = document.getElementById('input-number-2');

const buttonResult = document.getElementById('but-result');
const buttonClean = document.getElementById('but-clean');

const buttonPlus = document.getElementById('but-plus');
const buttonMinus = document.getElementById('but-minus');
const buttonMultiply = document.getElementById('but-multiply');
const buttonDivide = document.getElementById('but-divide');

const resultOutput = document.getElementById('result');


buttonResult.onclick = function() {
    let number1 = checkIsNaN(Number(inputNumber1.value));
    let number2 = checkIsNaN(Number(inputNumber2.value));
    resultOutput.textContent = sum(number1, number2);
};

function sum(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2) {
    return num1 - num2;
}


/*  Функции по нажатию кнопок  */
/*
buttonClean.onclick = function() {cleanInputValue(inputValue)};
buttonResult.onclick = function() {checkisNaNInput(inputValue)};

inputNumber1.onchange = function() {checkisNaNInput(inputNumber1)};


function checkisNaNInput(number) {
    let numberResult = Number(number.value);
    if(Number.isNaN(number) == true) {
        number.style.color = 'red';
        number.value = 'ERROR';
        number.disabled = true;
    } else {
        return numberResult;
    }
}


function cleanInputValue(input) {
    input.value = '';
    input.style.color = 'black';
    input.disabled = false;
} */