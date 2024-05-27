import { useState } from 'react'
//import './App.css'
//import participants from ''
import Game from './game/Game.jsx'
import Buttons from "./game/ButtonsGame.jsx";

const apps = {game: <Game />};

function App() {
    return (
        <>
            <Game />
        </>
    )
}

export default App
