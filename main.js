
//Variables
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')


//Eventos
menuEmail.addEventListener('click', toggleDesktopMenu)

//Funciones
function toggleDesktopMenu (){
    desktopMenu.classList.toggle('inactive') //Quita o pone la clase inactive dependiendo si tiene o no
}