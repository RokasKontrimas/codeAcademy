import React from 'react'

const ErrorComponent = (props) => {
    const {message} = props
    return (
        <span className='error-message' style={{color: 'red'}}>{message}</span>
    )
}
export default ErrorComponent
