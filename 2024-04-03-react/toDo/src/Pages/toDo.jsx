import React, {useEffect, useState} from 'react'
import ToDoForm from "../Components/ToDoForm/ToDoForm.jsx";
import ToDoList from "../Components/ToDoList/toDoList.jsx";
import {constructNow, format} from "date-fns";

const ToDo = () => {
    const date = constructNow(new Date());
    const formattedDate = format(date, 'yyyy-MM-dd HH:mm')
    const createdAt = format(new Date(), 'yyyy-mm-dd HH:mm')
    const id = Math.ceil(Math.random() * 10000)
    const toDoItems = [
        {
            title: 'Sukurti toDo forma',
            description: 'Sukurti formos komponenta su input laukeliais',
            completeUntil: formattedDate,
            createdAt: createdAt,
            id: id,
            completed: false,

        }
    ];
    const [toDoList, setToDoList] = useState(toDoItems)
    const [selectedItem, setSelectedItem] = useState('')
    const handleNewToDo = (newItem) => {
        setToDoList(prevState => [newItem, ...prevState])
    }
    const onMarkTaskCompleted = (id) => {
        const updatedList = toDoList.map((item) => {
            if (item.id === id) {
                return {...item, completed: !item.completed};
            }
            return item;
        });
        setToDoList(updatedList);
    };
    const onTaskDelete = (id) => {
        setToDoList(toDoList.filter((item) => item.id !== id))
    }
    const handleTaskEdit = (id) => {
        const selectedItem = toDoList.find((item) => item.id === id);
        setSelectedItem(selectedItem);
    }
    const initiateEdit = (editedTask) => {
                console.log(editedTask)
        const updatedList = toDoList.map((item) => {
            if (item.id === editedTask.id) {
                return editedTask; // Return the edited task
            }
            return item; // Return the original item if not being edited
        });
        setToDoList(updatedList); // Update the state with the new list
    };



    return (
        <div>
            <ToDoForm
                onNewToDo={handleNewToDo}
                selectedItem={selectedItem}
                initiateEdit={initiateEdit}
            />
            <ToDoList
                data={toDoList}
                onMarkTaskCompleted={onMarkTaskCompleted}
                onTaskDelete={onTaskDelete}
                handleTaskEdit={handleTaskEdit}
            />
        </div>
    )
}
export default ToDo
