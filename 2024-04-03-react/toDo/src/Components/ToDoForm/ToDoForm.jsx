import InputTextCombined from "../Inputs/InputTextCombined.jsx";
import { useEffect, useState } from "react";
import InputCustomCombined from "../Inputs/InputCustomCombined.jsx";
import { format } from "date-fns";

const ToDoForm = (props) => {
    const { onNewToDo, selectedItem, initiateEdit } = props;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const DATE_NOW = format(new Date(), 'yyyy-mm-dd HH:mm');
    const ID = Math.ceil(Math.random() * 10000);
    const [errors, setErrors] = useState({
        title: null,
        description: null,
        date: null
    });

    useEffect(() => {
        if (selectedItem) {
            setTitle(selectedItem.title);
            setDescription(selectedItem.description);
            setDate(selectedItem.completeUntil);
        }
    }, [selectedItem]);

    const onFormSubmit = (e) => {
        e.preventDefault();
        const inputs = {
            title: title,
            description: description,
            date: date
        };
        if (validator(inputs)) {
            if (selectedItem) {
                const editedTask = {
                    ...selectedItem,
                    title,
                    description,
                    completeUntil: date,
                    editedAt: DATE_NOW
                };
                initiateEdit(editedTask);
            } else {
                const newToDoItem = {
                    title,
                    description,
                    completeUntil: date,
                    createdAt: DATE_NOW,
                    completed: false,
                    id: ID
                };
                onNewToDo(newToDoItem);
            }
            setTitle('');
            setDescription('');
            setDate('');
        }
    };

    const validator = (items) => {
        let isValid = true;
        const newErrors = {};
        Object.entries(items).forEach(([key, value]) => {
            const parsedValue = value.trim();
            if (!parsedValue) {
                newErrors[key] = `${key} field cannot be empty`;
                isValid = false;
            }
        });
        setErrors(newErrors);
        return isValid;
    };

    return (
        <form noValidate={true} style={{ display: 'flex', flexDirection: "column", width: '50%' }} onSubmit={(e) => onFormSubmit(e)}>
            <InputTextCombined
                labelName='Title'
                type='text'
                id='title'
                name='title'
                stateValue={title}
                onStateChange={setTitle}
                errorMessage={errors.title}
            />
            <InputTextCombined
                labelName='Description'
                type='text'
                id='description'
                name='description'
                stateValue={description}
                onStateChange={setDescription}
                errorMessage={errors.description}
            />
            <InputCustomCombined
                labelName='Date'
                type='datetime-local'
                id='date'
                name='date'
                stateValue={date}
                onStateChange={setDate}
                errorMessage={errors.date}
            />
            <button type='submit'>{selectedItem ? 'Save' : 'Create'}</button>
        </form>
    )
}

export default ToDoForm;
