export default function scoreGame(props) {
    const scoreList = props.score.map(s => ` ${s}`);
    return (
        <div>
                <h3 style={{display: "inline-block", margin:"0 20px"}}>Count: {props.count}</h3>
                <h3 style={{display: "inline-block", margin:"20px"}}>Score: {scoreList}</h3>
        </div>
    )
}