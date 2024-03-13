let body = document.querySelector('body');
let cardList = document.createElement('div')
cardList.classList.add('cards-list');
body.appendChild(cardList)

let card = document.createElement('div')
card.classList.add('card')
cardList.appendChild(card)

let cardImage = document.createElement('div')
cardImage.classList.add('image-wrapper')
card.appendChild(cardImage)

let productImage = document.createElement('img')
productImage.setAttribute('src', 'https://raw.githubusercontent.com/RomanasV/feu13/main/2024-03-13-dom-manipulation/images/image-product-desktop.jpg')
productImage.setAttribute('alt', 'product image')
productImage.classList.add('product-image')
cardImage.appendChild(productImage)

let contentWrapper = document.createElement('div')
contentWrapper.classList.add('content-wrapper')
card.appendChild(contentWrapper)

let productCategory = document.createElement('span')
productCategory.textContent = "Perfume"
productCategory.classList.add('product-category')
contentWrapper.appendChild(productCategory)

let productTitle = document.createElement('h2')
productTitle.textContent = "Gabrielle Essence Eau De Parfum"
productTitle.classList.add('product-title')
contentWrapper.appendChild(productTitle)

let productDescription = document.createElement('p')
productDescription.textContent = "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
productDescription.classList.add('product-description')
contentWrapper.appendChild(productDescription)

let productPriceWrapper = document.createElement('div')
productPriceWrapper.classList.add('product-price-wrapper')
contentWrapper.appendChild(productPriceWrapper)

let productPrice = document.createElement('span')
productPrice.textContent = '$149.99';
productPrice.classList.add('product-price')
productPriceWrapper.appendChild(productPrice)

let productPriceOld = document.createElement('span')
productPriceOld.textContent = '$169.99';
productPriceOld.classList.add('product-price-old')
productPriceWrapper.appendChild(productPriceOld)

let addToCart = document.createElement('button')
addToCart.classList.add('add-to-cart-button')
contentWrapper.appendChild(addToCart)

let cartImage = document.createElement('img')
cartImage.style.width = '10%'
cartImage.setAttribute('src', 'cart.svg')
addToCart.textContent = "Add To Cart"
addToCart.appendChild(cartImage)
