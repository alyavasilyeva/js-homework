var i = 2;

var arr = [];

loop: while (i <= 100) {
    var n = i;
    
    while(n > 2) {
        --n;
        if(i%n == 0) {
           break;
        } else if (n == 2) {
            arr.push(i);
        }else{
            continue;
        }
    }
    i++;
}

alert(arr);