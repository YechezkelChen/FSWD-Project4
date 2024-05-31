import { useState } from "react";

export default function scoreGame(props) {
    //Constant vars
    const scores = JSON.parse(localStorage.getItem(props.player));
    //useStates
    const [scoreList, setScoreList] = useState(scores.map(s => `${s}, `));
    //event Listener
    window.addEventListener('storage', () => {
        const scores = JSON.parse(localStorage.getItem(props.player));
        setScoreList(scores.map(s => `${s}, `));
    })
    //jsx return
    return (
        <div>
            <h3>Score: {scoreList}</h3>
        </div>
    )
}