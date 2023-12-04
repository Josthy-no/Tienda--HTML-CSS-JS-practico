const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const iconMenuMobile = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const productDetail = document.querySelector('.product-detail')
const iconProducts = document.querySelector('.navbar-shopping-cart')
menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu(params) {
    desktopMenu.classList.toggle('inactive'); 
    productDetail.classList.add('inactive');
}

iconMenuMobile.addEventListener('click', toggleMobileMenu)
function toggleMobileMenu(params) {
      mobileMenu.classList.toggle('inactive');
        productDetail.classList.add('inactive'); 
}

iconProducts.addEventListener('click' , toggleDesktopProducts)
function toggleDesktopProducts(params) {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive'); 
    productDetail.classList.toggle('inactive');
}