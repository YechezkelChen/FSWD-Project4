import { useState } from "react";
import ScoreGame from "./ScoreGame.jsx"

const randInt = (max,min) => Math.floor(Math.random() * (max - min) + min);

const goal = 100;


export default function SessionGame() {
    const active = true; 
    const shai = {
        name: "Shai",
        count: 0,
        score: [],
        gameState: randInt(0,100),
        playing: true
    }
    const [number, setNumber] = useState(shai.gameState);
    const [count, setCount] = useState(shai.count);
    const [score, setScore] = useState(shai.score);
    const [playing, setPlaying] = useState(shai.playing)

    const addScore = () => setCount(count+1);

    const handlePlusOne = () => {
        setNumber(number+1);
        addScore();
    }

    const minusOne = () => {
        setNumber(number-1);
        addScore();
    }

    const timesTwo = () => {
        setNumber(number * 2);
        addScore();
    }

    const half = () => {
        setNumber(Math.floor(number/2));
        addScore();
    }
    
    const reset = () => {
        setScore([...score, count])
        localStorage.setItem(shai.name, JSON.stringify([...score, count]));
        setCount(0);
        setNumber(randInt(0,goal));
    }

    const remove = () => {
        setScore([...score, count])
        localStorage.setItem(shai.name,JSON.stringify([...score, count]))
        setPlaying(false);
    }

    const playButtons = (
        <div>
            <button className="gameButtons" onClick={handlePlusOne}>+1</button>
            <button className="gameButtons" onClick={minusOne}>-1</button>
            <button className="gameButtons" onClick={timesTwo}>x2</button>
            <button className="gameButtons" onClick={half}>/2</button>
        </div>
    );

    const optButtons = (
        <div>
            <button className="gameButtons" onClick={reset}>Play Again</button>
            <p style={{display:"inline-block", margin:"0 10px"}}><b>You Win!!!</b></p>
            <button className="gameButtons" onClick={remove} id="quit">Quit</button>
        </div>
    )

    const controls = (number === goal ? optButtons: playButtons)

    return (
        <div style={{display: playing? "block" : "none"}}>
             <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
                <h3>{shai.name}</h3>
                <h3>Current Number: {number}</h3>
            </div>
            <ScoreGame count={count} score={score}/>
            {active && controls}
        </div>
    );
}