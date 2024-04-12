import React, {useState} from 'react'
import HeaderComponent from "../components/HeaderItem/HeaderComponent";
import FormComponent from "../components/Cars/Form/FormComponent";
import {CarsList} from "../components/Cars/CarsList";

const Cars = () => {
    const carsList = [
        {
            brand: 'Volvo',
            model: 'xc 70',
            'engine-type': 'diesel',
            'base-price': 17000,
            mileage: 0,
            color: 'red',
            image: 'https://res.cloudinary.com/caradvice/image/private/q_auto/v1/678e9ed107c61a5d478f71703e259aca',
            discount: 0,

        },
        {
            brand: 'Toyota',
            model: 'Camry',
            'engine-type': 'petrol',
            'base-price': 20000,
            mileage: 0,
            color: 'blue',
            image: 'https://www.cnet.com/a/img/resize/2bf1d319e1b6b6135eaa226c0a48b2c557501a8b/hub/2021/08/20/4b392287-347f-4374-b152-69e0366821a7/2021-toyota-camry-trd-4.jpg?auto=webp&width=1200',
            discount: 0,
        },
        {
            brand: 'Honda',
            model: 'Civic',
            'engine-type': 'electric',
            'base-price': 22000,
            mileage: 0,
            color: 'special blue',
            image: 'https://i.pinimg.com/originals/7b/66/a9/7b66a9330e4a74fe3f826f01a83c988b.jpg',
            discount: 0,
        },
        {
            brand: 'Ford',
            model: 'Fiesta',
            'engine-type': 'petrol',
            'base-price': 15000,
            mileage: 0,
            color: 'black',
            image: 'https://m.atcdn.co.uk/vms/media/%7Bresize%7D/f1d4aa6eaf0441a7b76fa7075757c607.jpg',
            discount: 0,
        },
        {
            brand: 'BMW',
            model: 'X3',
            'engine-type': 'diesel',
            'base-price': 35000,
            mileage: 0,
            color: 'white',
            image: 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/110503/x3-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80',
            discount: 0,
        },
        {
            brand: 'Mercedes-Benz',
            model: 'C-Class',
            'engine-type': 'electric',
            'base-price': 40000,
            mileage: 0,
            color: 'gray',
            image: 'https://media.ed.edmunds-media.com/mercedes-benz/c-class/2024/oem/2024_mercedes-benz_c-class_sedan_amg-c-43_fq_oem_1_1280.jpg',
            discount: 0,
        },
        {
            brand: 'Audi',
            model: 'A4',
            'engine-type': 'petrol',
            'base-price': 38000,
            mileage: 0,
            color: 'red',
            image: 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/51909/a4-exterior-left-front-three-quarter-3.jpeg?q=80&q=80',
            discount: 0,
        },
        {
            brand: 'Chevrolet',
            model: 'Malibu',
            'engine-type': 'diesel',
            'base-price': 25000,
            mileage: 0,
            color: 'blue',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo85ik5iPZia1Vr9mbSu34FNZVHx0upGhBWeAPXCF1Vw&s',
            discount: 0,
        },
        {
            brand: 'Nissan',
            model: 'Altima',
            'engine-type': 'petrol',
            'base-price': 23000,
            mileage: 0,
            color: 'silver',
            image: 'https://i.gaw.to/content/photos/55/01/550195-nissan-altima-2022.jpeg',
            discount: 0,
        }
    ];
    const [cars, setCars] = useState(carsList)

    const updateCarsArr = (newCar) => {
        setCars(prevState => [newCar, ...prevState])
    }
    return (
        <>
            <HeaderComponent/>
            <h1 style={{textAlign: 'center'}}>Car Form</h1>
            <FormComponent onNewCarAdd={updateCarsArr}/>
            <CarsList cars={cars}/>
        </>

    )
}
export default Cars
