$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
    });



});

const cards = document.querySelectorAll('.benefits__cart');
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseout', stopRotate);
};
function startRotate(event) {
    const cardItem = this.querySelector('.card__body');
    const halfHeight = cardItem.offsetHeight / 2;

    cardItem.style.transform = 'rotateX(' + - (event.offsetY - halfHeight) / 3.5 + 'deg) rotatey(' + (event.offsetX - halfHeight) / 3.5 +'deg)';
};
function stopRotate(event) {
    const cardItem = this.querySelector('.card__body');
    const halfHeight = cardItem.offsetHeight / 2;

    cardItem.style.transform = 'rotateX(0)';
}


const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

const btnToTop = document.querySelector('.btnToTop');
window.onscroll = () =>  {
    if (window.scrollY > 400) {
        btnToTop.classList.remove('btnToTop_show');
    } else {
        btnToTop.classList.add('btnToTop_show');
    };
};




$('.burger__btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('burger__btn-active');
    $('.burger__menu').toggleClass('burger__menu-active');
})

// поиск по сайту (переделать)

var lastResFind=""; // последний удачный результат
var copy_page=""; // копия страницы в ихсодном виде
function TrimStr(s) {
     s = s.replace( /^\s+/g, '');
  return s.replace( /\s+$/g, '');
}
function FindOnPage(inputId) {//ищет текст на странице, в параметр передается ID поля для ввода
  var obj = window.document.getElementById(inputId);
  var textToFind;
  
  if (obj) {
    textToFind = TrimStr(obj.value);//обрезаем пробелы
  } else {
    alert("Введенная фраза не найдена");
    return;
  }
  if (textToFind == "") {
    alert("Вы ничего не ввели");
    return;
  }
   
  if(document.body.innerHTML.indexOf(textToFind)=="-1")
  alert("Ничего не найдено, проверьте правильность ввода!");
   
  if(copy_page.length>0)
        document.body.innerHTML=copy_page;
  else copy_page=document.body.innerHTML;
 
   
  document.body.innerHTML = document.body.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");//стираем предыдущие якори для скрола
  document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='border-bottom: 1px solid #fff'>"+textToFind+"</a>"); //Заменяем найденный текст ссылками с якорем;
  lastResFind=textToFind; // сохраняем фразу для поиска, чтобы в дальнейшем по ней стереть все ссылки
  window.location = '#'+textToFind;//перемещаем скрол к последнему найденному совпадению
} 

document.addEventListener('DOMContentLoaded', () => {
    const scrollItems = document.querySelectorAll('._animation');

    let scrollAnimation = () => {
        let windowCenter = window.innerHeight + window.scrollY;
        
        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 4);
                
            if (windowCenter > scrollOffset) {
                el.classList.add('_active');
            } else {
                el.classList.remove('_active');
            }
        });
    };

    scrollAnimation();
    window.addEventListener('scroll', () => {
        scrollAnimation();
    });
});


