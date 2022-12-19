// import logo from './logo.svg';
import React from "react";

import Header from "./components/Header";
import Person from "./components/Person";
import WrongLetters from "./components/WrongLetters";

import "./App.css";

function App() {
    return (
        <>
            <Header />
            <div className="game-container">
                <Person />
                <WrongLetters />
            </div>
        </>
    );
}

export default App;
