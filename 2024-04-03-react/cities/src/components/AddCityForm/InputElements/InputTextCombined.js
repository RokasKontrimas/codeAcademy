import React from 'react'

const InputTextCombined = (props) => {
    const {labelName, id, inputName, type, dataState, onStateChange} = props
    return (
        <div className='form-control'>
            <label htmlFor={id}>
                {labelName}
            </label>
            <input
                id={id}
                type={type}
                name={inputName}
                value={dataState}
                onChange={(e) => {
                    if (type === 'number') {
                        onStateChange(Number(e.target.value))
                    } else {
                        onStateChange(e.target.value)
                    }
                }
                }/>
        </div>
    )
}
export default InputTextCombined
