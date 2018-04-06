function buy(elem) {

    //находим все дочерние элементы из блока с описанием товара
    elemArr = elem.children;

    //получаем значения переменных для таблицы
    title = elemArr[1].textContent;
    price = elemArr[2].textContent;
    amount = elemArr[4].value;

    //получаем числовое значение цены
    price2 = price.split(' ');
    price2.pop();
    newPrice = price2.join('');
    console.log(newPrice);

    //создаем массив со значениями всех ячеек строки
    tdArr = [title, price, amount+' шт.', newPrice*amount+' руб'];

    //заполняем ячейки строки
    var newRow = '';
    for(var i = 0; i < 4; i++) {
        newRow += '<td>'+ tdArr[i] + '</td>';
    }

    //создаем строку и заполняем ее созданными ячейками
    var listRow = document.createElement('tr');
    listRow.innerHTML = newRow;
    var card = document.getElementById('productList');
    card.appendChild(listRow);

    //пересчитываем конечную стоимость заказа
    getPrice();
}

function getPrice() {
    var card = document.getElementById('productList');
    rows = card.rows;

    totalPrice = 0;
    for(j = 0; j < rows.length; j++) {
        newValue = parseInt(card.rows[j].cells[3].innerHTML);
        totalPrice += newValue;
    }

    document.getElementById('price').innerHTML = totalPrice+' руб';
}