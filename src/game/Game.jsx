import HighScores from './HighScoresGame';
import ParticipantGame from './ParticipantGame';
import AddPlayer from './AddPlayer';
import './Game.css'
import { useState } from 'react';

export default function Game() {
    //useStates
    const [players, setPlayers] = useState([]);
    const [newPlayer, setNewPlayer] = useState('')

    //Helper Functions
    const addPlayer = (name) => {
        if(players.indexOf(name) > -1) return;
        else {
            const register = { name: name, active: false, gameState:'', count:'' };
            if(localStorage.getItem(name)===null) {
                register.score = [];
                localStorage.setItem(name, JSON.stringify([]));
            }
            else {
                register.score = JSON.parse(localStorage.getItem(name));
            }
            console.log(register);
            setPlayers([...players, register]);
        }
    }

    const removePlayer = (name) => {
        setPlayers(players.filter(p => p.name !== name));
    }

    //handler functions
    const handleAddPlayer = (e) => {
        e.preventDefault();
        if(!newPlayer) return;
        console.log(newPlayer);
        addPlayer(newPlayer);
        setNewPlayer('');
    }

    //JSX return
    return(
        <>
            <div className='title-card'>
                <h1>Get To 100!!!</h1>
                <HighScores />
            </div>
            <main>
                <AddPlayer 
                    newPlayer = {newPlayer}
                    setNewPlayer = {setNewPlayer}
                    handleAddPlayer = {handleAddPlayer}
                />
                <ParticipantGame 
                    players = {players}
                    setPlayers = {setPlayers}
                    removePlayer = {removePlayer}
                />
            </main>
                
        </>
    )
}
/** */