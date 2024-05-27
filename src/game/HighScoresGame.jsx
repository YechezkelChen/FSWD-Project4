export default function highScores() {
    const highScoreStyle = {listStyleType:"none",
        display:"flex",
        flexFlow:"row no-wrap",
        justifyContent:"space-evenly"}
    return (<>
        <h4>High Scores</h4>
        <ul style={highScoreStyle}>
            <li>First: Score</li>
            <li>Second: Score</li>
            <li>Third: Score</li>
        </ul>
    </>);
}
    