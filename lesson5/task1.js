function check() {
    var container = document.querySelector("div.chechWrap")
    var chechTable = document.createElement("table");

    var alphabet = [0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    var white = {
        "peshka": "&#9817;",
        "korol": "&#9812;",
        "ferz": "&#9813;", 
        "kon": "&#9816;",
        "ladya": "&#9814;",
        "slon": "&#9815;"
    }

    var black = {
        "peshka": "&#9823;",
        "korol": "&#9818;",
        "ferz": "&#9819;", 
        "kon": "&#9822;",
        "ladya": "&#9820;",
        "slon": "&#9821;"
    }

    for(var i = 0; i < 10; i++) {
        var chechRow = document.createElement("tr");

        for(var j = 0; j < 10; j ++) {
            var chechCell = document.createElement("td");
            chechCell.setAttribute("style", "width: 80px; height: 80px; text-align: center; font-size: 25px;");

            //добавляет числа и буквы
            if (i == 0 || i == 9) {
                if(j == 0 || j == 9) {
                    //убираем числа и буквы с угловых клеток
                    chechCell.innerHTML = '';
                }else {
                    //добавляет буквы
                    chechCell.innerHTML = alphabet[j];
                } 
            } else if (i > 0 && i < 9) {

                if(j == 0 || j == 9) {
                    //добавляем цифры
                    chechCell.innerHTML = i;

                }else if(i%2 == 0 && j%2 ==0) {
                    //раскрашиваем поля
                    chechCell.style.backgroundColor = "#b4673d";

                } else if (i%2 != 0 && j%2 != 0) {
                    chechCell.style.backgroundColor = "#b4673d";
                }
            } 

            //добавляем белые фигурки
            if (i == 2 && j != 0 && j != 9) {
                chechCell.innerHTML = "<p>" + white.peshka + "</p>";
            } else if ((i == 1 && j == 1) || (i == 1 && j == 8)) {
                chechCell.innerHTML = "<p>" + white.ladya + "</p>";
            }else if ((i == 1 && j == 2) || (i == 1 && j == 7)) {
                chechCell.innerHTML = "<p>" + white.kon + "</p>";
            }else if ((i == 1 && j == 3) || (i == 1 && j == 6)) {
                chechCell.innerHTML = "<p>" + white.slon + "</p>";
            }else if (i == 1 && j == 4) {
                chechCell.innerHTML = "<p>" + white.ferz + "</p>";
            }else if (i == 1 && j == 5) {
                chechCell.innerHTML = "<p>" + white.korol + "</p>";
            }

            //добавляем черные фигурки
            if (i == 7 && j != 0 && j != 9) {
                chechCell.innerHTML = "<p>" + black.peshka + "</p>";
            } else if ((i == 8 && j == 1) || (i == 8 && j == 8)) {
                chechCell.innerHTML = "<p>" + black.ladya + "</p>";
            }else if ((i == 8 && j == 2) || (i == 8 && j == 7)) {
                chechCell.innerHTML = "<p>" + black.kon + "</p>";
            }else if ((i == 8 && j == 3) || (i == 8 && j == 6)) {
                chechCell.innerHTML = "<p>" + black.slon + "</p>";
            }else if (i == 8 && j == 4) {
                chechCell.innerHTML = "<p>" + black.ferz + "</p>";
            }else if (i == 8 && j == 5) {
                chechCell.innerHTML = "<p>" + black.korol + "</p>";
            }

            //поворачиваем противоположные фигурки, буквы и цифры
            if((j != 0 && i < 3) || (j == 9)) {
                chechCell.style.transform = 'rotate(180deg)';
            }



            chechRow.appendChild(chechCell);
        }
        chechTable.appendChild(chechRow);
    }

    container.appendChild(chechTable);
}

check();