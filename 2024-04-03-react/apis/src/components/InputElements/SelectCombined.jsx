import React from 'react'
import './Inputs.css'
const SelectCombined = (props) => {
    const {labelName, id, type, name, stateValue,onStateChange, categories} = props
    const handleOnStateChange = (e) => {
        onStateChange(e.target.value)
    }
    return (
        <div className='form-check'>
            <label htmlFor={id}>{labelName}</label>
            {type ? (
                <input
                    type={type}
                    id={id}
                    name={name}
                    value={stateValue}
                    onChange={(e) => handleOnStateChange(e)}

                />
            ) : (
                <select
                    id={id}
                    name={name}
                    onChange={(e) => handleOnStateChange(e)}
                >
                    )
                    {categories &&
                        categories.map((category, index) => {
                            return <option
                                value={category}
                                key={index}>
                                {category}</option>
                        })
                    }
                </select>
            )}
        </div>
    )
}
export default SelectCombined
