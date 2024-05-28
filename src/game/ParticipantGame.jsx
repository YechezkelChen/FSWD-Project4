import SessionGame from './SessionGame.jsx'
import ScoreGame from './ScoreGame.jsx';
import { act, useState } from 'react';





export default function participantGame(props) {
    //Use States
    const [active, setActive] = useState(0);
    const [sessions, setSessions] = useState(props);
    const [scores, setScores] = useState([])

    //Handlers
    const handleDone = (e) => {
        const newActive = active+1 !== [...props.players].length ? active+1: 0;
        setActive(newActive);
    }

    const handleQuit = (e) => {
        props.handleRemovePlayer(props.players[active], e);
    }

    //Return List
    const participantList = props.players.map(p => {
        return(
                    <div className='player' key={p} style={{display:"flex", justifyContent:"space-evenly"}}>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
                        <h2>{p}</h2>
                        <ScoreGame player={p} scores={scores} setScores={setScores}/>
                    </div>
                    {props.run &&
                        <SessionGame 
                            name={p} 
                            handleDone={handleDone}
                            handleQuit={handleQuit} 
                            active={props.players[active] === p}/>
                    }
                    </div>
    )});

    return(<div className='playerlist'>{participantList}</div>
    );
}