function sum(arg1, arg2) {
    return arg1 + arg2;
}

function diff(arg1, arg2) {
    return arg1 - arg2;
}

function mult(arg1, arg2) {
    return arg1 * arg2;
}

function div(arg1, arg2) {
    if(!arg2==0){
        return arg1/arg2;
    } else {
        return("Делить на ноль нельзя!")
    }
    
}

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case "+": 
            alert(sum(arg1, arg2));
            break;
        case "-": 
            alert(diff(arg1, arg2));
            break;
        case "*": 
            alert(mult(arg1, arg2));
            break;
        case "/": 
            alert(div(arg1, arg2));
            break;
        default:
            alert("Не знаю такую операцию");
            break;
    }
}

var a;
var b;
var oper;

a = parseInt(prompt("Введите первое число"));
b = parseInt(prompt("Введите второе число"));
oper = prompt("Введите операцию");

mathOperation(a, b, oper);