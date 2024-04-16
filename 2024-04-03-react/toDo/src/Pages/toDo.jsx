import React, {useEffect, useState} from 'react'
import ToDoForm from "../Components/ToDoForm/ToDoForm.jsx";
import ToDoList from "../Components/ToDoList/toDoList.jsx";
import {constructNow, format} from "date-fns";

const ToDo = () => {
    const DATE_NOW = format(new Date(), 'yyyy-mm-dd HH:mm')
    const id = Math.ceil(Math.random() * 10000)
    const toDoItems = [
        {
            title: 'Sukurti toDo forma',
            description: 'Sukurti formos komponenta su input laukeliais',
            completeUntil: '2024-04-17 16:00',
            createdAt: DATE_NOW,
            id: id,
            completed: false,

        }, {
            title: 'Sukurti toDo forma 2',
            description: 'Sukurti formos komponenta su input laukeliais 2',
            completeUntil: '2024-04-16 16:00',
            createdAt: DATE_NOW,
            id: 32131231565423987,
            completed: false,

        }, {
            title: 'Sukurti toDo forma 3',
            description: 'Sukurti formos komponenta su input laukeliais 3',
            completeUntil: '2024-04-16 15:00',
            createdAt: DATE_NOW,
            id: 3213123132423921387,
            completed: false,

        }, {
            title: 'Apsirengti siltai',
            description: 'Sukurti silta ruba',
            completeUntil: '2024-04-16 11:00',
            createdAt: DATE_NOW,
            id: 3213123123921231387,
            completed: false,

        }, {
            title: 'Pasiruosti vasarai',
            description: 'Padaryti 20 atsispaudimu silta',
            completeUntil: '2024-04-24 19:00',
            createdAt: DATE_NOW,
            id: 3213123123123921387,
            completed: false,

        },
    ];

    const [toDoList, setToDoList] = useState(toDoItems)
    const [selectedItem, setSelectedItem] = useState(null)
    const [filteredTodos, setFilteredTodos] = useState(null)
    toDoList.sort((a, b) => {
        const dateA = new Date(a.completeUntil);
        const dateB = new Date(b.completeUntil);
        return dateA - dateB;
    });


    const handleNewToDo = (newItem) => {
        setToDoList(prevState => [newItem, ...prevState])
    }
    const onMarkTaskCompleted = (id) => {
        const updatedList = toDoList.map((item) => {
            if (item.id === id) {
                return {...item, completed: !item.completed, editedAt: DATE_NOW};
            }
            return item;
        });
        setToDoList(updatedList);
    };
    const onTaskDelete = (id) => {
        setSelectedItem(null)
        setToDoList(toDoList.filter((item) => item.id !== id))
    }
    const handleTaskEdit = (id) => {
        const selectedItem = toDoList.find((item) => item.id === id);
        setSelectedItem(selectedItem);
    }
    const initiateEdit = (editedTask) => {
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
