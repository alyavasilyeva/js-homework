function power(val, pow) {
    if (pow == 1 || pow == 0) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
}

var a = parseInt(prompt("Введите число:"));
var b = parseInt(prompt("Введите степень числа:"));
alert(power(a, b));

