var menuOpen = document.querySelector('.menu__open');
var menuClose = document.querySelector('.menu__close');
var menuNav = document.getElementById('menuNav');
var drink = document.querySelectorAll('.drink__dialog');

// 메뉴 슬라이드
menuOpen.addEventListener('click',function(e){
    menuNav.classList.add('isAct');
})
menuClose.addEventListener('click',function(e){
    menuNav.classList.remove('isAct');
})

// 확인용
for(var i = 0; i < drink.length; i++ ){
    drink[i].hidden = false;
}