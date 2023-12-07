const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const iconMenuMobile = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const productDetail = document.querySelector('.product-detail')
const iconProducts = document.querySelector('.navbar-shopping-cart')

const cardsContainer = document.querySelector('.cards-container')

const elementInfoContainer = document.querySelector('.product-detail-selected')
const iconCloseElementInfo = document.querySelector('.product-detail-close-selected')
iconCloseElementInfo.addEventListener('click', elementInfoClose)

menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu(params) {
    desktopMenu.classList.toggle('inactive'); 
    productDetail.classList.add('inactive');
    elementInfoClose ()
}

iconMenuMobile.addEventListener('click', toggleMobileMenu)
function toggleMobileMenu(params) {
      mobileMenu.classList.toggle('inactive');
        productDetail.classList.add('inactive');
        elementInfoClose () 
}

iconProducts.addEventListener('click' , toggleDesktopProducts)
function toggleDesktopProducts(params) {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive'); 
    productDetail.classList.toggle('inactive');
    elementInfoClose ()
}

// lista de productos
let productList =[]
productList.push( {
    name:'bike',
    price:129,
    image :'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push( {
    name:'skate',
    price:100,
    image :'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push( {
    name:'motorbike',
    price:129,
    image :'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

// las clases que contengan la palabra product se refieren a la lista de compra

// las clases que contengan la palabra element se refieren a la informacion del producto


function renderProducts (array){
    for(product of array){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click' , elementInfoOpen)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src' , './icons/bt_add_to_cart.svg')
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure)
        productInfoFigure.appendChild(productImgCart)
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
        cardsContainer.appendChild(productCard)
    }
}
renderProducts(productList)

// informacion del producto / elemento  para abrir o cerrar
function elementInfoOpen () {
    elementInfoContainer.classList.remove('inactive')
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive'); 
    productDetail.classList.add('inactive');
}
function elementInfoClose () {
    elementInfoContainer.classList.add('inactive')
}