import React from 'react'
import TodoItem from "../TodoItem/TodoItem.jsx";

const ToDoList = (props) => {

    const {data, onMarkTaskCompleted, } = props
    return (
        <div className="todo-items-list">
            {data.map((toDoItem) => {
                return <TodoItem
                    data={toDoItem}
                    key={toDoItem.id}
                    onMarkTaskCompleted={onMarkTaskCompleted}
                    />
            })}

        </div>
    )
}
export default ToDoList
