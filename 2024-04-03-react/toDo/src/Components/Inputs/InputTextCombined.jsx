import React, {useState} from 'react'
import ErrorComponent from "../ErrorComponent/ErrorComponent.jsx";

const InputTextCombined = (props) => {
    const {labelName, type, id, name, stateValue, onStateChange, errorMessage} = props
    const [error, setError] = useState(errorMessage)
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
                    setError(null)
                }}
                required={true}
            />
            {errorMessage && (
                <ErrorComponent message={error}/>
            )}
        </>
    )
}
export default InputTextCombined
