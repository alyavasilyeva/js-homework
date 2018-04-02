var answer = prompt('Введите число от 0 до 999', 0);

function checkIfCorrect(number) {  
    var numberValid;
    if(!isNaN(parseInt(number)) && (parseInt(number) < 1000) && (parseInt(number) >= 0)) {
        numberValid = true;        
    } else {
        numberValid = false;
    }
    return numberValid;
}

function splitToArray(number) {
    testarr = number.split("");
    return testarr;
 
}

function returnRanks(number) {
    var hundreds = 0;
    var tens = 0;
    var ones = 0;
    var arr = [];
    if(!checkIfCorrect(number)) {
        alert('Пользователь ввел не корректное значение');
        console.log(arr);
    } else {
        arr=splitToArray(number);
        if(arr.length == 3) {
            hundreds = array[0];
            tens = arr[1];
            ones = arr[2];
        } else if (arr.length == 2) {
            tens = arr[0];
            ones = arr[1];
        } else if (arr.length == 1) {
            ones = arr[0]

        } 
        alert("Сотни: " + hundreds + ", десятки: " + tens + ", единицы: " + ones);
        
    }    
}


returnRanks(answer);