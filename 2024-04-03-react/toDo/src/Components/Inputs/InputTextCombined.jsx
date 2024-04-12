import React from 'react'

const InputTextCombined = (props) => {
    const {labelName, type, id, name, stateValue, onStateChange} = props
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
            />
        </>
    )
}
export default InputTextCombined
