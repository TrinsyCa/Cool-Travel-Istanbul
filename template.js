var navLinks = document.getElementById("navLinks");
var MenuBtn = document.getElementById("MenuBtn");
var gotop = document.getElementById('totop');
var nav = document.querySelector('nav');

function showMenu() {
   navLinks.style.right = "0";
   MenuBtn.style.opacity = "0";
}
function hideMenu() {
   navLinks.style.right = "-100%";
   MenuBtn.style.opacity = "1";
}
window.addEventListener('scroll', () =>
{
   if(window.pageYOffset > 1000)
   {
      gotop.classList.add('active');
   }
   else
   {
      gotop.classList.remove('active');
   }
   nav.classList.toggle('nav-anim',window.scrollY > 0);
})