import React, {Fragment} from 'react'
import CarElement from "./CarElement";

export const CarsList = (props) => {
    const {cars} = props
    return (
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: '50px', placeItems: "center",marginTop: '100px'}}>
            {cars.map((car, index) => {
                return <CarElement car={car} key={index}/>
            })}
        </div>
    )
}
