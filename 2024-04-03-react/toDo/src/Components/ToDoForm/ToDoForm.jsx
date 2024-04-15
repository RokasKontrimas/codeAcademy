import InputTextCombined from "../Inputs/InputTextCombined.jsx";
import {useState} from "react";
import InputCustomCombined from "../Inputs/InputCustomCombined.jsx";
import {format} from "date-fns";

const ToDoForm = (props) => {
    const {onNewToDo, selectedItem} = props
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const CREATED_AT = format(new Date(), 'yyyy-mm-dd HH:mm')
    const ID = Math.ceil(Math.random() * 10000)
    if (selectedItem) {
        setTitle('abc')
        // setDescription(selectedItem.description)
        console.log(selectedItem.title)
    }
    const onFormSubmit = (e) => {
        e.preventDefault()
        const newToDoItem = {
            title,
            description,
            completeUntil: date,
            createdAt: CREATED_AT,
            completed: false,
            id: ID,

        }
        onNewToDo(newToDoItem)
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
            <button type='submit'>Confirm</button>
        </form>
    )
}
export default ToDoForm
