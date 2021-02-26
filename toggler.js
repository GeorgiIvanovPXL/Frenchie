const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.getElementById('mainNavBar');
const logo = document.getElementById('brand-logo');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('change');
})

window.addEventListener('scroll', () =>{
    if(window.scrollY > 0){
        navbar.classList.add('scrolled');
        logo.classList.add('scrolled');
    }
    else{
        navbar.classList.remove('scrolled')
        logo.classList.remove('scrolled');
    }
    
})
   
