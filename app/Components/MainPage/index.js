const openMenuBtn = document.getElementById("burger");
const closeMenuBtn = document.getElementById("close")
const navMenu = document.querySelector(".navbar");

 
function showMenu () {
    navMenu.classList.toggle('showMenu')

}
openMenuBtn.addEventListener('click', showMenu)


function removeMenu () {
    navMenu.classList.remove('showMenu')
}
closeMenuBtn.addEventListener('click', removeMenu)
