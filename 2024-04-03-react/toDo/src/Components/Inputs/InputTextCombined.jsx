import React from 'react'
import ErrorComponent from "../ErrorComponent/ErrorComponent.jsx";

const InputTextCombined = (props) => {
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
                    onStateChange(e.target.value)
                }}
                required={true}
            />
            {errorMessage && (
                <ErrorComponent message={errorMessage}/>
            )}
        </>
    )
}
export default InputTextCombined
