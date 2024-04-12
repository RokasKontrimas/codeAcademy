import './FormComponent.css'
import InputTextCombined from "../../DefaultComponents/inputs/InputTextCombined";
import InputSelectionCombined from "../../DefaultComponents/inputs/InputSelectionCombined";
import {useState} from "react";

const FormComponent = (props) => {
    const {onNewCity} = props
    const DEFAULT_POPULATION = 1000;
    const DEFAULT_CAPITAL_VALUE = false;
    const [name, setName] = useState('')
    const [population, setPopulation] = useState(DEFAULT_POPULATION);
    const [continent, setContinent] = useState('')
    const [country, setCountry] = useState('')
    const [touristAttractions, setTouristAttractions] = useState('')
    const [isCapital, setIsCapital] = useState(DEFAULT_CAPITAL_VALUE);
    const createNewCity = () => {
        let attractions = touristAttractions.split(',').map(item => item.trim());

        const newCity = {
            name: name,
            population: population,
            location: {
                country: country,
                continent: continent,
            },
            touristAttractions: attractions,
            isCapital: isCapital,

        }

        onNewCity(newCity)

        setName('')
        setPopulation(DEFAULT_POPULATION)
        setCountry('')
        setContinent('')
        setTouristAttractions('')
        setIsCapital(DEFAULT_CAPITAL_VALUE)
    }
    return (
        <div>
            <h1 className='title'>City form</h1>
            <form id='city-form' onSubmit={(e) => {
                e.preventDefault()
                createNewCity()
            }}>
                <InputTextCombined
                    labelName='City'
                    id='city-Name'
                    type='text'
                    inputName='city-name'
                    dataState={name}
                    onStateChange={setName}
                />
                <InputTextCombined
                    labelName='Population'
                    id='population'
                    type='number'
                    inputName='city-population'
                    dataState={population}
                    onStateChange={setPopulation}
                />

                <InputTextCombined
                    labelName='Continent'
                    id='continent'
                    type='text'
                    inputName='continent'
                    dataState={continent}
                    onStateChange={setContinent}
                />

                <InputTextCombined
                    labelName='Country'
                    id='country'
                    type='text'
                    inputName='country'
                    dataState={country}
                    onStateChange={setCountry}
                />
                <div className='form-control'>
                    <label htmlFor='attractions'>
                        Attractions
                    </label>
                    <textarea
                        id='attractions'
                        value={touristAttractions}
                        onChange={(e) => setTouristAttractions(e.target.value)}
                    >
            </textarea>
                </div>

                <div className='form-radio'>
                    <InputSelectionCombined
                        labelName='Yes'
                        type='checkbox'
                        id='is-capital'
                        inputName='isCapital'
                        stateValue={isCapital}
                        onStateChange={setIsCapital}
                    />

                </div>


                <button type='submit'>Create</button>
            </form>
        </div>

    )
}
export default FormComponent
