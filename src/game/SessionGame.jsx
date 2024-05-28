import { useState } from "react";

const actions = {
    "+1": x => x+1,
    "-1": x => x-1,
    "x2": x => 2*x,
    "/2": x => Math.floor(x/2)
}



const GOAL = 100;
const randInt = (max,min) => Math.floor(Math.random() * (max - min) + min);

function start() {
    return randInt(0,GOAL);
}

function isWin(num) { return num === GOAL }

function setTheScore(name, num) {
    const score = JSON.parse(localStorage.getItem(name));
    localStorage.setItem(name, JSON.stringify([...score, num]));
    window.dispatchEvent(new Event("storage"));
}

export default function SessionGame(props) {

    const [gameState, setGameState] = useState(start());
    const [count, setCount] = useState(0);

    const addCount = () => setCount(count+1);

    const handlePlayButtonCLick = (a,e) => {
        const number = actions[a](gameState)
        setGameState(number)
        addCount();
        if(!isWin(number)){
            props.handleDone(e);
        }
    }
    
    const reset = (e) => {
        setTheScore(props.name, count);
        setCount(0);
        setGameState(start());
        props.handleDone(e)
    }

    const remove = (e) => {
        setTheScore(props.name, count);
        props.handleQuit(e);
    }

    const playButtons = (
        <div>
            {Object.keys(actions).map(a => <button className="gameButtons" key={a} onClick={(e) => handlePlayButtonCLick(a,e)}>{a}</button>)}
        </div>
    );

    const optButtons = (
        <div>
            <button className="gameButtons" onClick={(e) => reset(e)}>Play Again</button>
            <p style={{display:"inline-block", margin:"0 10px"}}><b>You Win!!!</b></p>
            <button className="gameButtons" onClick={(e) => remove(e)} id="quit">Quit</button>
        </div>
    )

    const controls = (isWin(gameState) ? optButtons: playButtons);

    return (
        <div style={{alignContent:"center", textAlign:"center", justifyContent:"center"}}>
            <h2>{gameState}</h2>
            <h3>Count: {count}</h3>
            {props.active && controls}
        </div>
    );
}

export { start };