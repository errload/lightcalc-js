let lastOperand = 0;
let operation = null;

const inputWindow = document.querySelector('#inputWindow');
let operator = document.querySelector('#operator');
let history = document.querySelector('#history textarea');

// clear
function clear() {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
    operator.textContent = '';
    history.value = '';
    // console.log(`last ${lastOperand}, operation ${operation}`);
}

// plus
function plus() {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'plus';
    inputWindow.value = '';
    operator.textContent = '+';
    history.value += `${lastOperand}+`;
    // console.log(`last ${lastOperand}, operation ${operation}`);
}

// minus
function minus() {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'minus';
    inputWindow.value = '';
    operator.textContent = '-';
    history.value += `${lastOperand}-`;
    // console.log(`last ${lastOperand}, operation ${operation}`);
}

// times
function times() {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'times';
    inputWindow.value = '';
    operator.textContent = '*';
    history.value += `${lastOperand}*`;
    // console.log(`last ${lastOperand}, operation ${operation}`);
}

// divide
function divide() {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'divide';
    inputWindow.value = '';
    operator.textContent = '/';
    history.value += `${lastOperand}/`;
    // console.log(`last ${lastOperand}, operation ${operation}`);
}

// unarminus
function unarminus() {
    lastOperand = parseFloat(inputWindow.value);
    if (lastOperand > 0) inputWindow.value = -lastOperand.toFixed(2);
    else inputWindow.value = -(+lastOperand).toFixed(2);
    history.value += `${inputWindow.value}(+/-)`;

    operation = null;
    lastOperand = 0;
    operator.textContent = '+/-';   
    // console.log(`value ${inputWindow.value}`);
}

// sup
function sup() {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sup';
    inputWindow.value = '';
    operator.textContent = '**';
    history.value += `${lastOperand}**`;
    // console.log(`last ${lastOperand}, operation ${operation}`);
}

// radic
function radic() {
    lastOperand = parseFloat(inputWindow.value);
    let result = Math.sqrt(lastOperand);
    if (Number.isInteger(result)) inputWindow.value = result;
    else inputWindow.value = result.toFixed(2);
    history.value += `${inputWindow.value}sqrt`;

    operation = null;
    lastOperand = 0;
    operator.textContent = 'sqrt';  
    // console.log(`last ${lastOperand}, operation ${operation}`);
}

// backspace
function backspace() {
    lastOperand = inputWindow.value.slice(0, inputWindow.value.length - 1);
    inputWindow.value = lastOperand;
    // console.log(`last ${lastOperand}, operation ${operation}`);
}

// calc
function calc() {
    let result = 0;
    switch (operation) {
        case 'plus':
            result = lastOperand + parseFloat(inputWindow.value);
            history.value += `${parseFloat(inputWindow.value)}`;
            operation = null;
            lastOperand = 0;
            if (Number.isInteger(result)) inputWindow.value = result;
            else inputWindow.value = result.toFixed(2);
            operator.textContent = '=';
            history.value += `=${inputWindow.value}, `;
            break;
        case 'minus':
            result = lastOperand - parseFloat(inputWindow.value);
            history.value += `${parseFloat(inputWindow.value)}`;
            operation = null;
            lastOperand = 0;
            if (Number.isInteger(result)) inputWindow.value = result;
            else inputWindow.value = result.toFixed(2);
            operator.textContent = '=';
            history.value += `=${inputWindow.value}, `;
            break;
        case 'times':
            result = lastOperand * parseFloat(inputWindow.value);
            history.value += `${parseFloat(inputWindow.value)}`;
            operation = null;
            lastOperand = 0;
            if (Number.isInteger(result)) inputWindow.value = result;
            else inputWindow.value = result.toFixed(2);
            operator.textContent = '=';
            history.value += `=${inputWindow.value}, `;
            break;
        case 'divide':
            result = lastOperand / parseFloat(inputWindow.value);
            history.value += `${parseFloat(inputWindow.value)}`;
            operation = null;
            lastOperand = 0;
            if (Number.isInteger(result)) inputWindow.value = result;
            else inputWindow.value = result.toFixed(2);
            operator.textContent = '=';
            history.value += `=${inputWindow.value}, `;
            break;
        case 'sup':
            result = lastOperand ** parseFloat(inputWindow.value);
            history.value += `${parseFloat(inputWindow.value)}`;
            operation = null;
            lastOperand = 0;
            if (Number.isInteger(result)) inputWindow.value = result;
            else inputWindow.value = result.toFixed(2);
            operator.textContent = '=';
            history.value += `=${inputWindow.value}, `;
            break;
    }
    // console.log(`last ${lastOperand}, operation ${operation}`);
}

// function button
document.querySelector('#btn_clear').addEventListener('click', clear);
document.querySelector('#btn_plus').addEventListener('click', plus);
document.querySelector('#btn_minus').addEventListener('click', minus);
document.querySelector('#btn_calc').addEventListener('click', calc);
document.querySelector('#btn_times').addEventListener('click', times);
document.querySelector('#btn_divide').addEventListener('click', divide);
document.querySelector('#btn_unarminus').addEventListener('click', unarminus);
document.querySelector('#btn_sup').addEventListener('click', sup);
document.querySelector('#btn_radic').addEventListener('click', radic);
document.querySelector('#btn_backspace').addEventListener('click', backspace);

// numbers button
document.querySelector('#btn_one').addEventListener('click', () => {
    if (inputWindow.value.substr(0, inputWindow.value.length) === '0') inputWindow.value = '1';
    else inputWindow.value += '1';
});
document.querySelector('#btn_two').addEventListener('click', () => {
    if (inputWindow.value.substr(0, inputWindow.value.length) === '0') inputWindow.value = '2';
    else inputWindow.value += '2';
});
document.querySelector('#btn_three').addEventListener('click', () => {
    if (inputWindow.value.substr(0, inputWindow.value.length) === '0') inputWindow.value = '3';
    else inputWindow.value += '3';
});
document.querySelector('#btn_four').addEventListener('click', () => {
    if (inputWindow.value.substr(0, inputWindow.value.length) === '0') inputWindow.value = '4';
    else inputWindow.value += '4';
});
document.querySelector('#btn_five').addEventListener('click', () => {
    if (inputWindow.value.substr(0, inputWindow.value.length) === '0') inputWindow.value = '5';
    else inputWindow.value += '5';
});
document.querySelector('#btn_six').addEventListener('click', () => {
    if (inputWindow.value.substr(0, inputWindow.value.length) === '0') inputWindow.value = '6';
    else inputWindow.value += '6';
});
document.querySelector('#btn_seven').addEventListener('click', () => {
    if (inputWindow.value.substr(0, inputWindow.value.length) === '0') inputWindow.value = '7';
    else inputWindow.value += '7';
});
document.querySelector('#btn_eight').addEventListener('click', () => {
    if (inputWindow.value.substr(0, inputWindow.value.length) === '0') inputWindow.value = '8';
    else inputWindow.value += '8';
});
document.querySelector('#btn_nine').addEventListener('click', () => {
    if (inputWindow.value.substr(0, inputWindow.value.length) === '0') inputWindow.value = '9';
    else inputWindow.value += '9';
});
document.querySelector('#btn_zero').addEventListener('click', () => {
    if (inputWindow.value.substr(0, inputWindow.value.length) === '0') inputWindow.value = '0';
    else inputWindow.value += '0';
});
document.querySelector('#btn_point').addEventListener('click', () => {
    if (inputWindow.value.indexOf('.') === -1 && inputWindow.value.length > 0) inputWindow.value += '.';
});

// keydown button
document.addEventListener('keydown', keydownFunction);

function keydownFunction(e) {
    switch (e.keyCode) {
        // numbers
        case 96:
            if (inputWindow.value.substr(0, inputWindow.value.length) === '0') inputWindow.value = '0';
            else inputWindow.value += '0';
            break;
        case 97:
            if (inputWindow.value.substr(0, inputWindow.value.length) === '0') inputWindow.value = '1';
            else inputWindow.value += '1';
            break;
        case 98:
            if (inputWindow.value.substr(0, inputWindow.value.length) === '0') inputWindow.value = '2';
            else inputWindow.value += '2';
            break;
        case 99:
            if (inputWindow.value.substr(0, inputWindow.value.length) === '0') inputWindow.value = '4';
            else inputWindow.value += '3';
            break;
        case 100:
            if (inputWindow.value.substr(0, inputWindow.value.length) === '0') inputWindow.value = '4';
            else inputWindow.value += '4';
            break;
        case 101:
            if (inputWindow.value.substr(0, inputWindow.value.length) === '0') inputWindow.value = '5';
            else inputWindow.value += '5';
            break;
        case 102:
            if (inputWindow.value.substr(0, inputWindow.value.length) === '0') inputWindow.value = '7';
            else inputWindow.value += '6';
            break;
        case 103:
            if (inputWindow.value.substr(0, inputWindow.value.length) === '0') inputWindow.value = '7';
            else inputWindow.value += '7';
            break;
        case 104:
            if (inputWindow.value.substr(0, inputWindow.value.length) === '0') inputWindow.value = '8';
            else inputWindow.value += '8';
            break;
        case 105:
            if (inputWindow.value.substr(0, inputWindow.value.length) === '0') inputWindow.value = '9';
            else inputWindow.value += '9';
            break;
        case 110:
            if (inputWindow.value.indexOf('.') === -1 && inputWindow.value.length > 0) inputWindow.value += '.';
            break;

        // operations
        case 107:
            plus();
            break;
        case 109:
            minus();
            break;
        case 106:
            times();
            break;
        case 111:
            divide();
            break;
        case 13:
            calc();
            break;
        case 27:
            clear();
            break;
        case 8:
            backspace();
            break;
    }
}
