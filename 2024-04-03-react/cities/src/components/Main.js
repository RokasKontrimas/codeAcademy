import {useState} from 'react'
import HeaderComponent from "./HeaderItem/HeaderComponent";
import CityComponent from "./CityItem/CityComponent";
import './Main.css'
import FormComponent from "./AddCityForm/FormComponent";


const Main = () => {
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

    const returnCities = (newCity) => {

        setCities(prevState => [newCity, ...prevState])
    }


    return (
        <>
            <HeaderComponent/>
            <CityComponent cities={cities}/>
            <FormComponent onCitiesChange={returnCities}/>
        </>
    )
}
export default Main
