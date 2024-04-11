import './FormComponent.css'

const FormComponent = () => {
    return (
        <div>
            <h1 className='title'>City form</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(e.target.elements)

            }}>
                <div className='form-control'>
                    <label htmlFor='city'>
                        City
                    </label>
                    <input id='city' type='text' name='city'/>
                </div>

                <div className='form-control'>
                    <label htmlFor='population'>
                        Population
                    </label>
                    <input id='population' type='number' name='population'/>
                </div>

                <div className='form-control'>
                    <label htmlFor='continent'>
                        Continent
                    </label>
                    <input id='continent' type='text' name='continent'/>
                </div>

                <div className='form-control'>
                    <label htmlFor='country'>
                        Country
                    </label>
                    <input id='country' type='text' name='country'/>
                </div>

                <div className='form-control'>
                    <label htmlFor='tourist-attractions'>
                        Tourist attractions
                    </label>
                    <input id='tourist-attractions' type='text' name='tourist-attractions'/>
                </div>

                <input type='submit' value='submit'/>
            </form>
        </div>
    )
}
export default FormComponent
