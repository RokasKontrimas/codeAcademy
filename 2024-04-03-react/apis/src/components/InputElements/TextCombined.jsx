import React from 'react'

const TextCombined = (props) => {
    const {labelName, id, type, name, stateValue, onStateChange} = props
    const handleOnStateChange = (e) => {
        onStateChange(e.target.value)
    }
    return (
        <div className='form-control'>
            <label htmlFor={id}>{labelName}</label>
            <input
                type={type}
                id={id}
                name={name}
                value={stateValue}
                onChange={(e) => handleOnStateChange(e)}
            />
        </div>
    )
}
export default TextCombined
