function f(source) {
    //достаем последнюю часть из ссылки на маленькую картинку
    var src1 = source.split('/');
    var newImageIndex = src1.pop();


    //заменяем последнюю часть ссылки большой картинки
    var bigImage = document.getElementById('bigImage')
    var src2 = bigImage.getAttribute('src').split('/');
    src2.pop();
    src2.push(newImageIndex);
    // console.log(src2);
    var newLink = src2.join('/');
    // console.log(newLink);
    
    //устанавливаем новую ссылку для большой картинки
    bigImage.setAttribute('src', newLink);

    //создаем дефолтную картинку, на случай, если по сгенерированной ссылке нет картинки
    var onErrorLink = 'assets/big/placeholder.png'

    //при ошибке показываем дефолтную картинку
    bigImage.onerror = function(){
        this.setAttribute('src', onErrorLink);
        console.log('картинки не существует')
    }
}

var thumbs = document.getElementById('thumbnailsWrap').children;
console.log(thumbs);

smallArray = [];

for (i = 0; i < thumbs.length; i++) {
    smallArray.push(thumbs[i].getAttribute('src').split('/').pop());
}

console.log(smallArray);

bigArray = [];
var img = new Image();

for(j = 0; j < smallArray.length; j++) {
    link = thumbs[j].getAttribute('src').split('/');
    link[1] = 'big'
    bigLink = link.join('/');
    img.src = bigLink;
    bigArray.push(bigLink);
}

console.log(bigArray);


function slide(id) {
    var bigImage = document.getElementById('bigImage');
    var src = bigImage.getAttribute('src');
    console.log(src);
    index = bigArray.indexOf(src);
    console.log(index);

    console.log(id);
    var newIndex; 

    switch(id) {
        case 'prev':
        newIndex = index - 1;
        if(newIndex < 0) {
            newIndex = bigArray.length-1;
            console.log(newIndex);
        }
        break;

        case 'next':
        newIndex = index + 1;
        if(newIndex>bigArray.length-1) {
            newIndex = 0;  
            console.log(newIndex); 
        };
        break;
    }

    // console.log(newIndex);
    bigImage.setAttribute('src', bigArray[newIndex]);

}
