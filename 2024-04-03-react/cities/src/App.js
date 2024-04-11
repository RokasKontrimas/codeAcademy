import './App.css';
import {Routes,Route} from "react-router-dom";
import Main from "./components/Main";
import FormComponent from "./components/AddCityForm/FormComponent";

function App() {


    return (
        <Routes>
        <Route path='/' element={<Main/>}/>
<Route path='/add-city' element={<FormComponent/>}/>
        </Routes>
    );
}

export default App;
