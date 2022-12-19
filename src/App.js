import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Person from "./components/Person";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Popup from "./components/PopUp";
import Notification from "./components/Notification";
import { showNotification as show, checkWin } from "./helpers/helpers";

import "./App.css";

const words = [
    "christmas",
    "festive",
    "elves",
    "reindeer",
    "mistletoe",
    "xmas",
    "stocking",
    "present",
    "fruitcake",
    "chimney",
    "jesus",
    "family",
    "candy",
    "pinecone",
    "spirit",
    "tradition",
    "rudolph",
    "holiday",
    "snowball",
    "snowman",
    "workshop",
    "gingerbread",
    "angel",
    "elf",
    "feast",
    "goose",
];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        const handleKeydown = (event) => {
            const { key, keyCode } = event;
            if (playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();
                if (selectedWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        setCorrectLetters((currentLetters) => [
                            ...currentLetters,
                            letter,
                        ]);
                    } else {
                        show(setShowNotification);
                    }
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters((currentLetters) => [
                            ...currentLetters,
                            letter,
                        ]);
                    } else {
                        show(setShowNotification);
                    }
                }
            }
        };
        window.addEventListener("keydown", handleKeydown);

        return () => window.removeEventListener("keydown", handleKeydown);
    }, [correctLetters, wrongLetters, playable]);

    function playAgain() {
        setPlayable(true);

        // Empty Arrays
        setCorrectLetters([]);
        setWrongLetters([]);

        const random = Math.floor(Math.random() * words.length);
        selectedWord = words[random];
    }

    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className="game-container">
                <Person wrongLetters={wrongLetters} />
                <WrongLetters wrongLetters={wrongLetters} />
                <Word
                    selectedWord={selectedWord}
                    correctLetters={correctLetters}
                />
            </div>
            <Popup
                correctLetters={correctLetters}
                wrongLetters={wrongLetters}
                selectedWord={selectedWord}
                setPlayable={setPlayable}
                playAgain={playAgain}
            />
            <Notification showNotification={showNotification} />
        </>
    );
}

export default App;
