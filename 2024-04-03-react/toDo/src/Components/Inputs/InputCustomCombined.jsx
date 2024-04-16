import React from 'react'
import ErrorComponent from "../ErrorComponent/ErrorComponent.jsx";

const InputCustomCombined = (props) => {
    const {labelName, type, id, name, stateValue, onStateChange, errorMessage} = props

    return (
        <>
            <label htmlFor={id}>{labelName}</label>
            <input
                type={type}
                id={id}
                name={name}
                value={stateValue}
                onChange={(e) => {
                    if (name === 'date') {
                        onStateChange(e.target.value.replace('T', ' '))
                    }
                }}
            />
            {errorMessage && (
                <ErrorComponent message={errorMessage}/>
            )}
        </>
    )
}
export default InputCustomCombined
