import React from 'react';
import TodoItem from "../TodoItem/TodoItem.jsx";
import { closestTo } from "date-fns";

const ToDoList = (props) => {

    const { data, onMarkTaskCompleted, onTaskDelete, handleTaskEdit } = props;

    const falseCompleted = data.filter(item => !item.completed);

    const trueCompleted = data.filter(item => item.completed);

    // Sort trueCompleted items by createdAt
    trueCompleted.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateA - dateB;
    });

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
                />;
            })}
        </div>
    );
};

export default ToDoList;
