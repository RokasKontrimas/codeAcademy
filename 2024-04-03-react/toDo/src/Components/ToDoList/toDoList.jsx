import React from 'react'
import TodoItem from "../TodoItem/TodoItem.jsx";

const ToDoList = (props) => {

    const {data, onMarkTaskCompleted,onTaskDelete,handleTaskEdit } = props
    return (
        <div className="todo-items-list">
            {data.map((toDoItem,index) => {
                return <TodoItem
                    data={toDoItem}
                    key={index}
                    onMarkTaskCompleted={onMarkTaskCompleted}
                    onTaskDelete={onTaskDelete}
                    handleTaskEdit={handleTaskEdit}
                    />
            })}

        </div>
    )
}
export default ToDoList
