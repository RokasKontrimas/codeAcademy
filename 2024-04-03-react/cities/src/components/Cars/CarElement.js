import React from 'react'

const CarElement = (props) => {
    const {car} = props;
    const brand = car.brand
    const model = car.model
    const mileage = car.mileage
    const engineType = car['engine-type']
    const basePrice = car['base-price']
    const color = car.color
    const image = car.image
    const discount = car.discount
    console.log(car)
    const getExtraEnginePrice = () => {
        let price = 0;
        switch (engineType) {
            case "electric":
                price += 10000;
                break;
            case "hybrid":
                price += 7500;
                break;
            case "diesel":
                price += 5000;
                break;
        }
        return Number(price);
    }
    const getExtraMileagePrice = () => {
        if (!mileage) {
            return 0
        }

        let price = Number(basePrice);
        if (mileage > 400000) {
            return (price / 50)

        }
        if (mileage > 100000) {
            return (price / 30)

        }
        if (mileage > 50000) {
            return (price / 20)

        }
        if (mileage > 20000) {
            return (price / 15)

        }
        if (mileage > 0) {
            return (price / 10)

        }
        return price;
    }
    const getExtraColorPrice = () => {
        let price = 0;
        if (color === 'special blue') {
            price += 500
        }
        if (color === 'other') {
            price += 3000
        }
        return Number(price);
    }
    const getExtrasPriceForGoods = () => {
        const colorPrice = getExtraColorPrice()
        console.log(colorPrice)
        const enginePrice = getExtraEnginePrice()
        return colorPrice + enginePrice
    }
    const getTotalPrice = () => {
        const enginePrice = getExtraEnginePrice()
        const mileagePrice = getExtraMileagePrice()
        const colorPrice = getExtraColorPrice()
        return Number(basePrice + enginePrice + colorPrice - discount - mileagePrice)
    }
    const getReducedPrice = () => {
        const mileagePrice = getExtraMileagePrice()
        return discount + mileagePrice
    }
    return (
        <div
            style={{
                display: "flex",
                flexDirection: 'column',
                padding: '10px',
                height: '100%',
                boxShadow: '9px 5px 20px 0px'
            }}>
            <h2>Brand: <span>{brand}</span></h2>
            <h3>Model: <span>{model}</span></h3>
            <img src={image} alt={model} width='300' style={{objectFit: 'contain'}}/>
            <h2> Base price: <span>{car['base-price']}</span></h2>
            <h3>Extras:</h3>
            <ul>
                <li>Engine type: <span>{car['engine-type']}</span></li>
                <li>Color: <span>{car.color}</span></li>
                {getExtraEnginePrice() > 0 && (
                    <li>Extras price: {getExtrasPriceForGoods()}</li>
                )}
            </ul>
            <h3>Price reduction</h3>
            <ul>
                <li>Due to mileage: <span>{getExtraMileagePrice()}</span></li>
                <li>Discount: <span>{discount}</span></li>
                <li>Reduced price: {getReducedPrice()}</li>
            </ul>
            <h3>Total price without PVM: <span>{getTotalPrice(false)}</span></h3>
            <h3>PVM: <span>{Math.round(getTotalPrice() / 21)}</span></h3>
            <h3>Total price with PVM: <span>{Math.round(getTotalPrice() + (getTotalPrice() / 21))}</span></h3>
        </div>
    )
}
export default CarElement


