import logo from './logo.svg';
import React,{useState} from "react";
import './App.css';
import Login from "./components/Login";
import MoviesTable from "./components/MoviesTable";

function App() {
    const [authToken, setAuthToken] = useState(null);

    return (
        <div className="App">

            {!authToken ? (
                <Login setAuthToken={setAuthToken} />
            ) : (
                <MoviesTable authToken={authToken} />
            )}
            
        </div>
    );
}

export default App;
