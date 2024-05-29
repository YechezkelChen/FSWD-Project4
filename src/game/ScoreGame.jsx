import { useState } from "react";

export default function scoreGame(props) {
    const scores = JSON.parse(localStorage.getItem(props.player));
    const [scoreList, setScoreList] = useState(scores.map(s => `${s}, `));
    window.addEventListener('storage', () => {
        const scores = JSON.parse(localStorage.getItem(props.player));
        setScoreList(scores.map(s => `${s}, `));
    })
    return (
        <div>
            <h3>Score: {scoreList}</h3>
        </div>
    )
}