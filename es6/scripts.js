//Scripts for active menu

var toggle = document.getElementById('toggle-menu'),
    menu = document.getElementById('menu');

toggle.addEventListener('click', function(){
    menu.classList.toggle('active');
});