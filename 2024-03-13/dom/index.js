let body = document.querySelector('body');
let cardList = document.createElement('div')
cardList.classList.add('cards-list');
body.appendChild(cardList)


let products = [
    {
        image: "https://beautinow.com/wp-content/uploads/2023/08/Most_Popular_Perfumes_0366584622ac4f4fa1abe0c937308f44.pngv=1691390378",
        category: "Perfume",
        description: "A captivating and alluring perfume that embodies the essence of elegance and sophistication. This exquisite fragrance is carefully crafted to leave a lasting impression, evoking a sense of confidence and allure. With its unique blend of notes, Fragrance Essence is the perfect choice for those seeking a signature scent that is both timeless and unforgettable.",
        title: "Fragrance Essence",
        price: "$139.99",
        priceOld: "$199.99",
    },
    {
        image: "https://t4.ftcdn.net/jpg/06/50/75/23/360_F_650752340_svHnkTNmdl7ISCeJMRrnyu9ZfDXLAkGT.webp",
        category: "Perfume",
        description: "Experience the enchantment of this luxurious perfume that captivates the senses and leaves a lasting impression. Enchanté Parfum is a harmonious blend of delicate floral notes and warm, sensual undertones, creating a truly mesmerizing fragrance. With its elegant and sophisticated aroma, Enchanté Parfum is the epitome of refined beauty and grace.\n",
        title: "Enchanté Parfum",
        price: "$49.99",
        priceOld: "$99.99",
    },
    {
        image: "",
        category: "Perfume",
        description: "Step into a world of pure bliss with Elysian Mist, a captivating perfume that transports you to a realm of enchantment and serenity. This exquisite fragrance combines ethereal floral notes with a touch of mystique, creating a scent that is both captivating and alluring. Elysian Mist is the perfect choice for those who seek a fragrance that embodies elegance, grace, and a touch of magic.",
        title: "",
        price: "",
        priceOld: "$2000.00",
    },
]

let createProductList = (products) => {
    products.map((product) => {



        if (!product.image && !product.title && !product.price) {
            console.log('lol')
        } else {
            if (!product.image) {
                product.image = 'https://png.pngtree.com/template/20220419/ourmid/pngtree-photo-coming-soon-abstract-admin-banner-image_1262901.jpg'
            }
            let card = document.createElement('div')
            card.classList.add('card')
            cardList.appendChild(card)

            let cardImage = document.createElement('div')
            cardImage.classList.add('image-wrapper')
            card.appendChild(cardImage)

            let productImage = document.createElement('img')
            productImage.setAttribute('src', `${product.image}`)
            productImage.setAttribute('alt', `${product.title} image`)
            productImage.classList.add('product-image')
            cardImage.appendChild(productImage)

            let contentWrapper = document.createElement('div')
            contentWrapper.classList.add('content-wrapper')
            card.appendChild(contentWrapper)

            let productCategory = document.createElement('span')
            productCategory.textContent = `${product.category}`
            productCategory.classList.add('product-category')
            contentWrapper.appendChild(productCategory)

            let productTitle = document.createElement('h2')
            productTitle.textContent = `${product.title}`
            productTitle.classList.add('product-title')
            contentWrapper.appendChild(productTitle)

            let productDescription = document.createElement('p')
            productDescription.textContent = `${product.description}`
            productDescription.classList.add('product-description')
            contentWrapper.appendChild(productDescription)

            let productPriceWrapper = document.createElement('div')
            productPriceWrapper.classList.add('product-price-wrapper')
            contentWrapper.appendChild(productPriceWrapper)

            let productPrice = document.createElement('span')
            productPrice.textContent = `${product.price}`;
            productPrice.classList.add('product-price')
            productPriceWrapper.appendChild(productPrice)
            if (product.priceOld) {
                let productPriceOld = document.createElement('span')
                productPriceOld.textContent = `${product.priceOld}`;
                productPriceOld.classList.add('product-price-old')
                productPriceWrapper.appendChild(productPriceOld)
            }

            let addToCart = document.createElement('button')
            addToCart.classList.add('add-to-cart-button')
            contentWrapper.appendChild(addToCart)

            let cartImage = document.createElement('img')
            cartImage.setAttribute('src', 'cart.svg')
            addToCart.textContent = "Add To Cart"
            addToCart.appendChild(cartImage)
        }

    })
}

createProductList(products)