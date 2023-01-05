import React from "react";
import "./App.css";

import Header from "./Header";
import GameBoard from "./GameBoard";
import Footer from "./Footer";
import Snowfall from "react-snowfall";

function App() {
    return (
        <>
            <Header />
            <GameBoard />
            <Footer />
            <Snowfall
                snowflakeCount={200}
                style={{
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                }}
            />
        </>
    );
}

export default App;
