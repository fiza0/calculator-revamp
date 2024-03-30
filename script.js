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

let firstNumber=0
    ,operation
    ,secondNumber
    ,result

function operate(firstNumber,operation,secondNumber){
    switch(operation){
        case '+':
            return add(firstNumber,secondNumber)
        break;
        case '-':
            return subtract(firstNumber,secondNumber)
        break;
        case '*':
            return multiply(firstNumber,secondNumber)
        break;
        case '/':
            return divide(firstNumber,secondNumber)
        break;
    }
    
}
buttons=document.querySelectorAll('.number')
display=document.querySelector('.display')
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        id=button.id
        display.textContent+=id

    })
})

operators=document.querySelectorAll('.operator')
operators.forEach(operator=>{
    operator.addEventListener('click',()=>{
        firstNumber=Number(display.textContent)
        operation=`${operator.id}`
        display.textContent=''
    })
})
equals=document.querySelector('.equal')
equals.addEventListener('click',()=>{
    secondNumber=Number(display.textContent)
    result=operate(firstNumber,operation,secondNumber)
    display.textContent=`${result}`
})
clear=document.querySelector('.clear')
clear.addEventListener('click',()=>{
    display.textContent=''
    operation=undefined
    firstNumber=0
    secondNumber=undefined
    result=0
})
decimal=document.querySelector('.decimal')
decimal.addEventListener('click',()=>{
    displayText=display.textContent
    if(displayText.includes('.')){
    }else{
        display.textContent+='.'
    }
})