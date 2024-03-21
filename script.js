function add (a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}
function divide(a,b){
    return a/b
}
function multiply(a,b){
    return a*b
}

let firstNumber,operator,secondNumber

function operate(firstNumber,operator,secondNumber){
    switch(operator){
        case '+':
            add(firstNumber,secondNumber)
        break;
        case '-':
            subtract(firstNumber,secondNumber)
        break;
        case '*':
            multiply(firstNumber,secondNumber)
        break;
        case '/':
            divide(firstNumber,secondNumber)
        break;
    }
    
}