var one = parseInt(prompt('Введите число а'));
var two = parseInt(prompt('Введите число b'));

alert('Сначала A: ' + one + ', B: ' + two);

var three = one;
var one = two;
var two = three;

alert('Теперь A: ' + one + ', B: ' + two);