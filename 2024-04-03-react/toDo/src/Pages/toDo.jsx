import React, {useState} from 'react'
import ToDoForm from "../Components/ToDoForm/ToDoForm.jsx";
import ToDoList from "../Components/ToDoList/toDoList.jsx";
import {constructNow, format} from "date-fns";

const ToDo = () => {
    const date = constructNow(new Date());
    const formatedDate = format(date, 'yyyy-MM-dd HH:mm')
    console.log(formatedDate)
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
    const onMarkTaskCompleted = (id) => {
        const updatedList = toDoList.map((item) => {
            if (item.id === id && item.completed === false) {
                return {...item, completed: true};
            }
            if (item.id === id && item.completed === true) {
                return {...item, completed: false}
            }
            return item;
        });
        setToDoList(updatedList);
    };

    return (
        <div>
            <ToDoForm onNewToDo={handleNewToDo}/>
            <ToDoList data={toDoList} onMarkTaskCompleted={onMarkTaskCompleted}/>
        </div>
    )
}
export default ToDo
