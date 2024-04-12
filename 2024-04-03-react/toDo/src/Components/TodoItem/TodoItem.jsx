import React from 'react'

const TodoItem = (props) => {
    const {data} = props
    return (
        <div style={{display: "flex", flexDirection: 'column'}}>
            <h2>{data.title}</h2>
            <span>Complete until: <span>{data.completeUntil}</span></span>
            <p>{data.description}</p>
            <i>Status: {data.completed ? (<s>Completed</s>) : (<span>Completed</span>)}</i>
            <span>Task created at: <span>{data.createdAt}</span></span>
        </div>
    )
}
export default TodoItem
