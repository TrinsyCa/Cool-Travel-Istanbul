var navLinks = document.getElementById("navLinks");
var MenuBtn = document.getElementById("MenuBtn");

function showMenu() {
   navLinks.style.right = "0";
   MenuBtn.style.opacity = "0";
}
function hideMenu() {
   navLinks.style.right = "-100%";
   MenuBtn.style.opacity = "1";
}