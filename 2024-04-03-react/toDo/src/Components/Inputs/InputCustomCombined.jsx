import React from 'react'

const InputCustomCombined = (props) => {
    const {labelName,type,id,name,stateValue,onStateChange} = props

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
                        onStateChange(e.target.value.replace('T',' '))
                    }
                }}
            />
        </>
    )
}
export default InputCustomCombined
