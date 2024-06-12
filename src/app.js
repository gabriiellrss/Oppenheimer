
function Menuef () {
const menu = document.querySelector('.menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
    menu.classList.add(".menu_active");
    //menu.style.backgroundColor = '#000'; // Altere a cor conforme desejado
    } else {    
    menu.classList.remove(".menu_active");
    //menu.style.backgroundColor = '#333';
    }
})
}