function power(val, pow) {
    if (pow != 1) {
        return val * power(val, pow - 1);
    } else {
        return val;
    }
}

var a = parseInt(prompt("Введите число:"));
var b = parseInt(prompt("Введите степень числа:"));
alert(power(a, b));