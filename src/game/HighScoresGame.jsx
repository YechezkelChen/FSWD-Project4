import { useState } from "react";

export default function highScores() {
    const highScoreStyle = {listStyleType:"none",
        display:"flex",
        flexFlow:"row no-wrap",
        justifyContent:"space-evenly"};
    const storageKeys = Object.keys(localStorage);
    const averageScores = {}
    for(let key of storageKeys) {
        const scores = JSON.parse(localStorage.getItem(key));
        averageScores[key] = scores.length !== 0 ? Math.round(scores.reduce((a,b)=> a+b)/scores.length) : 0;
    }

    var scoresAverage = new Array()
    for(let name in averageScores) {
        scoresAverage.push([name, averageScores[name]]);
    }
    scoresAverage.sort((a,b) => a[1]-b[1]);
    const [first, setFirst] = useState(scoresAverage[0]);
    const [second, setSecond] = useState(scoresAverage[1]);
    const [third, setThird] = useState(scoresAverage[2]);

    window.addEventListener('storage', () => {
            const storageKeys = Object.keys(localStorage);
        const averageScores = {}
        for(let key of storageKeys) {
            const scores = JSON.parse(localStorage.getItem(key));
            averageScores[key] = scores.length !== 0 ? Math.round(scores.reduce((a,b)=> a+b)/scores.length) : 0;
        }

        var scoresAverage = new Array()
        for(let name in averageScores) {
            scoresAverage.push([name, averageScores[name]]);
        }
        scoresAverage.sort((a,b) => a[1]-b[1]);
        setFirst(scoresAverage[0]);
        setSecond(scoresAverage[1]);
        setThird(scoresAverage[2]);    
    })
    return (<>
        <h4>High Scores</h4>
        <ul style={highScoreStyle}>
            {first && <li>{first[0]}: {first[1]}</li>}
            {seconde &&<li>{second[0]}: {second[1]}</li>}
            {third && <li>{third[0]}: {third[1]}</li>}
        </ul>
    </>);
}
    