const togglebtn=document.getElementById('nav-toggle');
const navlinks=document.getElementById('nav-links');


togglebtn.addEventListener('click',() =>{
    navlinks.classList.toggle('active');
})