import React from 'react'
import TodoItem from "../TodoItem/TodoItem.jsx";

const ToDoList = (props) => {

    const {data, onMarkTaskCompleted, onTaskDelete, handleTaskEdit} = props
    const falseCompleted = data.filter(item => !item.completed);
    const trueCompleted = data.filter(item => item.completed);

    const sortedData = falseCompleted.concat(trueCompleted);

    return (

        <div className="todo-items-list">
            {sortedData.map((toDoItem, index) => {
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
