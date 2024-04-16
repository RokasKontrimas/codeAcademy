import React from 'react';
import InputSelectiveCombined from "../Inputs/InputSelectiveCombined.jsx";
import {formatDistance} from "date-fns";

const TodoItem = (props) => {
    const {data, onMarkTaskCompleted, onTaskDelete, handleTaskEdit} = props;
    const parsedDate = new Date(data.completeUntil);
    const now = new Date();
    const distance = formatDistance(now, parsedDate);

    // Check if the distance is a multiple of 7 days
    const parsedDistance = parseInt(distance, 10);
    const isMultipleOf7 = parsedDistance % 7 === 0;

    // If distance is a multiple of 7 days, format it as weeks
    const formattedDistance = isMultipleOf7 && parsedDistance > 6
        ? `${parsedDistance / 7} weeks`
        : distance;

    return (
        <div style={{display: "flex", flexDirection: 'column'}}>
            <h2>{data.title}</h2>
            <span>Complete until: <span>{data.completeUntil}</span></span>
            <span>Deadline: <span>{formattedDistance}</span></span>
            <p>{data.description}</p>
            <i>Status: {data.completed ? (<s>Completed</s>) : (<span>Completed</span>)}</i>
            <span>Task created at: <span>{data.createdAt}</span></span>
            {data.editedAt && (<span>Task edited at: <span>{data.editedAt}</span></span>)}

            <InputSelectiveCombined
                labelName='Mark as completed'
                type='checkbox'
                id={`mark-complete-${data.id}`}
                name='mark-complete'
                stateValue={data.completed}
                onStateChange={onMarkTaskCompleted}
                eId={data.id}
            />
            <button style={{width: '15%'}} onClick={() => onTaskDelete(data.id)}>Remove</button>
            <button style={{width: '15%'}} onClick={() => handleTaskEdit(data.id)}>Edit</button>
        </div>
    );
}

export default TodoItem;
