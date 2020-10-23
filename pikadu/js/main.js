//* создаем переменную, в которую положим кнопку меню

let menuToggle = document.querySelector('#menu-toggle');

//* Здесь мы создаем переменную в которую полжим меню
let menu = document.querySelector('.sidebar');

//* Отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function(event) {

  //*отменяем стандартное поведение ссылки
  event.preventDefault();
  
  //* вешаем класс на меню когда кликнули по кнопке меню
  menu.classList.toggle('visible');
})

