import logo from './logo.svg';
import './App.css';
import Filter from "./components/Filter";
import Main from "./components/Main";

function App() {
    return (
        <div className="wrapper">
            <h1>Programos</h1>
            <Filter/>
            <Main/>
        </div>
    )
}

export default App;
