var i = 2;

var arr = [];
var check = [];

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




// nextPrime:
//   for (var i = 2; i <= 10; i++) {

//     for (var j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }

//     alert( i ); // простое
//   }

