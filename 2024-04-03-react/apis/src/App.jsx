import {useState} from 'react'
import {Route, Routes} from "react-router-dom";
import Jokes from "./Pages/Jokes.jsx";
import Dogs from "./Pages/Dogs.jsx";
import Ai from "./Pages/Ai.jsx";


function App() {
    return (

        <Routes>
            <Route path='/' element={<Jokes/>}/>
            <Route path='/dogs' element={<Dogs/>}/>
            <Route path='/ai' element={<Ai/>}/>
        </Routes>
    )
}

export default App
