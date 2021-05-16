/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) ++++

2) Изменить жанр фильма, поменять "комедия" на "драма" ++++

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту ++++

5) Добавить нумерацию выведенных фильмов  +++  */ 

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// const genre = document.querySelector('.promo__genre')
const advertisingBlock = document.querySelector(".promo__adv");
const advertisings = advertisingBlock.querySelectorAll('img')
const listItem = document.querySelectorAll('.promo__interactive-item');
const poster = document.querySelector('.promo__bg');

movieDB.movies.sort();
advertisings.forEach((item)=>{

    item.remove();
})

poster.querySelector('.promo__genre').textContent = 'Драма';


setInterval(()=>{
    poster.style.backgroundImage = 'url(img/bg.jpg)';
}, 1000);

// genre.textContent = 'Драма';




listItem.forEach((item, i)=>{

    item.textContent = `${i + 1}: ${movieDB.movies[i]} `
})


(function(){
    let foo = function(){
        alert('hello');
    };
})();
