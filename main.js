
//Variables
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuBurguer = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoopingCartContainer = document.querySelector('#shoopingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const produtsList = [];


//Eventos
menuEmail.addEventListener('click', () => {
    shoopingCartContainer.classList.add('inactive')
    desktopMenu.classList.toggle('inactive') //Con esto se logra acortar e incluir la función directamente
})
menuBurguer.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toogleCarritoshoopingCartContainer)


//Funciones
/* function toggleDesktopMenu (){
    desktopMenu.classList.toggle('inactive') //Quita o pone la clase inactive dependiendo si tiene o no
} */
function toggleMobileMenu (){
    shoopingCartContainer.classList.add('inactive')//Con esto se logra agregarle la clase inactive para que no se mezcle la vista con el shoopingCartContainer
    mobileMenu.classList.toggle('inactive') 

    //Otra manera de logra que si el carrito esta abierto se cierre el menu mobile
/*     const isshoopingCartContainerClosed = shoopingCartContainer.classList.contains('inactive')
    if (!isshoopingCartContainerClosed) {
        shoopingCartContainer.classList.add('inactive')
    }
    mobileMenu.classList.add('inactive') */
}

function toogleCarritoshoopingCartContainer (){
    mobileMenu.classList.add('inactive')//Con esto se logra agregarle la clase inactive para que no se mezcle la vista con el menu mobile
    desktopMenu.classList.add('inactive')
    shoopingCartContainer.classList.toggle('inactive') 

    //Otra manera de logra que si el menu mobile esta abierto se cierre el carrito
/*     const isMobileMenoClosed = mobileMenu.classList.contains('inactive')
    if (!isMobileMenoClosed) {
        mobileMenu.classList.add('inactive')
    }
    shoopingCartContainer.classList.add('inactive')
 */

}

//Arrays con objetos
produtsList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
produtsList.push({
    name: 'Screen',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
produtsList.push({
    name: 'Laptop',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
produtsList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
produtsList.push({
    name: 'Screen',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
produtsList.push({
    name: 'Laptop',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
    <div>
        <p>$120,00</p>
        <p>Bike</p>
        
    </div>
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
</div>
</div> */


//Con esta función se encapsula el código y se podría hacer mas arrays
function renderProducts (arr) {
    //loop para recorrer el array de products
//Aquí se crea en base al div html
for (product of arr) {
    const productCard = document.createElement('div') //Se crea el elemento
    productCard.classList.add('product-card') // Se agrega

    const productImg = document.createElement('img')
    productImg.setAttribute('src', product.image) //imagen dinamica

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')
    
    const productInfoDiv = document.createElement('div')

    const productPrice = document.createElement('p')
    productPrice.innerText = '$' + product.price //Aquí se trae el precio del array con objeto
    const productName = document.createElement('p')
    productName.innerText = product.name

    productInfoDiv.append(productPrice, productName) //Aquí dice que dentro de productInfoDiv esta el precio y el nombre como en el esquema HTML
    
    const productInfoFigure = document.createElement('figure')
    const productImgCard = document.createElement('img')
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg') //imagen estatica

    productInfoFigure.appendChild(productImgCard)
    productInfo.append(productInfoDiv, productInfoFigure)

    productCard.append(productImg, productInfo)

    cardsContainer.appendChild(productCard)

}
}

renderProducts(produtsList)
