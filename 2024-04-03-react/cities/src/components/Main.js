import {useState} from 'react'
import HeaderComponent from "./HeaderItem/HeaderComponent";
import CityComponent from "./CityItem/CityComponent";
import './Main.css'
import InputTextCombined from "./AddCityForm/InputElements/InputTextCombined";
import InputSelectionCombined from "./AddCityForm/InputElements/InputSelectionCombined";

const Main = () => {
    const DEFAULT_POPULATION = 1000;
    const DEFAULT_CAPITAL_VALUE = false;
    const [name, setName] = useState('')
    const [population, setPopulation] = useState(DEFAULT_POPULATION);
    const [continent, setContinent] = useState('')
    const [country, setCountry] = useState('')
    const [touristAttractions, setTouristAttractions] = useState('')
    const [isCapital, setIsCapital] = useState(DEFAULT_CAPITAL_VALUE);
    const [cities, setCities] = useState(
        [
            {
                name: "Tokyo",
                population: 37400068,
                location: {
                    continent: "Asia",
                    country: "Japan"
                },
                touristAttractions: ["Tokyo Tower", "Senso-ji Temple", "Shinjuku Gyoen National Garden"],
                isCapital: true
            },
            {
                name: "New York City",
                population: 8398748,
                location: {
                    continent: "North America",
                    country: "United States"
                },
                touristAttractions: ["Statue of Liberty"],
                isCapital: false
            },
            {
                name: "London",
                population: 8982000,
                location: {
                    continent: "Europe",
                    country: "United Kingdom"
                },
                touristAttractions: ["Big Ben", "British Museum", "Tower of London"],
                isCapital: true
            },
            {
                name: "Paris",
                population: 2141000,
                location: {
                    continent: "Europe",
                    country: "France"
                },
                touristAttractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
                isCapital: true
            },
            {
                name: "Beijing",
                population: 21542000,
                location: {
                    continent: "Asia",
                    country: "China"
                },
                touristAttractions: ["Great Wall of China", "Forbidden City", "Temple of Heaven"],
                isCapital: true
            },
            {
                name: "Vilnius",
                population: 541505,
                location: {
                    continent: "Europe",
                    country: "Lithuania"
                },
                touristAttractions: ["The Gediminas Tower", "Television Tower", "Gates of Dawn"],
                isCapital: true
            },
            {
                name: "Cairo",
                population: 9900000,
                location: {
                    continent: "Africa",
                    country: "Egypt"
                },
                touristAttractions: ["Pyramids of Giza", "Egyptian Museum", "Khan el-Khalili"],
                isCapital: true
            },
            {
                name: "Rio de Janeiro",
                population: 6718903,
                location: {
                    continent: "South America",
                    country: "Brazil"
                },
                touristAttractions: ["Christ the Redeemer", "Sugarloaf Mountain", "Copacabana Beach"],
                isCapital: false
            },
            {
                name: "Sydney",
                population: 5312163,
                location: {
                    continent: "Australia",
                    country: "Australia"
                },
                touristAttractions: ["Sydney Opera House", "Sydney Harbour Bridge", "Bondi Beach"],
                isCapital: false
            },
            {
                name: "Mumbai",
                population: 20000000,
                location: {
                    continent: "Asia",
                    country: "India"
                },
                touristAttractions: ["Gateway of India", "Chhatrapati Shivaji Maharaj Terminus"],
                isCapital: false
            }
        ]);


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


        setCities(prevState => [newCity, ...prevState])

        setName('')
        setPopulation(DEFAULT_POPULATION)
        setCountry('')
        setContinent('')
        setTouristAttractions('')
        setIsCapital(DEFAULT_CAPITAL_VALUE)
    }


    return (
        <>
            <HeaderComponent/>
            <CityComponent cities={cities}/>
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
                    <textarea id='attractions'
                              value={touristAttractions}
                              onChange={(e) => setTouristAttractions(e.target.value)}>
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
        </>
    )
}
export default Main
