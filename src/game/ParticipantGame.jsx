import SessionGame from './SessionGame.jsx'
import ScoreGame from './ScoreGame.jsx';
import { useState } from 'react';

export default function participantGame(props) {
    //Use States
    const [active, setActive] = useState(0);

    //Handlers
    const handleDone = (e) => {
        const newActive = active + 1 !== [...props.players].length ? active + 1 : 0;
        setActive(newActive);
    }

    const handleQuit = (e) => {
        props.handleRemovePlayer(props.players[active], e);
        setActive(active >= [...props.players].length-1 ? 0: active);
    }

    //Return List
    const participantList = props.players.map(p => {
        return (
            <div className={[...props.players][active] === p ? 'active':'idle'}
                key={p} 
                style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                    <h2>{p}</h2>
                    <ScoreGame player={p} />
                </div>
                {props.run &&
                    <SessionGame
                        name={p}
                        handleDone={handleDone}
                        handleQuit={handleQuit}
                        active={props.players[active] === p} />
                }
            </div>
        )
    });

    return (<div className='player-list'>{participantList}</div>
    );
}