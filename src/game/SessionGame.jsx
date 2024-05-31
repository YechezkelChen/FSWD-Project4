import { useState } from "react";
//constant vars
const GOAL = 100;

//action functions
const actions = {
    "+1": x => x + 1,
    "-1": x => x - 1,
    "x2": x => 2 * x,
    "/2": x => Math.floor(x / 2)
}

//functions
const randInt = (max, min) => Math.floor(Math.random() * (max - min) + min);

function start() {
    return randInt(0, GOAL);
}

function isWin(num) { return num === GOAL }

function setTheScore(name, num) {
    const score = JSON.parse(localStorage.getItem(name));
    localStorage.setItem(name, JSON.stringify([...score, num]));
    window.dispatchEvent(new Event("storage"));
}

//jsx function
export default function SessionGame(props) {
    //useStates
    const [gameState, setGameState] = useState(start());
    const [count, setCount] = useState(0);
    //counter
    const addCount = () => setCount(count + 1);
    
    //handlers
    const handlePlayButtonCLick = (a, e) => {
        const number = actions[a](gameState)
        setGameState(number)
        addCount();
        if (!isWin(number)) {
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
            {Object.keys(actions).map(action => <button className="game-buttons"
                key={action}
                onClick={(e) => handlePlayButtonCLick(action, e)}>
                    {action}
                    </button>)}
        </div>
    );
    //buttons JSX
    const optButtons = (
        <div>
            <button className="game-buttons" onClick={(e) => reset(e)}>Play Again</button>
            <p style={{ display: "inline-block", margin: "0 10px" }}><b>You Win!!!</b></p>
            <button className="game-buttons" onClick={(e) => remove(e)} id="quit">Quit</button>
        </div>
    )
    //button conditions
    const controls = (isWin(gameState) ? optButtons : playButtons);
    //jsc return
    return (
        <div style={{ alignContent: "center", textAlign: "center", justifyContent: "center" }}>
            <h2>{gameState}</h2>
            <h3>Count: {count}</h3>
            {props.active && controls}
        </div>
    );
}

export { start };