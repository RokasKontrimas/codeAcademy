import React from 'react'

const InputSelectiveCombined = (props) => {
    const {labelName, type, id, name, stateValue, onStateChange, eId} = props
    return (
        <div>
            <input
                checked={stateValue}
                type={type}
                id={id}
                name={name}
                value={stateValue}
                onChange={() => onStateChange(eId)
                }
            />
            <label htmlFor={id}>{labelName}</label>
        </div>
    )
}
export default InputSelectiveCombined
