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

        }, {
            title: 'Sukurti toDo forma 2',
            description: 'Sukurti formos komponenta su input laukeliais 2',
            completeUntil: formattedDate,
            createdAt: createdAt,
            id: 3213123123987,
            completed: false,

        }, {
            title: 'Sukurti toDo forma 3',
            description: 'Sukurti formos komponenta su input laukeliais 3',
            completeUntil: formattedDate,
            createdAt: createdAt,
            id: 3213123123921387,
            completed: true,

        }, {
            title: 'Apsirengti siltai',
            description: 'Sukurti silta ruba',
            completeUntil: formattedDate,
            createdAt: createdAt,
            id: 3213123123921387,
            completed: true,

        }, {
            title: 'Pasiruosti vasarai',
            description: 'Padaryti 20 atsispaudimu silta',
            completeUntil: formattedDate,
            createdAt: createdAt,
            id: 3213123123921387,
            completed: true,

        },
    ];
    const [toDoList, setToDoList] = useState(toDoItems)
    const [selectedItem, setSelectedItem] = useState(null)
    const [filteredTodos, setFilteredTodos] = useState(null)
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
                // Return the edited task
                return editedTask;
            }
            // Return the original item if not being edited
            return item;
        });
        // Update the state with the new list
        setToDoList(updatedList);
    };

    const searchEngine = (e) => {
        const searchText = e.target.value.toLowerCase().trim();
        const defaultItems = [...toDoList];
        if (searchText) {
            const filteredTodos = defaultItems.filter((toDo) => {
                return toDo.title.toLowerCase().includes(searchText) || toDo.description.toLowerCase().includes(searchText);
            });
            setFilteredTodos(filteredTodos);
        } else {
            setFilteredTodos(null);
        }
    }

    useEffect(() => {
        setToDoList(filteredTodos || toDoItems);
    }, [filteredTodos]);


    return (
        <div>
            <div>
                <input
                    id='search'
                    name='search'
                    type='search'
                    onChange={(e) => searchEngine(e)}
                />

            </div>
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
