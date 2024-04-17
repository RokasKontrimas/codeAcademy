import React, {useEffect, useState} from 'react'
import HeaderComponent from "../components/HeaderComponent/HeaderComponent.jsx";
import FormComponent from "../components/FormComponent/FormComponent.jsx";
import './Jokes.css'

const Jokes = () => {
    const [joke, setJoke] = useState('')
    const [listedCategories, setCategories] = useState('')
    const [isQueryActive, setIsQueryActive] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            const jokeRes = await fetch('https://api.chucknorris.io/jokes/random');
            const jokeData = await jokeRes.json();
            setJoke(jokeData.value);

            const categoriesRes = await fetch('https://api.chucknorris.io/jokes/categories');
            const categoriesData = await categoriesRes.json();
            setCategories(categoriesData);
        };

        fetchData();
    }, []);
    const handleJokeByQuery = async (query) => {
        const jokeRes = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
        const res = await jokeRes.json()
        const generatedJoke = res['result'][Math.floor(Math.random() * (res.total + 1))]
        setJoke(generatedJoke.value)
    }
    const handleJokeByCategory = async (category) => {
        const jokeRes = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        const res = await jokeRes.json()
        setJoke(res.value)
    }
    return (
        <div>
            <HeaderComponent/>
            <main>
                <section>
                    <FormComponent
                        categories={listedCategories}
                        handleJokeByCategory={handleJokeByCategory}
                        handleJokeByQuery={handleJokeByQuery}
                    />
                </section>
                <section>
                    {joke && (<p>{joke}</p>)}
                </section>
            </main>
        </div>
    )
}
export default Jokes
