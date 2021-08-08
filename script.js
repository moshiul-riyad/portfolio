const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');


hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});


window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})