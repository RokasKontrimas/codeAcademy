import React from 'react'
import './CityComponent.css'

const CityComponent = (props) => {
    const {cities} = props
    const isOddCities = cities.length % 2 !== 0 ? 'odd-cities' : '';

    return (
        <div className='cities'>
            {cities.map((city, index) => {
                const attractionMessageSingular = `Main Tourist attraction of ${city.name} is`
                const attractionMessagePlural = `Main Tourist attractions of ${city.name} are`
                const isCapital = city.isCapital ? ' capital' : '';
                return (
                    <div key={index} className={`city${isCapital}${cities.length-1 === index ? isOddCities : ''}`}>
                        <h1>{city.isCapital ? `${city.name} (capital)` : city.name}</h1>
                        {city.touristAttractions.length > 0 && (

                            city.touristAttractions.length > 1 ?
                                <h2>{attractionMessagePlural}</h2> :
                                <h2>{attractionMessageSingular}</h2>
                        )}
                        {city.touristAttractions.length > 0 && (
                            <ul>
                                {city.touristAttractions.map((attraction, index) => {
                                    return <li key={index}>{attraction}</li>
                                })}
                            </ul>
                        )}

                    </div>
                )
            })}
        </div>
    )

}
export default CityComponent
