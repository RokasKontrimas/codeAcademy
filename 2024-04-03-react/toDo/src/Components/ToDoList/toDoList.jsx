import React from 'react'
import TodoItem from "../TodoItem/TodoItem.jsx";

const ToDoList = (props) => {
    const {data} = props
    console.log(data)
    return (
        <div className="todo-items-list">
            {data.map((toDoItem, index) => {
                return <>
                    <TodoItem data={toDoItem} key={index}/>
                </>
            })}

        </div>
    )
}
export default ToDoList
