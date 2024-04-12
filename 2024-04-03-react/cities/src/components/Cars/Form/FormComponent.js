import React, {useState} from 'react'
import InputTextCombined from "../../DefaultComponents/inputs/InputTextCombined";
import SelectElement from "../../DefaultComponents/inputs/SelectElement";

const FormComponent = (props) => {
    const {onNewCarAdd} = props
    const DEFAULT_ENGINES = ['petrol', 'diesel', 'electric', 'hybrid']
    const DEFAULT_COLORS = ['black', 'red', 'blue', 'silver', 'white', 'special blue', 'other']
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [engineType, setEngineType] = useState('')
    const [basePrice, setBasePrice] = useState('')
    const [mileage, setMileage] = useState('')
    const [color, setColor] = useState('')
    const [image, setImage] = useState('')
    const [discount, setDiscount] = useState('')
    const createNewCar = (e) => {
        e.preventDefault()
        const newCar = {
            brand,
            model,
            'engine-type': engineType,
            'base-price': basePrice,
            mileage,
            color,
            image,
        }
        onNewCarAdd(newCar)

        setBrand('')
        setModel('')
        setEngineType('')
        setBasePrice('')
        setMileage('')
        setColor('')
        setImage('')

    }

    return (
        <form onSubmit={(e) => createNewCar(e)}>
            <InputTextCombined
                labelName='Brand'
                id='brand'
                type='text'
                name='brand'
                dataState={brand}
                onStateChange={setBrand}
            />
            <InputTextCombined
                labelName='Model'
                id='model'
                type='text'
                name='model'
                dataState={model}
                onStateChange={setModel}
            />
            <SelectElement
                labelName='Engine Type'
                id='engine-type'
                name='engine-type'
                defaults={DEFAULT_ENGINES}
                stateValue={engineType}
                onStateChange={setEngineType}
            />
            <InputTextCombined
                labelName='Base Price'
                id='base-price'
                type='number'
                name='base-price'
                dataState={basePrice}
                onStateChange={setBasePrice}
            />
            <InputTextCombined
                labelName='Discount'
                id='discount'
                type='number'
                name='discount'
                dataState={discount}
                onStateChange={setDiscount}
            />
            <InputTextCombined
                labelName='Mileage'
                id='mileage'
                type='number'
                name='mileage'
                dataState={mileage}
                onStateChange={setMileage}
            />

            <SelectElement
                labelName='Pick Color'
                id='color'
                defaults={DEFAULT_COLORS}
                name='color'
                stateValue={color}
                onStateChange={setColor}

            />
            <InputTextCombined
                labelName='Image'
                id='image'
                type='text'
                name='image'
                dataState={image}
                onStateChange={setImage}
            />
            <input type='submit'/>
        </form>
    )
}
export default FormComponent
