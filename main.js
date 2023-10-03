function toggleMenu(){
    const menuToggle = document.querySelector('.toggle')
    const header = document.querySelector('.header')
    menuToggle.classList.toggle('active')
    header.classList.toggle('active')
}