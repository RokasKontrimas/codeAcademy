import {createElement, Fragment, useRef, useState} from "react";

const ButtonAddonComponent = (props) => {
    const {title,setAdditionals} = props

    const [attractions, setAttractions] = useState([]);
const  additions= useRef(null)


    const addAttraction = (e) => {
        e.preventDefault()
        const newAttraction = createElement('input', {name: 'additional-tourist-attractions'});
        setAttractions([...attractions, newAttraction]);
        setAdditionals(additions)
    };

    return (
        <div>
            <button onClick={addAttraction}>
                {title}
            </button>
            <div ref={additions} id='additional-attractions-list'>
                {attractions.map((attraction, index) => (
                    <Fragment key={index}>
                        {attraction}
                    </Fragment>
                ))}
            </div>
        </div>
    );
}
export default ButtonAddonComponent
