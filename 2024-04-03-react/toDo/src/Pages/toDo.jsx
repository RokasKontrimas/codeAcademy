import React, {useState} from 'react'
import ToDoForm from "../Components/ToDoForm/ToDoForm.jsx";
import ToDoList from "../Components/ToDoList/toDoList.jsx";
import {format} from "date-fns";

const ToDo = () => {
    const date = new Date();
    const formatedDate = format(date, 'yyyy-mm-dd HH:mm')
    const createdAt = format(new Date(), 'yyyy-mm-dd HH:mm')
    const id = Math.ceil(Math.random() * 10000)
    const toDoItems = [
        {
            title: 'Sukurti toDo forma',
            description: 'Sukurti formos komponenta su input laukeliais',
            completeUntil: formatedDate,
            createdAt: createdAt,
            id: id,
            completed: false,

        }
    ];
    const [toDoList, setToDoList] = useState(toDoItems)
    const handleNewToDo = (newItem) => {
        setToDoList(prevState => [newItem, ...prevState])
    }
    return (
        <div>
            <ToDoForm onNewToDo={handleNewToDo}/>
            <ToDoList data={toDoList}/>
        </div>
    )
}
export default ToDo
