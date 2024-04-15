import InputTextCombined from "../Inputs/InputTextCombined.jsx";
import {useEffect, useState} from "react";
import InputCustomCombined from "../Inputs/InputCustomCombined.jsx";
import {format} from "date-fns";

const ToDoForm = (props) => {
    const {onNewToDo, selectedItem, initiateEdit} = props
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const DATE_NOW = format(new Date(), 'yyyy-mm-dd HH:mm')
    const ID = Math.ceil(Math.random() * 10000)
    useEffect(() => {
        if (selectedItem) {
            setTitle(selectedItem.title)
            setDescription(selectedItem.description)
            setDate(selectedItem.completeUntil)
        }

    }, [selectedItem]);

    const onFormSubmit = (e) => {
        e.preventDefault()
        if (selectedItem) {
            const editedTask = {
                ...selectedItem,
                title,
                description,
                completeUntil: date,
                editedAt: DATE_NOW,
            };
            initiateEdit(editedTask);
        } else {


            const newToDoItem = {
                title,
                description,
                completeUntil: date,
                createdAt: DATE_NOW,
                completed: false,
                id: ID,

            }
            onNewToDo(newToDoItem)
        }
        setTitle('')
        setDescription('')
        setDate('')
    }

    return (
        <form onSubmit={(e) => onFormSubmit(e)}>
            <InputTextCombined
                labelName='Title'
                type='text'
                id='title'
                name='title'
                stateValue={title}
                onStateChange={setTitle}
            />
            <InputTextCombined
                labelName='Description'
                type='text'
                id='description'
                name='description'
                stateValue={description}
                onStateChange={setDescription}
            />
            <InputCustomCombined
                labelName='Date'
                type='datetime-local'
                id='date'
                name='date'
                stateValue={date}
                onStateChange={setDate}
            />
            <button type='submit'>{selectedItem ? 'Save' : 'Create'}</button>
        </form>
    )
}
export default ToDoForm
