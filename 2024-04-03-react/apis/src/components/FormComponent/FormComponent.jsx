import TextCombined from "../InputElements/TextCombined.jsx";
import {useState} from "react";
import SelectCombined from "../InputElements/SelectCombined.jsx";
import './Form.css'
const FormComponent = (props) => {
    const {categories, handleJokeCategory, handleJokeByQuery} = props
    const [searchQuery, setSearchQuery] = useState('')
    const [currentCategory, setCurrentCategory] = useState(categories[0])
    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (searchQuery) {
            handleJokeByQuery(searchQuery)
        } else {
            handleJokeCategory(currentCategory)
        }

    }
    return (
        <form
            onSubmit={(e) => handleFormSubmit(e)}
        >
            <TextCombined
                labelName='Search'
                id='search'
                name='search'
                stateValue={searchQuery}
                onStateChange={setSearchQuery}
            />
            <SelectCombined
                labelName='Category'
                id='category'
                name='category'
                categories={categories}
                stateValue={currentCategory}
                onStateChange={setCurrentCategory}
            />
            <input type='submit' value='search' className='btn'/>
        </form>
    )
}
export default FormComponent
