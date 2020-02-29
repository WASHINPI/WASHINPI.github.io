let runningTotal = 0;
let buffer = '0';
let previousOperator = null;

const screen = document.querySelector('.screen');

function buttonClick(text){
    if(isNaN(text)) {
        handleSymbol(text)
    }else {
        handleNumber(text)
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol){
    switch(symbol) {

        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case "=":
            if(previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case "←":
            if(buffer.length === 1){
                buffer = '0';
            }else {
                buffer = buffer.substring(0,buffer.length-1);
            }
            break;
        case '+':
        case '-':
        case '÷':
        case '×':
            console.log('working');
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol) {
    if(buffer === '0') {
        return ;
    }
    const intBuffer = parseInt(buffer);

    if(runningTotal === 0) {
        runningTotal = intBuffer;
    }else{
        flushOperation(intBuffer)
    }
    previousOperator = symbol;
    buffer = '0';
}

function flushOperation(intBuffer) {
    console.log('int buffer',intBuffer)
    if(previousOperator === '+') {
        runningTotal += intBuffer;
    }else if(previousOperator === '-'){
        runningTotal -= intBuffer;
    }else if(previousOperator === '×'){
        runningTotal *= intBuffer;
    }else {
        runningTotal /= intBuffer;
    }
    console.log('total running', runningTotal);
}

function handleNumber(numberString) {
    if(buffer === '0') {
        buffer = numberString;
    }else {
        buffer += numberString;
    }

}


function init(){

    document.querySelector('.calc-buttons').addEventListener('click',function(event){
        buttonClick(event.target.innerText)
    });
}

init();