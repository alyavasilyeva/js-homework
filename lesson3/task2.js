var i = 0;
var n;

do {
    if (i == 0){
        n = 'это ноль';
    }else if (i % 2 == 0) {
        n = 'четное число';

    } else {
        n = 'нечетное число';
    }
    
    document.write(i + ' - ' + n + '<br>')
    i++;
} while (i <= 10);