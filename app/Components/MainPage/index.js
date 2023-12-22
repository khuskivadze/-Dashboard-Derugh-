 const openMenuBtn = document.querySelector('.bi-list')
const closeMenuBtn = document.getElementById("close")
const navMenu = document.querySelector(".navbar");

 
function showMenu () {
    navMenu.classList.toggle('showMenu')
    console.log('open')

}
openMenuBtn.addEventListener('click', showMenu)


function removeMenu () {
    navMenu.classList.remove('showMenu')
}
closeMenuBtn.addEventListener('click', removeMenu)



//Open login Section
const openLoginSection = document.getElementById("home_btn");
 


//fulPage
function openLogFunq () {
    logInSection.classList.add('log-inShow')
    logInSection.style.transition  = '0.8s ease'
}
openLoginSection.addEventListener('click', openLogFunq)
 
 



//close login section

const closeLogBtn = document.getElementById("close_log");
const logInSection = document.getElementById("log-in");


function closeLogFunq () {
    logInSection.classList.remove('log-inShow')
    console.log("close")
}
closeLogBtn.addEventListener('click', closeLogFunq)
