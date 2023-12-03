const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu')

console.log(menuEmail)
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(params) {
    DesktopMenu.classList.toggle('inactive');
      
    
}



