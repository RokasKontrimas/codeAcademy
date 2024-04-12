import {Routes, Route} from "react-router-dom";
import Cities from "./Pages/Cities";
import Cars from "./Pages/Cars";

function App() {


    return (
        <Routes>
            <Route path='/' element={<Cities/>}/>
            <Route path='/cars' element={<Cars/>}/>
        </Routes>
    );
}

export default App;
