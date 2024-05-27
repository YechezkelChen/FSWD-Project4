import SessionGame from './SessionGame.jsx'
import ScoreGame from './ScoreGame.jsx';
import { useState } from 'react';





export default function participantGame(props) {
    const participantList = props.players.map(p => {
        return(<div className='player' key={p.name}>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
                    <h3>{p.name}</h3>
                    <h3>Current Number: {p.gameState}</h3>
                </div>
                <ScoreGame count={p.count} score={p.score}/>
        </div>
    )});
    console.log(participantList);
    return(<div className='playerlist'>
        {participantList}
        </div>
    );
}